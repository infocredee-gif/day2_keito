Square CTA button — use it for every call to action; the brand never rounds corners and only ever shows a shadow on hover.

```jsx
<Button variant="primary" size="lg" href="/oem">原料・ＯＥＭのご相談</Button>
<Button variant="tertiary" size="md" icon="arrow_forward">研究開発ストーリーへ</Button>
```

- `primary` orange #f2780e / white text — page-level CTAs (317×75 on desktop).
- `secondary` white / navy text — the second CTA sitting on hero imagery.
- `tertiary` steel #385c7c with `icon="arrow_forward"` — the CTA inside Technology/Evidence/Company cards (280×68).
- `outline` — low-emphasis, forms and filters.
- Hover adds `0 4px 8px rgba(0,0,0,.2)` over 300ms ease-in-out. No radius, ever.
