Corporate site header — transparent, sits directly over the hero image.

```jsx
<SiteHeader activeLabel="会社情報" onSelect={item => open(item)} onMenu={() => setDrawer(true)} />
```

Nav labels hover to orange in 300ms. Items with `menu: true` carry the FA caret-down and open a MegaMenuPanel. Never give the header a background or a shadow.
