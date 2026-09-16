The header's dropdown panel — the only place the brand uses a radius (10px) and a shadow.

```jsx
<MegaMenuPanel title="会社情報" links={[{label:'代表挨拶',href:'/about#a'},{label:'企業理念',href:'/about#b'}]} onClose={close} />
```

Rows are 16px medium with a trailing `chevron_right` and a pale-sky hairline. Pick `accent` by audience: orange for corporate/B2B menus, `var(--teal-500)` or `var(--pink-300)` for the consumer shop menus.
