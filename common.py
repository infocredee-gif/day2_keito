"""layout-pattern-samples 共通ロジック（標準ライブラリのみ）。"""
import json
import re
from pathlib import Path

SKILL_DIR = Path(__file__).resolve().parent.parent
REFERENCES = SKILL_DIR / 'references'
CATALOG_PATH = REFERENCES / 'catalog.json'
CATEGORIES_PATH = REFERENCES / 'categories.json'
INDEX_PATH = REFERENCES / 'index.html'
TEMPLATE_PATH = SKILL_DIR / 'scripts' / 'index_template.html'

FIELDS = ['id', 'category', 'name', 'use', 'mobile', 'figma', 'html', 'document']

BASE_CSS = (
    '*{box-sizing:border-box}body{margin:0;padding:14px;background:#fff;color:#334155;font:12px/1.5 system-ui,sans-serif}'
    '.group{display:grid;grid-template-columns:var(--cols);gap:8px;min-width:0}'
    '.box{border:1px solid #cbd5e1;border-radius:4px;display:flex;align-items:center;justify-content:center;padding:8px;text-align:center;min-width:0;overflow-wrap:anywhere;background:#f8fafc}'
    '.title{font-weight:700;background:white;border-color:#94a3b8}'
    '.text{color:#64748b;justify-content:flex-start;text-align:left;background:white}'
    '.accent{color:#1d4ed8;background:#dbeafe;border-color:#93c5fd;font-weight:700}'
    '.image{background:repeating-linear-gradient(135deg,#f1f5f9,#f1f5f9 9px,#e2e8f0 9px,#e2e8f0 10px);color:#64748b}'
    '.backdrop{padding:28px 20%;background:repeating-linear-gradient(135deg,#e2e8f0,#e2e8f0 10px,#cbd5e1 10px,#cbd5e1 11px);border-radius:5px}'
    '.timeline{border-left:3px solid #93c5fd;padding-left:16px;margin-left:10px}'
    '.orbit{display:grid;grid-template-columns:1fr 1.5fr 1fr;gap:8px;align-items:center}'
    '.note{font-size:10px;color:#64748b;margin:5px 0}'
    'details{border:1px solid #cbd5e1;padding:9px;border-radius:4px}summary{cursor:pointer}details p{margin:8px 0 0}'
    '@media(max-width:420px){.responsive{grid-template-columns:1fr}.reverse-mobile>:last-child{grid-row:1}.orbit{grid-template-columns:1fr}.orbit>:nth-child(2){grid-row:1}.backdrop{padding:20px}}'
)
# 「.box をカード容器として入れ子にすると子が横一列に潰れる」対策。追加パターンには常に同梱する
STACK_CSS = '.box:has(>.box){flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;text-align:left}'
MAX_DOC_LEN = 8000

ALLOWED_SYMBOLS = set('✓✔✗✘★☆○◯△◎▶◀●←↑→↓⇒')
EMOJI_RE = re.compile('[\U0001F000-\U0001FFFF☀-➿️‍⭐⭕⌚-⏿]')


def load_json(path):
    return json.loads(Path(path).read_text(encoding='utf-8'))


def save_json(path, data, indent=1):
    Path(path).write_text(json.dumps(data, ensure_ascii=False, indent=indent), encoding='utf-8')


def load_catalog(path=CATALOG_PATH):
    return load_json(path)


def load_categories(path=CATEGORIES_PATH):
    """{key: {prefix, category, scope, names}} を返す。"""
    return load_json(path)


def category_by_name(categories, name):
    for key, c in categories.items():
        if c['category'] == name or c['prefix'] == name.upper() or key == name.lower():
            return key, c
    return None, None


def build_document(pid, name, body, extra_css=''):
    return (
        '<!doctype html><html lang="ja"><meta charset="utf-8">'
        '<meta name="viewport" content="width=device-width, initial-scale=1">'
        f'<title>{pid} {name}</title><style>{BASE_CSS}{STACK_CSS}{extra_css}</style>'
        f'<body>{body}</body></html>'
    )


def body_of(document):
    m = re.search(r'<body>(.*)</body></html>\s*$', document, re.S)
    return m.group(1) if m else None


def emoji_in(s):
    return [c for c in EMOJI_RE.findall(s) if c not in ALLOWED_SYMBOLS]


def validate_pattern(p, expected_category=None):
    """1件の妥当性を検査し、問題文字列のリストを返す（空なら合格）。"""
    errors = []
    for f in FIELDS:
        v = p.get(f)
        if not isinstance(v, str) or not v.strip():
            errors.append(f'{f} が空')
    if errors:
        return errors
    d = p['document']
    if not d.startswith('<!doctype html>'):
        errors.append('document が <!doctype html> で始まっていない')
    if not d.rstrip().endswith('</html>'):
        errors.append('document が </html> で終わっていない')
    if BASE_CSS[:80] not in d:
        errors.append('BASE_CSS が含まれていない')
    if '<script' in d.lower():
        errors.append('<script> は禁止')
    if re.search(r'https?://', d):
        errors.append('外部URLは禁止')
    if len(d) > MAX_DOC_LEN:
        errors.append(f'document が {MAX_DOC_LEN} 文字を超えている ({len(d)})')
    body = body_of(d)
    if body is None:
        errors.append('document の body が <body>...</body></html> の形でない')
    elif body != p['html']:
        errors.append('html フィールドが document の body と一致しない')
    if f'<title>{p["id"]} {p["name"]}</title>' not in d:
        errors.append('title が "<id> <name>" になっていない')
    if expected_category and p['category'] != expected_category:
        errors.append(f'category は {expected_category} であるべき')
    for f in FIELDS:
        bad = emoji_in(p[f])
        if bad:
            errors.append(f'{f} に絵文字 {bad[:3]}')
    if '→' not in p['mobile']:
        errors.append('mobile は「A→B→C」形式で書く')
    return errors


def validate_catalog(catalog, categories):
    """カタログ全体の整合性。問題文字列のリストを返す。"""
    errors = []
    ids, names, bodies = set(), set(), set()
    counts = {}
    for p in catalog['patterns']:
        tag = p.get('id', '?')
        for e in validate_pattern(p):
            errors.append(f'{tag}: {e}')
        if p['id'] in ids:
            errors.append(f'{tag}: id 重複')
        if p['name'] in names:
            errors.append(f'{tag}: name 重複「{p["name"]}」')
        if p['html'] in bodies:
            errors.append(f'{tag}: body が他パターンと完全一致')
        ids.add(p['id']); names.add(p['name']); bodies.add(p['html'])
        key, c = category_by_name(categories, p['category'])
        if not c:
            errors.append(f'{tag}: 未定義カテゴリ「{p["category"]}」')
        else:
            if not p['id'].startswith(c['prefix']):
                errors.append(f'{tag}: id の prefix が {c["prefix"]} でない')
            counts[c['category']] = counts.get(c['category'], 0) + 1
    for c in catalog.get('categories', []):
        if counts.get(c['name'], 0) != c['count']:
            errors.append(f'categories の件数が実数と不一致: {c["name"]} {c["count"]} != {counts.get(c["name"], 0)}')
    return errors


def next_id(catalog, prefix):
    nums = [int(re.sub(r'\D', '', p['id']) or 0) for p in catalog['patterns'] if p['id'].startswith(prefix)]
    return f'{prefix}{(max(nums) + 1 if nums else 1):02d}'


def refresh_category_counts(catalog, categories):
    order = list(categories.keys())
    counts = {}
    for p in catalog['patterns']:
        counts[p['category']] = counts.get(p['category'], 0) + 1
    catalog['categories'] = [
        {'name': categories[k]['category'], 'prefix': categories[k]['prefix'], 'count': counts.get(categories[k]['category'], 0)}
        for k in order
    ]
    return catalog
