# パターン仕様（追加・修正するときの決まり）

`catalog.json` の1要素＝1パターン。8フィールドすべて文字列。

| フィールド | 内容 |
|---|---|
| id | prefix＋2桁以上の連番（SITE01, HERO12, COMPARE32 …）。`add_patterns.py` が自動採番 |
| category | `categories.json` の category 名と完全一致 |
| name | 既存と重複しない名前。配置の違いが名前だけで分かる表現にする（例「見出し＋星評価＋利用者数バッジ」） |
| use | 使う場面を1文（40〜80字）。「〜を同時に見せたい場面」「〜を先に選ばせたい場面」のように具体的に |
| mobile | スマホ幅での並び順を「A→B→C」形式で |
| figma | Auto Layout への置き換え指示を1〜2文（方向・幅比・スマホ時の変更点） |
| html | `<body>` の中身そのもの（document の body と完全一致） |
| document | `<!doctype html>` から `</html>` までの単独HTML。外部リソース・`<script>` 禁止・8,000文字以内 |

document の組み立ては `scripts/common.py` の `build_document()` が行う（BASE_CSS ＋ STACK_CSS ＋ extra_css ＋ body）。追加時に書くのは body と extra_css だけ。

## BASE_CSS のクラス（body はこれで組む）

| クラス | 役割 |
|---|---|
| `.group` ＋ `style="--cols:1fr 1fr"` | グリッド。列は `--cols` で指定。複数列には原則 `responsive` を付け、420px 以下で1列に落とす |
| `.box` | 枠付きの基本ブロック。`style="min-height:NNpx"` で高さの目安（title 42 / text 34 / accent 34 / image 90〜200 / ナビ 30） |
| `.box.title` | 見出し（白背景・太字） |
| `.box.text` | 説明文（左寄せ・灰文字） |
| `.box.accent` | ボタン・強調（青） |
| `.box.image` | 画像・動画・地図などのプレースホルダー（斜線） |
| `.backdrop` | 背景全面画像の領域 |
| `.timeline` | 左罫線付きの縦タイムライン |
| `.orbit` | 中央 1.5fr ＋ 左右 1fr の放射配置 |
| `.note` | 10px の補足（「固定：position:sticky で追従」など） |
| `.reverse-mobile` | スマホで最後の子を先頭に |
| `details` / `summary` | アコーディオン（標準機能で開閉） |

STACK_CSS（自動同梱）: `.box:has(>.box){flex-direction:column;align-items:stretch;justify-content:flex-start;gap:8px;text-align:left}` — `.box` をカード容器として入れ子にしたとき、子が横一列に潰れるのを防ぐ。

extra_css を足すときのトーン: 枠線 #cbd5e1（強調 #94a3b8）、アクセント文字 #1d4ed8／背景 #dbeafe／枠 #93c5fd、補助文字 #64748b、背景 白／#f8fafc、角丸 4px（丸は 50%）、余白 8px 基調。新しいグリッド系クラスには `@media(max-width:420px)` で1列に落とす規則も書く。

## 表現ルール

- プレースホルダー語彙: 見出し／サブ見出し／説明文／申し込む／資料請求／画像／動画／アイコン／ロゴ／企業ロゴ／お客様名／役職／会社名／ナビ／検索／メニュー／プランA／自社／A社／B社／ステップ1／お名前／メールアドレス／お問い合わせ内容
- 実在の企業名・人名・サービス名・実データの数値は書かない。数値枠は「数値」「導入社数」などのラベルにする（○×△◎、ステップ番号、1〜3位、「¥0,000」は可）
- 絵文字（Unicode Emoji）禁止。記号 ✓ ✔ ★ ☆ ○ × △ ◎ → ← ▶ ● は可
- 要素数は現実的に（カード3〜6枚、ナビ4〜5個、フォーム項目3〜6個、ステップ3〜4個）
- 表は素の `<table>` ＋ `th,td` にインライン罫線（`<td class="box">` は表が崩れる）
- グリッド内の要素に `margin:0 auto` だけ付けると幅が内容幅に縮む。中央寄せしたい要素には `width:` を明示する
- 1パターン＝1つの明確な配置アイデア。既存パターンの要素順を入れ替えただけ・色違いだけの変種は追加しない

## カテゴリの守備範囲

| prefix | カテゴリ | 入れるもの | 入れないもの |
|---|---|---|---|
| SITE | サイト全体 | ページ1枚の骨格（ヘッダー／ナビ／サイドバー／セクションの積み方／固定バー） | 単一セクション |
| HERO | ヒーロー | ファーストビュー1画面分 | ページ下部の要素 |
| FEAT | 特徴 | 機能・強みの説明構造（カラム／ステップ／タブ／相関図） | 同形カードの繰り返し（→CARD） |
| CARD | カード | 同じ形のカードを繰り返す一覧（商品・記事・メンバー・料金） | 説明の構造そのもの（→FEAT） |
| FORM | 問い合わせフォーム | 問い合わせ・申込・予約フォームの配置 | 送信機能 |
| RESULT | 実績 | 数値・導入ロゴ・お客様の声・事例・受賞歴 | プラン比較（→COMPARE） |
| COMPARE | 比較 | プラン比較・競合比較・機能マトリクス・診断フロー | 単なる料金カード一覧（→CARD） |

新カテゴリは `add_patterns.py --new-category "名前" --prefix XXX --scope "守備範囲"` で作れる（categories.json と catalog.json の categories に追記される）。
