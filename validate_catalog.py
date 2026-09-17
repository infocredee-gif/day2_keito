"""references/catalog.json 全件の整合性検査。
usage: python3 scripts/validate_catalog.py [--catalog PATH]
"""
import argparse
import sys

from common import CATALOG_PATH, load_catalog, load_categories, validate_catalog

ap = argparse.ArgumentParser()
ap.add_argument('--catalog', default=str(CATALOG_PATH))
args = ap.parse_args()

catalog = load_catalog(args.catalog)
errors = validate_catalog(catalog, load_categories())
if errors:
    print(f'FAIL ({len(errors)} issues)')
    for e in errors[:100]:
        print(' -', e)
    sys.exit(1)
print(f'PASS: {len(catalog["patterns"])} patterns / ' + ', '.join(f'{c["name"]} {c["count"]}' for c in catalog['categories']))
