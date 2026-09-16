# UI kit — コーポレートサイト (credit-group.ne.jp)

Recreation of the CREDEE corporate site, rebuilt from the live site's rendered HTML/CSS
(fonts, colours, paddings and hover behaviour read out of the Studio.Design output).

## Screens
- **TOP** (`Home.jsx`) — hero over the silica-dissolve image, Message block, NEW SERVICE strip, CREDEEの取り組み three-up (Technology / Evidence / Company), News list.
- **OEM・ODM** (`OemPage.jsx`) — lead statement, three strengths, six-cell merit grid, collaboration product row, six-step 製造フロー, research advisors.
- **会社情報** (`AboutPage.jsx`) — 代表挨拶 with portrait, ビジョン / ミッション on the grey surface, 会社概要 spec table beside the Mino factory photo.

`App.jsx` wires the three screens together: header nav opens the real mega-menus, the
hamburger opens the drawer panel, and the small tab row under the header switches screens
(a kit affordance — the live site routes by URL).

## Fidelity notes
- All copy is the site's own Japanese text.
- Type uses the substituted mincho faces (see `../../tokens/fonts.css`); everything else is exact.
- The site's per-page hero variants, 店舗情報 / silica / evidence pages and the consumer shop
  (silicanoaruseikatsu.com, a separate brand with pink/teal accents) are **not** recreated here.
