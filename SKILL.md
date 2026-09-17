---
name: style-vault-sample
description: STYLE VAULT（./STYLE-VAULT・デザインシステム1290件のピッカーサイト）にサンプルサイトを追加・修正・QAするスキル。「STYLE VAULTの#00XX〜#00XXを作成して」「style-vaultにサンプル追加」「スタイルボルトのサンプルを直して」「サムネを差し替えて」などの依頼で必ず使用する。DESIGN.md厳守の架空日本語ブランドサイト制作から、カタログ2箇所同時更新・サムネ差し替え・（デプロイ済みの場合の）Vercel反映まで一気通貫。恒久ルール: 絵文字は使わない（アイコンはインラインSVG自作か画像生成）・AI感のある表現をしない。
---

# style-vault-sample — STYLE VAULTサンプルサイト制作

## これは何

styles.refero.design 由来の1290スタイルをカタログ化したピッカーサイト「STYLE VAULT」に、各スタイルのDESIGN.mdを忠実に再現した架空日本語ブランドのサンプルサイトを追加していく作業の手順書。

- ルート（ROOT）: **このSKILL.mdが置かれているフォルダ自身**。以降のパスはすべてこのフォルダからの相対パスで書く（`catalog.json` / `index.html` / `styles/<slug>.md` / `samples/<slug>/index.html` / `thumbs/<id>.jpg` は全部ここにバンドルされている）
- スタイル定義: `styles/<slug>.md`（このDESIGN.mdだけを正とする）
- サンプル: `samples/<slug>/index.html`（単一自己完結HTML・lang="ja"）
- 番号: catalog配列インデックス+1 を4桁ゼロ埋め（#0021 など）

### 0. 作業前に必ず確認すること（データの所在）

1. **ROOT配下を実際に見る**: `ls`・`catalog.json`・`styles/`・`samples/`・`thumbs/` の件数を確認し、想定通りバンドルされているかをまず自分の目で見る。パスを推測で書かない
2. **デプロイ先が存在するかを確認する**: ROOT内に `.vercel/project.json`（Vercel）や `wrangler.toml`（Cloudflare）などのデプロイ設定・リンクがあるか、または本番URLがすでに分かっているかを確認する
   - **デプロイ済みの場合**: そのサーバー上の内容（本番URL・`vercel ls` / `wrangler` の状態など）を正として、ローカルとの差分がないか確認してから作業する。カタログの現在の`sample`設定状況など「今どこまで進んでいるか」はデプロイ先の実際の表示を見て判断する
   - **未デプロイ・リンクがない場合**: ROOT配下のローカルファイルを相対パスでそのまま参照して作業する（このスキルはその前提で自己完結している。基本はこちらをベースに考える）
3. 上記のどちらであっても、以降の手順の「ROOT」はこのSKILL.mdのあるフォルダを指す

## 恒久ルール（違反したら納品前に直す）

### 1. 絵文字禁止
- 見出し・本文・アイコン・ボタン、どこにも絵文字を置かない。絵文字はAI感が出る
- アイコンが必要なら**インラインSVGを自作**するか、**image-genスキル（gpt-image-2）で画像として生成**する
- SVGアイコンは全個で作画トーンを統一する: 同じviewBox・同じ角丸感・同じ線幅（線を使う場合）・パレット内の色だけ
- DESIGN.mdに「絵文字を使う」と書いてあっても、**SVGフラットアイコンに読み替える**（例: Aaply #0021 の「見出し内インライン絵文字」→ベースラインに乗せたフラットSVGステッカー）
- ✓ ✕ → ▾ などの文字グリフ（モノクロのタイポグラフィ記号）は絵文字ではないので使ってよい
- 納品前の機械チェック（0件になるまで直す）:

```bash
cd samples && python3 - <<'EOF'
import re, glob
pat = re.compile("[\U0001F000-\U0001FAFF\U00002600-\U000027BF\U0001F1E6-\U0001F1FF✀-➿]")
arrows = set("→←↑↓▾▼▲△▽◀▶○●◎■□◆◇✓✕✗")
for f in sorted(glob.glob("*/index.html")):
    hits = [c for c in pat.findall(open(f).read()) if c not in arrows and c != "️"]
    if hits: print(f, "".join(sorted(set(hits))))
EOF
```

### 2. AI感のある表現禁止
- コピーは natural-japanese スキルと自分の文体ナレッジ（Obsidianに保管している場合はそこ）に従う
- 具体的なNG: テンプレ前置き・締め（「〜していきましょう」「いかがでしたか」）、抽象形容詞の羅列（便利・効果的・重要）、同じ語尾の3連続、「〜に関して」「〜において」「〜させていただきます」
- サブエージェントに制作を委譲するときは、このルールをエージェントプロンプトに必ず書き込む

### 3. サイト共通の約束
- 架空の日本語ブランド。実在サービス・人物と被らせない。既存samples/のブランド名とも被らせない
- フッター末尾に2行:
  - 「（ブランド名）、そこに登場する◯◯や人物は、すべて実在しません。」
  - 「このページはデザインシステム「（nameJa）」(#NNNN) のサンプルサイトです」
- DESIGN.mdに無い色・フォント・影・角丸は使わない。Do/Don'tを一つずつ守る
- カスタムフォントはDESIGN.md記載の代替（Google Fonts）+ Noto Sans JP
- レスポンシブ必須

### 4. 画像生成・アニメーションは妥協しない（2026-09更新）
- サンプルサイトは「DESIGN.mdの見た目を再現した静的モックアップ」で終わらせない。DESIGN.mdの「写真・イラスト・動きの扱い」を読み、写真・イラストが想定されているスタイルでは**必ずimage-genスキル（デフォルトモデル gpt-image-2）で実際に画像を生成して使う**。CSS/SVGだけで済ませるのは、DESIGN.mdが写真・イラストの使用を明確に禁止しているスタイル（モノクロタイポ系など）に限る
- インタラクティブ演出はvanilla JSの2〜3個で最低限を満たすのではなく、**Webサイトとして見栄えのする表現**（スクロールトリガーのフェード/パララックス、ホバー時のマイクロインタラクション、スムーズなページ内遷移など）を積極的に取り入れる。動きが激しい/装飾過多なスタイルの場合はgsapスキルの利用も検討する。ただし演出はDESIGN.mdの「動き」の記述（速さ・静けさ・派手さのトーン）に必ず従うこと。DESIGN.mdが「ゆっくり」「静か」と書いているスタイルに派手なアニメーションを足さない
- エージェントに委譲するときは、このルール（画像生成必須の条件・動きのトーン厳守）をエージェントプロンプトに明記する

### 5. 画像生成のAPIキーはスキル内に持たない（他社配布前提）
- このスキル（styles/ ・ samples/ ・ SKILL.md を含むROOT一式）は他社へそのまま渡す配布物。**APIキーやその参照パスをSKILL.md・スクリプト・生成したサンプルHTMLのどこにもハードコードしない**
- 画像生成は必ずimage-genスキル経由で行う。image-genスキルは `OPENAI_API_KEY` を①OS環境変数→②`~/.claude/skills/.env` の順で自動解決するため、STYLE-VAULT側はキーの存在を意識する必要がない（呼び出すだけでよい）
- 渡した先の会社でも同じ手順が動くよう、必要なのは「image-genスキルが入っていること」と「先方環境の `~/.claude/skills/.env`（または OS 環境変数）に先方自身の `OPENAI_API_KEY` が設定されていること」だけ。三浦さんのキーやパスを前提にした記述を残さない

## ワークフロー（ROOT＝このSKILL.mdのあるフォルダを基準にした相対パスで進める）

1. **対象選定**: ROOTの `catalog.json` を開き、`sample` 未設定のエントリを確認する（デプロイ済みならデプロイ先の表示と食い違っていないかも見る＝手順0）
2. **制作**: スタイルごとにcode-implementerを**並列起動**。エージェントプロンプトには (a)`styles/<slug>.md`（DESIGN.md）への相対パスと厳守指示 (b)恒久ルール1・2・4・5の全文 (c)フッター2行 (d)参考として既存サンプル1つ (e)catalog.json・ルートindex.htmlに触るな、を必ず含める
3. **カタログ2箇所同時更新**（片方だけ更新すると表示がズレる。ROOT＝このSKILL.mdのあるフォルダで実行する）:

**重要:** `index.html`には`const CAT = [...]`と`const MD = {...}`という2つの巨大なJSONが埋め込まれている（MDは全1290スタイルのDESIGN.md全文、数十MB）。この中には当然「`];`」や「`};`」のような文字列がデータの中身としてもたくさん含まれるため、**`re.sub(r"const CAT = \[.*?\];", ...)`のような非貪欲正規表現で置換するのは禁止**。非貪欲マッチはデータの中の偶然の一致で早期に止まり、そこでファイルを真っ二つに切断する。実際にこれで`index.html`が壊れ、サイトが真っ暗になる事故が起きている（2026-09-16）。必ず下記のように`json.JSONDecoder().raw_decode`でJSONの正しい終端を機械的に求めてから置換すること:

```python
import json, glob, os

ROOT = "."  # このSKILL.mdがあるフォルダをカレントディレクトリにして実行する

def replace_embedded_json(html, marker, new_obj):
    i = html.index(marker)
    start = i + len(marker)
    end = json.JSONDecoder().raw_decode(html, start)[1]  # 正しい終端をJSONとして厳密に検出
    j = end
    if html[j:j+1] == ";": j += 1
    if html[j:j+1] == "\n": j += 1
    new_stmt = marker + json.dumps(new_obj, ensure_ascii=False) + ";\n"
    return html[:i] + new_stmt + html[j:]

# --- カタログ更新（cat[i]["sample"] = f"samples/{slug}/" などを設定した後） ---
cat = json.load(open(f"{ROOT}/catalog.json"))
open(f"{ROOT}/catalog.json", "w").write(json.dumps(cat, ensure_ascii=False, indent=0))
html = open(f"{ROOT}/index.html", encoding="utf-8").read()
html = replace_embedded_json(html, "const CAT = ", cat)
open(f"{ROOT}/index.html", "w", encoding="utf-8").write(html)
```

新規styles/*.mdを追加・変更した場合は、`index.html`に埋め込まれた `const MD = {...}` も同じタイミングで必ず再生成する（DESIGN.mdポップアップは`fetch`もiframeナビゲーションも使わず、この埋め込みデータを直接読むことで `file://` で直接開いても常に同じ見た目で全文表示できる設計。片方だけ更新するとポップアップの内容が古くなる）。**上と同じ`replace_embedded_json`関数を使う**:

```python
import json, glob, os
ROOT = "."
md = {os.path.basename(f)[:-3]: open(f, encoding="utf-8").read() for f in glob.glob(f"{ROOT}/styles/*.md")}
html = open(f"{ROOT}/index.html", encoding="utf-8").read()
html = replace_embedded_json(html, "const MD = ", md)  # 関数定義は上のブロック参照
open(f"{ROOT}/index.html", "w", encoding="utf-8").write(html)
```

作業後は必ず `node --check` 相当（またはブラウザで実際にグリッドが表示されるか）で壊れていないことを確認してからでないと完了扱いにしない。

4. **QA（目視必須）**: 絵文字チェック（上記）→ ヘッドレスChromeで全ページのスクショを撮って自分の目で確認する。使い捨てプロファイルは終了処理で固まるので「出力ファイルのサイズが安定したらterminate」方式（`--user-data-dir` 必須・60秒ハードタイムアウト）。フルページはローカルHTTPサーバー + Playwright（file://はMCPが拒否）。スクロール発火のフェードは実スクロールで確認。加えて、各カード詳細の「DESIGN.md 全文を見る」ボタンを押し、ポップアップに白文字・暗背景・上下左右の余白ありで全文が表示されることを確認する（`index.html`に埋め込んだ`const MD`を直接読む実装のため、`file://`で直接開いた場合でも同じ見え方になる。styles/を更新したのに`MD`の再生成を忘れると内容が古いまま出るので要注意）
5. **サムネ差し替え＋DESIGN.mdへのサンプルサイトパス記載**: 新規サンプルを1つ作ったら、必ずこの2点を両方行う
   - `thumbs/<catalogのid>.jpg` をサンプル先頭のスクショ（1200×750・JPEG品質85）で上書き
   - `styles/<slug>.md`（DESIGN.md）の `- サンプルサイト: 準備中（順次追加）` の行を `- サンプルサイト: samples/<slug>/` という**ROOTからの相対パス**に書き換える。「準備中」のまま残さない。**デプロイ済みでも本番URL（`https://〜.vercel.app/...`）は書かない**（このスキルは他社へそのまま渡す配布物で、渡した先では自分のURLが存在しないため。相対パスならROOTがどこに置かれても、誰の環境でも通用する）
6. **デプロイ**（デプロイ先が存在する場合。手順0で確認したデプロイ設定に従う）: ROOTで `npx vercel deploy --prod --yes` を実行 → `curl` で401を確認（Basic認証の仕様）。デプロイ先が無い場合はこの手順は行わず、ローカルのROOT配下が最新状態であることをもって完了とする
7. **push**（ROOTがgitリポジトリ内にある場合）: コミットしてpush（メッセージ例: 「style-vault: サンプルサイト #00XX〜#00XX を追加（カタログ反映・サムネ差し替え込み）」）。gitリポジトリでない場合はこの手順は不要

## クラウド日次ルーティンとの関係

Claude.aiルーティン（1日1件・SVG/CSSのみ・サムネ差し替えなし）を回している場合は、そのルーティン用プロンプトの正典を別途保管しておき、**ルールを変えたらこのスキルとルーティンプロンプトの両方を更新する**。

## 関連

- デプロイ情報（projectId・orgIdなど）はハードコードせず、ROOT内の `.vercel/project.json` を手順0で確認して使う。別環境のIDを使い回さない
