"""catalog.json を読まずに要点だけ取り出す（1.1MB の JSON を丸ごと Read しないため）。
usage:
  python3 scripts/query.py stats
  python3 scripts/query.py list [--category ヒーロー] [--q キーワード]
  python3 scripts/query.py show HERO01 [HERO02 ...] [--html | --body | --meta]
"""
import argparse
import re

from common import CATALOG_PATH, load_catalog, body_of

ap = argparse.ArgumentParser()
ap.add_argument('cmd', choices=['stats', 'list', 'show'])
ap.add_argument('ids', nargs='*')
ap.add_argument('--category')
ap.add_argument('--q')
ap.add_argument('--html', action='store_true', help='document（CSS付き単独HTML）を出す')
ap.add_argument('--body', action='store_true', help='body 部分だけ出す')
ap.add_argument('--meta', action='store_true', help='use/mobile/figma だけ出す')
ap.add_argument('--catalog', default=str(CATALOG_PATH))
args = ap.parse_args()

catalog = load_catalog(args.catalog)
patterns = catalog['patterns']

if args.cmd == 'stats':
    print(f'version {catalog["version"]} / {len(patterns)} patterns')
    for c in catalog['categories']:
        print(f'  {c["prefix"]:8} {c["name"]:10} {c["count"]:3}件')

elif args.cmd == 'list':
    q = (args.q or '').lower()
    for p in patterns:
        if args.category and p['category'] != args.category:
            continue
        if q and q not in (p['id'] + p['name'] + p['use'] + p['mobile']).lower():
            continue
        print(f'{p["id"]:10} {p["name"]}  —  {p["use"]}')

elif args.cmd == 'show':
    want = {i.upper() for i in args.ids}
    for p in patterns:
        if p['id'] in want:
            print(f'### {p["id"]} {p["name"]} [{p["category"]}]')
            print(f'use: {p["use"]}\nmobile: {p["mobile"]}\nfigma: {p["figma"]}')
            if args.html:
                print(p['document'])
            elif args.body or not args.meta:
                print('body:')
                print(body_of(p['document']) or p['html'])
            print()
    missing = want - {p['id'] for p in patterns}
    if missing:
        print('not found:', ', '.join(sorted(missing)))
