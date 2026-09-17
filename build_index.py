"""references/catalog.json から references/index.html（単独ビューア）を再生成する。
usage: python3 scripts/build_index.py [--catalog PATH] [--out PATH]
"""
import argparse
import json
import re

from common import CATALOG_PATH, INDEX_PATH, TEMPLATE_PATH, load_catalog

ap = argparse.ArgumentParser()
ap.add_argument('--catalog', default=str(CATALOG_PATH))
ap.add_argument('--out', default=str(INDEX_PATH))
args = ap.parse_args()

catalog = load_catalog(args.catalog)
patterns = catalog['patterns']
total = len(patterns)
options = ''.join(f'<option>{c["name"]}</option>' for c in catalog['categories'])
cat_summary = '・'.join(c['name'] for c in catalog['categories'])
# JSON を <script> に内蔵するため "</" を "<\/" にしてタグの早期終了を防ぐ
data = json.dumps(patterns, ensure_ascii=False).replace('</', '<\\/')

html = TEMPLATE_PATH.read_text(encoding='utf-8')
html = html.replace('{{TOTAL}}', str(total)).replace('{{OPTIONS}}', options).replace('{{CATEGORIES}}', cat_summary)
html = html.replace('{{DATA}}', data)
assert '{{' not in re.sub(r'<script id="catalog-data".*?</script>', '', html, flags=re.S), 'テンプレートの置換漏れ'
with open(args.out, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'index.html: {total} patterns, {len(html.encode("utf-8")):,} bytes -> {args.out}')
