# CREDEE / 株式会社クレディー — Design System

The design language of **株式会社クレディー (CREDEE)**, a Gifu-based manufacturer of
100% plant-derived silica (ケイ素). The company extracts amorphous, water-soluble silica from
rice husks (もみ殻) under a patented process, and sells it three ways: as a raw material, as
OEM/ODM contract manufacturing (supplements, cosmetics, functional water, confectionery), and
through the consumer brand シリカのある生活 / ライスシリカ. Founded 2015-07-17, 40+ years of
research lineage, own plant in 美濃市, Gifu.

## Sources this system was built from
- **Corporate site — the single source of truth:** https://credit-group.ne.jp/ (built on Studio.Design).
  Pages read: `/` (TOP), `/about` (会社情報), `/oem` (OEM・ODM). Every colour, font size, padding,
  hover behaviour and asset here was extracted from that site's rendered HTML/CSS, not from memory.
- Assets pulled from the site's CDN (`storage.googleapis.com/studio-design-asset-files/projects/7kad69mbO3/`
  and `.../VGOK5bB7an/`) into `assets/`.
- Related properties referenced but **not** recreated: the consumer shop https://silicanoaruseikatsu.com/
  and https://silicanoaruseikatsu.shop/ (separate, softer brand using the pink #f4b2ba / teal #00ac97 accents),
  Instagram / YouTube / X / TikTok @silicanoaruseikatsu, note.com/brave_swift9628.
- No Figma file, no codebase and no slide deck were provided. There are therefore **no slide templates**
  in this system — ask for a real deck before any are invented.

---

## CONTENT FUNDAMENTALS

**Language.** Japanese, 丁寧語 throughout (です・ます). English appears only as section labels
(`Message`, `Technology`, `Evidence`, `Company`, `Vision`), footer column headings in caps
(`BUSINESS`, `TECHNOLOGY`, `COMPANY`, `CONTACT`), and standing terms (OEM・ODM, STEP, NEW SERVICE).

**Voice.** Company-first and evidential — "we make, we prove". The subject is 当社 / 株式会社クレディー /
私たち; the reader is 貴社 / クライアント様 / お客様 / 皆さま. The president's letter is the only place
私 appears. Never あなた, never imperative marketing shouting.

**Claims always carry proof.** Numbers do the persuading: 「特許製法により純度98%以上。」
「研究40年 ／ 完全無農薬米 ／ 特許製法／OEM・ODM ／ 岐阜県美濃市」「世界初の特許製法」
「京都大学名誉教授をはじめ、6名の研究者が33年もの歳月をかけて」. Evidence framing:
「非晶質であること、安全分析試験を重ねていること、研究機関と連携していること。主張の根拠を公開しています。」

**Headline construction.** Two short mincho lines broken by meaning, ending in 。—
「もみ殻からケイ素を抽出、／世界で初めて溶液化しました。」「植物由来シリカ製品の、／総発売元として。」
Body copy also breaks manually per clause rather than wrapping freely.

**B2B pages sell outcomes with 叶う.** 「ローコストで新商品が完成」「開発の手間が省け短期間で商品化」
「競合優位性が増す」「新たな売上の機会が叶う」. CTAs are noun phrases, not verbs:
「原料・ＯＥＭのご相談」「販売代理店をお考えの方」「サンプル依頼」「お問い合わせ」.

**Punctuation & casing.** Full-width 、。／（）「」 and 中黒 ・ for lists. Full-width Latin appears
inside Japanese CTA text (ＯＥＭ). Dates are `2026.9.3` in lists and `2026.08` for month notices.
Phone as `0575-36-4879`; hours as `受付時間 平日 9:00〜17:00`. Image disclaimers use ※
(「※シリカが溶けるイメージ図」).

**No emoji, ever.** The only non-word glyphs are ↗ on external links, → in "一覧を見る →",
and icon-font glyphs. Tone is calm, factual, slightly formal — a manufacturer talking to
buyers and partners, with warmth reserved for the president's message and the vision statement.

---

## VISUAL FOUNDATIONS

**Palette.** Navy-blue spine + orange action + near-white ground.
Navy `#14315c` is the default text colour for almost everything; `#14293b` is the ink used for
list titles and hairlines (`#14293b33`). Mincho subheads sit in `#4c5f70`, captions in `#6b7c8a`.
Orange is the only action colour: `#f2780e` button fills, `#f78c11` link hover and 3px rules,
`#ffaf4e` highlights. Steel `#385c7c` fills in-card CTAs. Pale sky `#bbd2e7` tints and borders.
Teal `#00ac97`/`#40b19a` and pink `#f4b2ba` belong to the consumer shop menus only — never on
corporate pages. Red `#e60012` is the logo square and alerts. Surfaces: white page, `#f5f6f7`
footer/alternating sections. Max two background colours per page.

**Type.** Noto Sans JP for everything functional (nav 15px, body 16/15px, captions 13/14px,
buttons 600 weight) and two mincho faces for editorial voice: a heavy display mincho for 50px
heroes (real face: リュウミン H-KL JIS2004) and a lighter mincho for 36px subheads and English
section labels (real face: A1明朝). **Both mincho faces are Morisawa and licence-locked — this
system substitutes Shippori Mincho B1 and Zen Old Mincho from Google Fonts.** Line-height is a
flat 1.4 for headings *and* UI text; only long-form prose and small card copy relax to 1.8.
Letter-spacing is untouched (`normal`). No uppercase tracking tricks, no italic.

**Layout.** Single column, centred, `max-width` ~1200px, 40px desktop gutters dropping straight
to 12px on narrow viewports (no intermediate step). Sections are 60px tall in padding with 40px
internal gaps. Header is transparent, in normal flow (not fixed/sticky), sitting over the hero.
Three-up feature rows, two-up text/image splits at 50/50. Nothing is sticky, nothing floats.

**Backgrounds & imagery.** Full-bleed photography behind the hero only; elsewhere images are
hard-cropped rectangles inside the grid. The photographic register is cool, clinical and
high-key: near-white lab and plant interiors, stainless steel, blue nitrile gloves, PET bottling
lines, the green-hilled Mino factory exterior. No grain, no warm filter, no duotone, no
gradients anywhere on the site. The hero image itself is a near-white `#f5f6f7` field with
blue-grey water filaments and faint molecule diagrams. Brand illustrations are flat two-tone
SVG line drawings (`assets/illustrations/`).

**Borders, radii, cards.** Square by default — `border-radius: 0` on buttons, images and blocks;
2px and 6px exist but are rare; 10px appears only on menu/drawer panels. "Cards" are not cards:
a photograph, a title, copy and a CTA with **no** border, no radius and no shadow. Rules do the
separating: 1px `#14293b33` hairlines under list rows, 1px `#bbd2e74d` inside menus, and the
signature 3px orange left rule on mincho subheads.

**Shadows & transparency.** One hover shadow (`0 4px 8px rgba(0,0,0,.2)`) and one panel shadow
(`0 6px 15px rgba(0,0,0,.2)`). No inner shadows, no glass, no backdrop blur. Type over imagery
is protected with a text-shadow (`0 2px 5px rgba(0,0,0,.2)`) rather than a scrim or capsule —
because the imagery is nearly white, dark type simply sits on it.

**States.** Hover = colour or shadow, 300ms ease-in-out: text links and nav go orange; buttons
gain the shadow but never change fill. There is no press/active treatment — no shrink, no darken.
Focus is left to the browser default (an accessibility gap worth fixing in product work).
Disabled is expressed by opacity.

**Motion.** Fades and a small rise on scroll-in (400ms, `cubic-bezier(.4,.4,0,1)`), 200ms for
carets and toggles. No bounce, no spring, no parallax, no carousels, no looping animation.

---

## ICONOGRAPHY

The site ships **two icon fonts and no bespoke icons**, both copied into `assets/icons/`:

- **Material Icons** (regular, ligature names) for navigation: `arrow_forward` (section CTAs),
  `chevron_right` (menu and drawer rows), `search`, `launch`, `menu`, `phone`.
- **Font Awesome 6.4.2 Free** — Solid for UI (`caret-down` on nav items that open a mega-menu,
  `bars` hamburger, `phone-flip` in the footer contact block, `circle-xmark` to close panels,
  `arrow-up-right-from-square` on external links) and Brands for social marks
  (`instagram`, `square-youtube`, `x-twitter`, `tiktok`, rendered large — 32–60px — in the footer).

`tokens/icons.css` declares the `@font-face` rules and the exact glyph classes used. Use the
`Icon` component rather than raw markup. Emoji are never used. Unicode ↗ and → are used as
typographic arrows inside link labels. Illustration-scale graphics come from
`assets/illustrations/` (the OEM merit set and the vertical rule motif) — do not draw new SVGs.

**Logo.** `assets/logo/credee-logo.webp` — two orange bars, a red square and the CREDEE wordmark
in near-black. 80px tall in the header, 56px in the footer, `object-fit: contain`, minimum clear
space of one bar height. Never recolour it, never set it on busy imagery, never rebuild it in type.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Global entry — `@import` list only. Consumers link this one file. |
| `tokens/` | `fonts.css` `colors.css` `typography.css` `spacing.css` `effects.css` `motion.css` `icons.css` `base.css` |
| `assets/logo/` | `credee-logo.webp`, `favicon.png` |
| `assets/images/` | Hero, lab/plant/factory photography, OEM product shots, portraits, OG image |
| `assets/illustrations/` | Brand SVG line illustrations + the vertical rule motif |
| `assets/icons/` | Material Icons + Font Awesome 6.4.2 woff2 binaries |
| `guidelines/*.card.html` | 23 foundation specimen cards (Colors, Type, Spacing, Brand) |
| `components/` | React primitives, grouped `core` / `content` / `navigation` |
| `ui_kits/corporate-site/` | Click-through recreation of the corporate site (TOP / OEM・ODM / 会社情報) |
| `templates/corporate-page/` | Starting template for a new corporate section page |
| `SKILL.md` | Agent-skill entry point |

### Components

**core** — `Button`, `Icon`, `ArrowLink`
**content** — `SectionLabel`, `MinchoHeading`, `FeatureCard`, `NewsList`, `StepItem`, `BenefitItem`, `PersonCard`, `SpecTable`
**navigation** — `SiteHeader`, `MegaMenuPanel`, `SiteFooter`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

#### Intentional additions
The source is a marketing site, not a component library, so the inventory above is derived from
the patterns the site actually uses. Two items have no 1:1 source component:
- `Icon` — a thin wrapper over the two icon fonts the site ships, so product code stops
  hand-writing font class names.
- `SpecTable` — the 会社概要 label/value rows, generalised into a reusable block.

There are **no** form primitives (input, select, checkbox, radio, switch), tabs, toasts,
tooltips, avatars, badges or modals-as-dialogs in this system: the corporate site contains none.
The inquiry form at `/inquiry` was not read — ask for it before authoring form components.

### Known gaps / flagged substitutions
1. **Mincho fonts substituted** (リュウミン H-KL JIS2004 → Shippori Mincho B1; A1明朝 → Zen Old Mincho).
   Send the licensed Morisawa webfonts and `tokens/fonts.css` becomes exact.
2. Pages not read: `/silica`, `/evidence`, `/product`, `/development`, `/manufacture`,
   `/commitment`, `/sustainability`, `/partner`, `/sales`, `/inquiry`, `/cms`, and the whole
   consumer shop. Their component patterns are not represented.
3. **The brand SVG illustrations ship without their fill definitions.** The files in
   `assets/illustrations/` reference `.st0` / `.st1` classes, but neither the SVGs nor the site's
   stylesheet define them, so they render as solid black shapes (as they do on the live site).
   They are stored verbatim — send the correctly coloured originals and they drop straight in.
4. Focus-visible styling is undefined on the source site; product work should add it.
