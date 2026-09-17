---
name: layout-pattern-samples
description: Webサイトのワイヤーフレーム配置見本200件（サイト全体／ヒーロー／特徴／カード／問い合わせフォーム／実績／比較の7カテゴリ）から、目的に合うレイアウト候補を3案選んでHTMLやFigmaの配置へ落とし込む。新しいレイアウトパターンの追加もこのスキルが担当し、references/catalog.json に蓄積していく。「レイアウト案を出して」「配置のパターンを見せて」「ヒーローのレイアウト候補」「サイト全体の骨格を選びたい」「レイアウトパターンを追加して」「新しい配置を登録して」「layout-pattern-samples」「/layout-pattern-samples」などの依頼で必ず使用する。
user-invocable: true
argument-hint: "[サイトの目的と対象者 | 追加: カテゴリと配置の説明]"
---

# layout-pattern-samples — レイアウトパターン200選

配置だけを比べるワイヤーフレーム集。色・書体はあとから利用者のデザインシステムで置き換える前提なので、ここでは「何を、どこに、どの比率で並べるか」だけを扱う。

呼び出し: Claude Code は `/layout-pattern-samples ...`、Codex は `$layout-pattern-samples ...`（または `/skills` から選択）。引数の先頭が「追加」「追加:」「add」ならワークフローB、それ以外はワークフローA。

## 場所（このSKILL.mdからの相対パス）

| もの | パス | 使い方 |
|---|---|---|
| パターン本体（唯一の正本） | `references/catalog.json` | **丸ごと Read しない**（約1.1MB）。`scripts/query.py` で必要な件だけ取り出す |
| カテゴリ定義（prefix・守備範囲・名前一覧） | `references/categories.json` | 追加時の採番と重複チェックに使う |
| 一覧ビューア | `references/index.html` | ブラウザで開く単独HTML。検索・カテゴリ絞り込み・スマホ幅・HTML取り出し。`build_index.py` で再生成 |
| パターン仕様 | `references/spec.md` | 追加・修正する前に必ず読む（8フィールド・BASE_CSSのクラス・表現ルール・罠） |
| 取り出し | `scripts/query.py` | `stats` / `list [--category X] [--q 語]` / `show ID... [--html\|--body\|--meta]` |
| 追加 | `scripts/add_patterns.py` | JSONを渡すと採番→document組立→検証→catalog追記→index再生成 |
| 検証 | `scripts/validate_catalog.py` | 全件の整合性（重複・絵文字・外部URL・8フィールド） |
| 撮影QA | `scripts/shoot.mjs` | 指定IDを 900px／390px で撮影（playwright-core＋Chrome） |

Python は標準ライブラリのみ。`python3` が Xcode ライセンスのエラーを出す環境では `/opt/homebrew/bin/python3.12` を使う。以下のコマンドはスキルフォルダで実行する（`cd "$(dirname SKILL.md)"` 相当）。

## カテゴリとID

| prefix | カテゴリ | 入れるもの |
|---|---|---|
| SITE | サイト全体 | ページ1枚の骨格（ヘッダー・ナビ・サイドバー・セクションの積み方・固定バー） |
| HERO | ヒーロー | ファーストビュー |
| FEAT | 特徴 | 機能・強みの説明構造（カラム／ステップ／タブ／相関図／Before-After） |
| CARD | カード | 同じ形のカードを繰り返す一覧（商品・記事・メンバー・料金） |
| FORM | 問い合わせフォーム | 問い合わせ・申込・予約 |
| RESULT | 実績 | 数値・導入ロゴ・お客様の声・事例・受賞歴 |
| COMPARE | 比較 | プラン比較・競合比較・機能マトリクス・診断フロー |

件数は `python3 scripts/query.py stats` で確認する（追加のたびに増える）。

## ワークフローA 選んで適用する

1. 不足する情報だけを質問ツール（AskUserQuestion / request_user_input）で聞く。主に「サイトの目的と対象者」「来訪者にしてほしい行動」「デザインシステムやDesign.mdの場所」「作るのはページ全体か、特定セクションか」。分かっている内容は聞き直さない。
2. 候補を取り出す。
   ```bash
   python3 scripts/query.py list --category ヒーロー            # カテゴリの一覧（id・名前・用途）
   python3 scripts/query.py list --q 比較表                       # キーワード検索
   python3 scripts/query.py show HERO10 FEAT03 --meta            # 用途・スマホ順・Figma指示
   python3 scripts/query.py show HERO10 --html                   # 実装の土台にする単独HTML
   ```
3. 3案をID・名前・選定理由・スマホ時の並びと一緒に提示する。
   - ページ全体なら、まず SITE から骨格を1つ選び、各セクションに HERO / FEAT / CARD / RESULT / COMPARE / FORM を当てはめた組み合わせを3案にする（例: SITE16 ＋ HERO10 ＋ FEAT03 ＋ RESULT04 ＋ COMPARE02 ＋ FORM02）。
   - 特定セクションだけなら、そのカテゴリから3案。似た候補は「要素の主役が何か」（数値か、ロゴか、声か）で選び分ける。
   - 利用者がIDを指定済みならその指定を使う。
4. 選ばれたIDの `document`（`show ID --html`）を土台に実装へ反映する。
   - 並びと幅比はパターンどおり。色・書体・余白・角丸・ボタンは利用者のデザインシステムを優先し、見本の白灰青をブランド指定として扱わない。
   - Design.md があれば装飾・写真の方向性・密度を取り入れる。ブランド規則と衝突する項目はブランド側を維持し、変更点だけ説明する。
   - 数値・料金・企業ロゴ・お客様の声・プラン名は配置用ラベル。架空の実績として公開せず、提供された内容へ置き換える。
   - 複数パターンを組み合わせるときは、セクション間の余白・見出しサイズ・CTA文言をページ内で揃える。
5. Figma を指定された場合は、接続済みMCPの実際のツール一覧を確認する。フレーム作成・編集ができるツールがあれば `figma` フィールドの幅比・順序を Auto Layout へ反映する。編集ツールがなければ、フレーム構成・方向・幅比・余白・スマホ時の順序を手作業用の指示として渡し、未実行の作業を完了扱いにしない。HTML を指定された場合は `document` の見出し・段落・リンク・フォームを実物に置き換え、画像枠には利用者の画像か生成画像を入れる。
6. PCとスマホの両方で文字のはみ出し・読み順・ボタンの押しやすさを確認し、実装したID・適用したデザインシステム・確認結果を短く報告する。

## ワークフローB 新しいパターンを追加する

追加先は常に `references/catalog.json`（正本はこの1か所。デスクトップ等の配布コピーには書かない）。

1. `references/spec.md` を読む。
2. 重複を確認する。`python3 scripts/query.py list --category <カテゴリ>` で同じ配置がないか見る。似たものがあれば「主役が何か」が違うときだけ追加し、要素順の入れ替えや色違いは追加しない。
3. 追加用JSONを作る（作業用の一時ファイル。配列で複数可）。
   ```json
   [{
     "category": "ヒーロー",
     "name": "見出し＋◯◯",
     "use": "◯◯を同時に見せたい場面で使う",
     "mobile": "見出し→説明→CTA→画像",
     "figma": "横Auto Layout。左右1:1、スマホは縦に変更。",
     "body": "<div class=\"group responsive\" style=\"--cols:1fr 1fr\">…</div>",
     "extra_css": ".pill{border-radius:20px}"
   }]
   ```
   body は spec.md の BASE_CSS クラスで組む。既存の近いパターンを `show ID --body` で参考にする。
4. 検証してから書き込む。
   ```bash
   python3 scripts/add_patterns.py new_patterns.json --dry-run   # 採番・検証だけ
   python3 scripts/add_patterns.py new_patterns.json             # catalog追記＋index再生成
   ```
   FAIL が出たら理由（名前重複／body重複／絵文字／外部URL／mobile形式／8,000字超）を直して再実行する。新カテゴリを作るときは `--new-category "名前" --prefix XXX --scope "守備範囲"` を付ける。
5. 撮影して目視する。`node scripts/shoot.mjs /tmp/lp-shots HERO31` で PC／スマホの2枚を出し、Read で確認。潰れ・はみ出し・名前と違う配置があれば body を直し、該当IDを catalog.json から削除して再追加するか、直接 `html` と `document` の body を同じ内容に書き換えて `validate_catalog.py` を通す。
6. 追加したID・名前・カテゴリ別件数（`query.py stats`）を報告する。

## ワークフローC 一覧を見せる

`references/index.html` をブラウザで開く（`open references/index.html`）。ID・用途で検索、カテゴリで絞り込み、「スマホ幅」で390px表示、各カードの「HTMLを表示・選択」で単独HTMLを取り出せる。

## 決まりごと

- catalog.json を Read で全文読まない。query.py で必要な件だけ出す。
- 見本のフォーム・タブ・価格切替は静的な配置見本。送信や切替の機能は実装側で別途つくる。
- 200件はすべてオリジナルの簡易ワイヤーフレーム。同じ配置は1つもなく、追加時も `add_patterns.py` が名前と body の重複を拒否する。
