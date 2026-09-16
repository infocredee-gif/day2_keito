#!/usr/bin/env python3
"""OpenAI の画像生成APIで画像を1枚作り、指定パスに保存する。

環境変数 OPENAI_API_KEY が必要。追加のライブラリは不要（標準ライブラリのみ）。

使い方:
    python3 generate_image.py --prompt "指示文" --out site/images/hero.png
    python3 generate_image.py --prompt "指示文" --out site/images/card.png --size 1024x1024

サイズ: 1536x1024（横長・ヒーロー向け） / 1024x1024（正方形・カード向け）
        1024x1536（縦長） / auto
"""

import argparse
import base64
import json
import os
import pathlib
import sys
import urllib.error
import urllib.request

API_URL = "https://api.openai.com/v1/images/generations"
SIZES = ("1024x1024", "1536x1024", "1024x1536", "auto")


def main() -> int:
    parser = argparse.ArgumentParser(description="OpenAI画像生成で画像を1枚保存する")
    parser.add_argument("--prompt", required=True, help="画像の指示文")
    parser.add_argument("--out", required=True, help="保存先パス（例: site/images/hero.png）")
    parser.add_argument("--size", default="1536x1024", choices=SIZES, help="画像サイズ")
    parser.add_argument("--quality", default="high", choices=("low", "medium", "high", "auto"))
    parser.add_argument("--model", default="gpt-image-1")
    args = parser.parse_args()

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        print(
            "OPENAI_API_KEY が未設定です。画像生成にはOpenAIのAPIキーが必要です。\n"
            "  export OPENAI_API_KEY='sk-...'  を設定してから再実行してください。",
            file=sys.stderr,
        )
        return 2

    payload = json.dumps(
        {
            "model": args.model,
            "prompt": args.prompt,
            "size": args.size,
            "quality": args.quality,
            "n": 1,
        }
    ).encode("utf-8")

    request = urllib.request.Request(
        API_URL,
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
    )

    try:
        with urllib.request.urlopen(request, timeout=300) as response:
            body = json.load(response)
    except urllib.error.HTTPError as error:
        detail = error.read().decode("utf-8", "replace")[:800]
        print(f"画像生成に失敗しました (HTTP {error.code}): {detail}", file=sys.stderr)
        return 1
    except urllib.error.URLError as error:
        print(f"APIに接続できませんでした: {error.reason}", file=sys.stderr)
        return 1

    try:
        encoded = body["data"][0]["b64_json"]
    except (KeyError, IndexError):
        print(f"予期しない応答でした: {json.dumps(body)[:800]}", file=sys.stderr)
        return 1

    out_path = pathlib.Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_bytes(base64.b64decode(encoded))

    print(f"保存しました: {out_path}  ({args.size}, {args.quality})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
