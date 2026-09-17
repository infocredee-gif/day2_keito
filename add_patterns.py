"""新しいレイアウトパターンを references/catalog.json に追加し、index.html を再生成する。

usage:
  python3 scripts/add_patterns.py new_patterns.json [--dry-run] [--no-index]

new_patterns.json は配列。各要素:
  {
    "category": "ヒーロー",          # categories.json の category 名（prefix や key でも可）
    "name": "見出し＋◯◯",           # 既存と重複しない名前
    "use": "…な場面で使う",          # 1文
    "mobile": "見出し→説明→CTA",     # 「A→B→C」形式
    "figma": "縦Auto Layout。…",     # 1〜2文
    "body": "<div class=\"box title\">…</div>",   # <body> の中身。BASE_CSS のクラスで組む
    "extra_css": ".pill{…}"          # 任意。追加クラス
  }
id は自動採番（そのカテゴリの最大番号+1）。document は BASE_CSS + STACK_CSS + extra_css で組み立てる。
新カテゴリを足すときは --new-category "名前" --prefix XXX --scope "説明" を付ける（その追加分は全件その category にする）。
"""
import argparse
import re
import subprocess
import sys
from pathlib import Path

from common import (CATALOG_PATH, CATEGORIES_PATH, build_document, category_by_name, load_catalog,
                    load_categories, load_json, next_id, refresh_category_counts, save_json,
                    validate_catalog, validate_pattern)

ap = argparse.ArgumentParser()
ap.add_argument('input')
ap.add_argument('--dry-run', action='store_true', help='検証だけ行い書き込まない')
ap.add_argument('--no-index', action='store_true', help='index.html を再生成しない')
ap.add_argument('--new-category')
ap.add_argument('--prefix')
ap.add_argument('--scope', default='')
ap.add_argument('--catalog', default=str(CATALOG_PATH))
ap.add_argument('--categories', default=str(CATEGORIES_PATH))
args = ap.parse_args()

catalog = load_catalog(args.catalog)
categories = load_categories(args.categories)
items = load_json(args.input)
if isinstance(items, dict):
    items = [items]

if args.new_category:
    if not args.prefix or not re.fullmatch(r'[A-Z]{2,10}', args.prefix):
        sys.exit('--new-category には --prefix（大文字英字2〜10）が必要')
    key = args.prefix.lower()
    if key in categories or any(c['prefix'] == args.prefix for c in categories.values()):
        sys.exit(f'カテゴリ/prefix が既に存在: {args.new_category} / {args.prefix}')
    categories[key] = {'prefix': args.prefix, 'category': args.new_category, 'scope': args.scope, 'names': []}

existing_names = {p['name'] for p in catalog['patterns']}
existing_bodies = {p['html'] for p in catalog['patterns']}
added = []
errors = []
for i, it in enumerate(items):
    cat_name = args.new_category or it.get('category', '')
    key, cat = category_by_name(categories, cat_name)
    if not cat:
        errors.append(f'[{i}] 未定義カテゴリ「{cat_name}」（--new-category で追加できる）')
        continue
    if 'body' not in it and 'html' in it:
        it['body'] = it['html']
    missing = [f for f in ['name', 'use', 'mobile', 'figma', 'body'] if not it.get(f)]
    if missing:
        errors.append(f'[{i}] 欠落: {missing}')
        continue
    if it['name'] in existing_names:
        errors.append(f'[{i}] name が既存と重複: {it["name"]}')
        continue
    if it['body'] in existing_bodies:
        errors.append(f'[{i}] body が既存パターンと完全一致（重複）')
        continue
    pid = next_id(catalog, cat['prefix'])
    p = {
        'id': pid,
        'category': cat['category'],
        'name': it['name'],
        'use': it['use'],
        'mobile': it['mobile'],
        'figma': it['figma'],
        'html': it['body'],
        'document': build_document(pid, it['name'], it['body'], it.get('extra_css', '')),
    }
    errs = validate_pattern(p, cat['category'])
    if errs:
        errors.append(f'[{i}] {it["name"]}: ' + ' / '.join(errs))
        continue
    # 同カテゴリの末尾に挿入して ID の並びを保つ
    last = max((n for n, q in enumerate(catalog['patterns']) if q['category'] == cat['category']), default=len(catalog['patterns']) - 1)
    catalog['patterns'].insert(last + 1, p)
    cat.setdefault('names', []).append(it['name'])
    existing_names.add(p['name']); existing_bodies.add(p['html'])
    added.append(p)

if errors:
    print(f'FAIL ({len(errors)})')
    for e in errors:
        print(' -', e)
    sys.exit(1)

catalog = refresh_category_counts(catalog, categories)
all_errors = validate_catalog(catalog, categories)
if all_errors:
    print('FAIL: カタログ全体の検証で問題')
    for e in all_errors[:50]:
        print(' -', e)
    sys.exit(1)

for p in added:
    print(f'+ {p["id"]} {p["name"]} [{p["category"]}] ({len(p["document"])} chars)')
if args.dry_run:
    print(f'dry-run: {len(added)} 件は追加可能（書き込みなし）')
    sys.exit(0)

save_json(args.catalog, catalog)
save_json(args.categories, categories, indent=2)
print(f'catalog.json: {len(catalog["patterns"])} patterns')
if not args.no_index:
    subprocess.run([sys.executable, str(Path(__file__).with_name('build_index.py')), '--catalog', args.catalog], check=True)
