/* @ds-bundle: {"format":4,"namespace":"CREDEEDesignSystem_2e31d6","components":[{"name":"BenefitItem","sourcePath":"components/content/BenefitItem.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"MinchoHeading","sourcePath":"components/content/MinchoHeading.jsx"},{"name":"NewsList","sourcePath":"components/content/NewsList.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"SpecTable","sourcePath":"components/content/SpecTable.jsx"},{"name":"StepItem","sourcePath":"components/content/StepItem.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"MegaMenuPanel","sourcePath":"components/navigation/MegaMenuPanel.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/BenefitItem.jsx":"84f6275e2ee3","components/content/FeatureCard.jsx":"7570fb4dcf96","components/content/MinchoHeading.jsx":"371b93e2472f","components/content/NewsList.jsx":"50a8308e1291","components/content/PersonCard.jsx":"e8dd44007fc3","components/content/SectionLabel.jsx":"802b8ff5e8b3","components/content/SpecTable.jsx":"1db6404a549f","components/content/StepItem.jsx":"55bb94e96cf8","components/core/ArrowLink.jsx":"05af8d2c01fa","components/core/Button.jsx":"f986292bc248","components/core/Icon.jsx":"149ed516919f","components/navigation/MegaMenuPanel.jsx":"eb279296b8d3","components/navigation/SiteFooter.jsx":"d88f1766c22c","components/navigation/SiteHeader.jsx":"54d0a109016f","ui_kits/corporate-site/AboutPage.jsx":"7f8579f5bf8d","ui_kits/corporate-site/App.jsx":"3157cdb0103f","ui_kits/corporate-site/Home.jsx":"8dbc8df928a1","ui_kits/corporate-site/OemPage.jsx":"c13671d93a7b"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CREDEEDesignSystem_2e31d6 = window.CREDEEDesignSystem_2e31d6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/BenefitItem.jsx
try { (() => {
/** Illustration + title + one-line body, used for the OEM merit grid. */
function BenefitItem({
  icon,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-12)',
      textAlign: 'center',
      padding: 'var(--space-24) var(--space-16)',
      flex: 1,
      minWidth: 0,
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "",
    style: {
      width: 80,
      height: 80,
      objectFit: 'contain'
    }
  }) : null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-16)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-14)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, body) : null);
}
Object.assign(__ds_scope, { BenefitItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BenefitItem.jsx", error: String((e && e.message) || e) }); }

// components/content/MinchoHeading.jsx
try { (() => {
/** Editorial heading in mincho. level 1 = hero (heavy display face), level 2 = subhead with the 3px orange rule. */
function MinchoHeading({
  level = 2,
  children,
  rule = level === 2,
  overImage = false,
  color,
  size,
  align = 'left',
  style
}) {
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : 'h3';
  const isHero = level === 1;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: isHero ? 'var(--font-mincho-display)' : 'var(--font-mincho)',
      fontSize: size || (isHero ? 'var(--text-hero)' : 'var(--text-h2)'),
      fontWeight: isHero ? 'var(--fw-bold)' : 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)',
      color: color || (isHero ? 'var(--navy-700)' : 'var(--text-sub)'),
      textAlign: align,
      margin: 0,
      padding: rule ? '20px 30px 30px' : 0,
      borderLeft: rule ? 'var(--rule-accent-width) solid var(--rule-accent)' : 'none',
      textShadow: overImage ? 'var(--text-shadow-over-image)' : 'none',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { MinchoHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MinchoHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/NewsList.jsx
try { (() => {
/** Dated news rows separated by 20%-navy hairlines. */
function NewsList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      width: '100%',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      borderBottom: 'var(--border-hairline-width) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      display: 'flex',
      gap: '0 var(--news-row-gap)',
      alignItems: 'baseline',
      padding: 'var(--news-row-padding) 0',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-14)',
      color: 'var(--text-sub)',
      flex: 'none'
    }
  }, it.date), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-16)',
      color: 'var(--text-ink)'
    }
  }, it.title)))));
}
Object.assign(__ds_scope, { NewsList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/NewsList.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
/** Portrait plus role/name, used for the president's letter and the advisory researchers. */
function PersonCard({
  photo,
  role,
  name,
  align = 'left',
  width = 280,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      width,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name || '',
    style: {
      width: '100%',
      aspectRatio: '3 / 4',
      objectFit: 'cover'
    }
  }) : null, role ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-13)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-muted)',
      margin: 0,
      textAlign: align
    }
  }, role) : null, name ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-22)',
      color: 'var(--text-primary)',
      margin: 0,
      textAlign: align
    }
  }, name) : null);
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
/** The English one-word section label ("Message", "Technology", "Evidence", "Company"). */
function SectionLabel({
  children,
  align = 'center',
  size = 'var(--text-section-label)',
  color = 'var(--text-primary)',
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: size,
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-tight)',
      color,
      textAlign: align,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/SpecTable.jsx
try { (() => {
/** 会社概要-style definition rows: label column, value column, hairline between. */
function SpecTable({
  rows = [],
  labelWidth = 200,
  style
}) {
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      width: '100%',
      ...style
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 'var(--space-32)',
      alignItems: 'flex-start',
      padding: 'var(--space-24) 0',
      borderBottom: 'var(--border-hairline-width) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      flex: 'none',
      width: labelWidth,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)'
    }
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      minWidth: 0
    }
  }, r.value))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SpecTable.jsx", error: String((e && e.message) || e) }); }

// components/content/StepItem.jsx
try { (() => {
/** Numbered STEP row from the OEM・ODM 製造フロー. */
function StepItem({
  n,
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-24)',
      alignItems: 'flex-start',
      padding: 'var(--space-24) 0',
      borderBottom: 'var(--border-hairline-width) solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 'none',
      width: 72,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-13)',
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "STEP"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho-display)',
      fontSize: 'var(--fs-40)',
      color: 'var(--orange-400)',
      lineHeight: 1.1,
      margin: 0
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-20)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, body)));
}
Object.assign(__ds_scope, { StepItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StepItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: 'var(--button-primary-bg)',
    color: 'var(--button-primary-fg)',
    border: 'none'
  },
  secondary: {
    background: 'var(--button-secondary-bg)',
    color: 'var(--button-secondary-fg)',
    border: 'none'
  },
  tertiary: {
    background: 'var(--button-tertiary-bg)',
    color: 'var(--button-tertiary-fg)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--navy-700)',
    border: '1px solid var(--border-strong)'
  }
};
const SIZES = {
  lg: {
    minHeight: 75,
    minWidth: 317,
    fontSize: 'var(--fs-18)',
    padding: '0 30px'
  },
  md: {
    minHeight: 68,
    minWidth: 280,
    fontSize: 'var(--fs-20)',
    padding: '0 20px'
  },
  sm: {
    minHeight: 48,
    minWidth: 0,
    fontSize: 'var(--fs-15)',
    padding: '0 20px'
  }
};

/** Square, full-bleed CTA button. The site never rounds its buttons. */
function Button({
  variant = 'primary',
  size = 'lg',
  children,
  icon,
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: icon ? 'space-between' : 'center',
    gap: 'var(--space-12)',
    boxSizing: 'border-box',
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-semibold)',
    lineHeight: 'var(--lh-tight)',
    borderRadius: 'var(--radius-none)',
    cursor: disabled ? 'default' : 'pointer',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1,
    transition: 'var(--transition-hover)',
    boxShadow: hover && !disabled ? 'var(--shadow-hover)' : 'var(--shadow-none)',
    ...SIZES[size],
    ...VARIANTS[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    style: base,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("span", null, children), icon ? /*#__PURE__*/React.createElement("span", {
    className: "material-icons",
    "aria-hidden": "true",
    style: {
      fontSize: 'var(--fs-24)',
      padding: '0 0 0 var(--space-15)'
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
/** Image-over-copy block used for Technology / Evidence / Company on the homepage. */
function FeatureCard({
  label,
  image,
  imageAlt = '',
  title,
  body,
  ctaLabel,
  ctaHref,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)',
      flex: 1,
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--text-section-label)',
      color: 'var(--text-primary)',
      textAlign: 'center',
      margin: 0
    }
  }, label) : null, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: 260,
      objectFit: 'cover',
      borderRadius: 'var(--radius-none)'
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      padding: 'var(--space-4) 0 0'
    }
  }, title ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-18)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-13)',
      fontWeight: 'var(--fw-regular)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, body) : null), ctaLabel ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    size: "md",
    icon: "arrow_forward",
    href: ctaHref,
    style: {
      marginTop: 'var(--space-24)'
    }
  }, ctaLabel) : null);
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Wrapper over the two icon fonts the site ships: Material Icons (ligatures) and Font Awesome 6. */
function Icon({
  name,
  set = 'material',
  size = 24,
  color = 'currentColor',
  style,
  ...rest
}) {
  if (set === 'material') {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: "material-icons",
      "aria-hidden": "true",
      style: {
        fontSize: size,
        color,
        ...style
      }
    }, rest), name);
  }
  const cls = (set === 'brands' ? 'fa-brands' : 'fa-solid') + ' fa-' + name;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    "aria-hidden": "true",
    style: {
      fontSize: size,
      color,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline text link with a trailing Material glyph — the site's standard "read on" affordance. */
function ArrowLink({
  children,
  href,
  glyph = 'arrow_forward',
  color = 'var(--text-primary)',
  size = 'var(--fs-16)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-8)',
      fontFamily: 'var(--font-sans)',
      fontSize: size,
      fontWeight: 'var(--fw-medium)',
      lineHeight: 'var(--lh-tight)',
      textDecoration: 'none',
      color: hover ? 'var(--link-hover)' : color,
      transition: 'var(--transition-hover)',
      ...style
    }
  }, rest), children, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: "1.2em"
  }));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/MegaMenuPanel.jsx
try { (() => {
/** Dropdown/drawer panel opened from a header nav item: title row plus chevron links. */
function MegaMenuPanel({
  title,
  links = [],
  accent = 'var(--orange-400)',
  onClose,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-24)',
      minWidth: 320,
      maxWidth: 420,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-16)',
      paddingBottom: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-16)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-ink)',
      margin: 0
    }
  }, title), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "\u9589\u3058\u308B",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--slate-500)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    set: "solid",
    name: "circle-xmark",
    size: 24
  })) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: accent,
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-16)',
      padding: 'var(--space-16) 0',
      textDecoration: 'none',
      borderBottom: 'var(--border-hairline-width) solid var(--border-sky)',
      color: hover === i ? accent : 'var(--gray-800)',
      transition: 'var(--transition-hover)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-16)',
      fontWeight: 'var(--fw-medium)'
    }
  }, l.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron_right",
    size: 20
  })))));
}
Object.assign(__ds_scope, { MegaMenuPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/MegaMenuPanel.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const COLUMNS = [{
  title: 'BUSINESS',
  links: ['原料販売', '機能性水OEM （混ぜ物水）', '受託開発（OEM・ODM）', '販売代理店募集', '正規販売店検索', '販売店様の声']
}, {
  title: 'TECHNOLOGY',
  links: ['植物由来ケイ素について', 'もみ殻シリカへのこだわり', '研究開発・製造', 'エビデンス']
}, {
  title: 'COMPANY',
  links: ['会社概要', '理念・ビジョン', 'サステナビリティ', 'お知らせ', 'プライバシーポリシー']
}];
function Col({
  title,
  links
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      minWidth: 160
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-16)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      textDecoration: 'none',
      color: hover === i ? 'var(--link-hover)' : 'var(--text-primary)',
      transition: 'var(--transition-hover)'
    }
  }, l))));
}

/** Four-column corporate footer on the #f5f6f7 surface. */
function SiteFooter({
  logoSrc = 'assets/logo/credee-logo.webp',
  columns = COLUMNS,
  tel = '0575-36-4879',
  hours = '受付時間 平日 9:00〜17:00',
  company = '株式会社クレディー',
  address = '〒501-3788 岐阜県美濃市蕨生矢坪2306番地6',
  copyright = '© 2026 株式会社クレディー',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: 'var(--surface-alt)',
      padding: 'var(--space-60) var(--space-20) var(--space-20)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '93.75%',
      maxWidth: 'var(--content-max)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-40)',
      alignItems: 'flex-start'
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement(Col, _extends({
    key: i
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)',
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "CONTACT"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    set: "solid",
    name: "phone-flip",
    size: 16,
    color: "var(--text-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-24)',
      color: 'var(--text-primary)'
    }
  }, tel)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-15)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, hours), /*#__PURE__*/React.createElement("a", {
    href: "/inquiry",
    style: {
      marginTop: 'var(--space-8)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 56,
      padding: '0 var(--space-24)',
      background: 'var(--button-primary-bg)',
      color: 'var(--button-primary-fg)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-16)',
      fontWeight: 'var(--fw-semibold)',
      textDecoration: 'none'
    }
  }, "\u304A\u554F\u3044\u5408\u308F\u305B"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-24)',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      paddingTop: 'var(--space-24)',
      borderTop: 'var(--border-hairline-width) solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "CREDEE",
    style: {
      height: 56,
      width: 'auto',
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-14)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, company), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-14)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, address)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-20)',
      alignItems: 'center',
      color: 'var(--gray-700)'
    }
  }, ['instagram', 'square-youtube', 'x-twitter', 'tiktok'].map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    style: {
      color: 'var(--gray-700)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    set: "brands",
    name: n,
    size: 32
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-13)',
      color: 'var(--text-primary)',
      textAlign: 'center',
      margin: 0
    }
  }, copyright)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const NAV = [{
  label: '植物由来ケイ素について',
  menu: true
}, {
  label: '研究開発・製造',
  menu: true
}, {
  label: '製造のご相談',
  menu: true
}, {
  label: '販売のご相談',
  menu: true
}, {
  label: 'ペット製品',
  href: '/evidence'
}, {
  label: '会社情報',
  menu: true
}];

/** Transparent site header: CREDEE mark, caret-down nav, shop link, hamburger below 1024. */
function SiteHeader({
  logoSrc = 'assets/logo/credee-logo.webp',
  items = NAV,
  activeLabel,
  onSelect,
  onMenu,
  compact = false,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      padding: compact ? 'var(--space-12)' : 'var(--space-20) var(--page-gutter)',
      background: 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      flex: 'none',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "CREDEE \u682A\u5F0F\u4F1A\u793E\u30AF\u30EC\u30C7\u30A3\u30FC",
    style: {
      height: compact ? 56 : 80,
      width: 'auto',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 'var(--space-24)',
      flexWrap: 'wrap',
      justifyContent: 'flex-end'
    }
  }, items.map((it, i) => {
    const on = hover === i || activeLabel === it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      onClick: () => onSelect && onSelect(it),
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-4)',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-nav)',
        fontWeight: 'var(--fw-regular)',
        lineHeight: 'var(--lh-tight)',
        color: on ? 'var(--link-hover)' : 'var(--text-primary)',
        transition: 'var(--transition-hover)'
      }
    }, it.label, it.menu ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      set: "solid",
      name: "caret-down",
      size: 13
    }) : null);
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://silicanoaruseikatsu.com/",
    target: "_blank",
    rel: "noreferrer",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-nav)',
      color: 'var(--gray-700)',
      textDecoration: 'none'
    }
  }, "\u30AA\u30F3\u30E9\u30A4\u30F3\u30B7\u30E7\u30C3\u30D7 \u2197"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onMenu,
    "aria-label": "\u30E1\u30CB\u30E5\u30FC",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-primary)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    set: "solid",
    name: "bars",
    size: 24
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/AboutPage.jsx
try { (() => {
const {
  SectionLabel,
  MinchoHeading,
  PersonCard,
  SpecTable,
  ArrowLink
} = window.CREDEEDesignSystem_2e31d6;
const AB = '../../assets/';
function AboutPage() {
  const wrap = {
    padding: 'var(--section-padding-y) var(--page-gutter)',
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    align: "left"
  }, "Company"), /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2,
    style: {
      marginTop: 'var(--space-20)'
    }
  }, "\u4F1A\u793E\u60C5\u5831"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-60)',
      paddingTop: 'var(--space-40)',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PersonCard, {
    photo: AB + 'images/person-president.webp',
    width: 300,
    role: /*#__PURE__*/React.createElement(React.Fragment, null, "\u682A\u5F0F\u4F1A\u793E\u30AF\u30EC\u30C7\u30A3\u30FC", /*#__PURE__*/React.createElement("br", null), "\u4EE3\u8868\u53D6\u7DE0\u5F79"),
    name: "\u524D\u539F \u6D0B\u5B50"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2,
    rule: false,
    size: "var(--fs-28)",
    color: "var(--text-primary)"
  }, "\u7686\u3055\u307E\u3078\u304A\u5C4A\u3051\u3059\u308B", /*#__PURE__*/React.createElement("br", null), "\u3059\u3079\u3066\u306E\u88FD\u54C1\u306B\u3053\u3060\u308F\u308A\u3092\u3002", /*#__PURE__*/React.createElement("br", null), "\u5168\u793E\u54E1\u4E00\u540C\u3001 \u771F\u5FC3\u3092\u3053\u3081\u3066\u3064\u304F\u308A\u7D9A\u3051\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, "\u306F\u3058\u3081\u307E\u3057\u3066\u3002\u682A\u5F0F\u4F1A\u793E\u30AF\u30EC\u30C7\u30A3\u30FC\u306E\u4EE3\u8868\u3001\u524D\u539F\u6D0B\u5B50\u3067\u3059\u3002\u5F53\u793E\u306F\u3001\u4EBA\u306E\u5065\u5EB7\u306B\u304B\u304B\u308F\u308B\u4F01\u696D\u3068\u3057\u3066\u3001\u300C\u5B89\u5FC3\u30FB\u5B89\u5168\u306A\u30B7\u30EA\u30AB\u3092\u5E83\u304F\u5C4A\u3051\u305F\u3044\u3002\u300D\u3068\u3044\u3046\u60F3\u3044\u3067\u8A2D\u7ACB\u3057\u307E\u3057\u305F\u3002 \u5F53\u793E\u304C\u63D0\u4F9B\u3059\u308B\u30B7\u30EA\u30AB\u306F\u3001\u5F93\u6765\u306E\u9271\u7269\u7531\u6765\u306E\u30B7\u30EA\u30AB\u3067\u306F\u306A\u304F\u3001\u690D\u7269\uFF08\u3082\u307F\u6BBB\uFF09\u304B\u3089\u62BD\u51FA\u88FD\u9020\u3057\u305F\u30B7\u30EA\u30AB\u3067\u3001\u6DB2\u4F53\u5316\u306B\u3088\u308A\u4F53\u5185\u5438\u53CE\u7387\u3092\u629C\u7FA4\u306B\u9AD8\u3081\u308B\u3053\u3068\u306B\u6210\u529F\u3057\u307E\u3057\u305F\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, "2024\u5E742\u6708\u3001\u5F53\u30B0\u30EB\u30FC\u30D7\u306F\u3001\u3082\u307F\u6BBB\u30B7\u30EA\u30AB\u306E\u88FD\u9020\u5DE5\u7A0B\u3067\u3042\u308B\u300C\u767D\u8272\u7CFB\u7C7E\u6BBB\u7070\u306E\u88FD\u9020\u65B9\u6CD5\u300D\u306E\u7279\u8A31\u6A29\u3092\u627F\u7D99\u3057\u307E\u3057\u305F\u3002\u79C1\u305F\u3061\u306F\u3001\u7279\u8A31\u3068\u3068\u3082\u306B\u958B\u767A\u30E1\u30F3\u30D0\u30FC\u306E\u5922\u3068\u5E0C\u671B\u3092\u3082\u53D7\u3051\u7D99\u3050\u3053\u3068\u3092\u81EA\u3089\u306E\u4F7F\u547D\u3068\u3068\u3089\u3048\u3001 \u690D\u7269\u7531\u6765\u306E\u30B7\u30EA\u30AB\u3092\u56FD\u5185\u306E\u307F\u306B\u3068\u3069\u307E\u3089\u305A\u3001\u5168\u4E16\u754C\u306B\u5E83\u3081\u3066\u3044\u304D\u305F\u3044\u3068\u8003\u3048\u3066\u304A\u308A\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "\u30B5\u30B9\u30C6\u30CA\u30D3\u30EA\u30C6\u30A3\u306E\u53D6\u308A\u7D44\u307F")))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      background: 'var(--surface-alt)',
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Vision"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-60)',
      paddingTop: 'var(--space-40)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-14)',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-12)'
    }
  }, "\u30D3\u30B8\u30E7\u30F3"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-20)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\u65E5\u672C\u306E\u4EBA\u53E3\u306E\uFF11\uFF05\uFF08120\u4E07\u4EBA\uFF09\u306E\u4EBA\u306E\u751F\u6D3B\u306B\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u3092\u5C4A\u3051\u3001\u5727\u5012\u7684\u306B\u5065\u5EB7\u3067\u82E5\u3005\u3057\u3044\u4EBA\u751F\u3092\u5F8C\u62BC\u3057\u3057\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-14)',
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-12)'
    }
  }, "\u30DF\u30C3\u30B7\u30E7\u30F3"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-20)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\u79C1\u305F\u3061\u306F\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u3068\u3044\u3046\u3001\u751F\u547D\u306B\u4E0D\u53EF\u6B20\u306A\u4FA1\u5024\u3092\u5C4A\u3051\u307E\u3059\u3002\u305D\u306E\u5E78\u305B\u306E\u5FAA\u74B0\u306F\u3001\u307E\u305A\u81EA\u5206\u81EA\u8EAB\u3084\u5BB6\u65CF\u3001\u305D\u308C\u304B\u3089\u89AA\u3057\u3044\u53CB\u4EBA\u3001\u305D\u3057\u3066\u4E8B\u696D\u3092\u901A\u3057\u3066\u3054\u7E01\u3092\u9802\u3044\u305F\u65B9\u3078\u3068\u3064\u306A\u304C\u308A\u3001\u305D\u306E\u5148\u306E\u4EBA\u305F\u3061\u3078\u307E\u308B\u3067\u6CE2\u7D0B\u306E\u3088\u3046\u306B\u5E83\u304C\u3063\u3066\u3044\u304F\u672A\u6765\u3092\u5B9F\u73FE\u3057\u307E\u3059\u3002"))))), /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Profile"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-60)',
      paddingTop: 'var(--space-40)',
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SpecTable, {
    style: {
      flex: 2,
      minWidth: 420
    },
    rows: [{
      label: '法人名',
      value: '株式会社クレディー'
    }, {
      label: '代表者',
      value: '代表取締役 前原 洋子'
    }, {
      label: '設立年月日',
      value: '2015年 7月 17日'
    }, {
      label: '資本金',
      value: '10,000,000円'
    }, {
      label: '事業内容',
      value: /*#__PURE__*/React.createElement(React.Fragment, null, "\u30FB100%\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u6FC3\u7E2E\u6DB2\u3092\u6D3B\u7528\u3057\u305F\u30B5\u30D7\u30EA\u30E1\u30F3\u30C8\u30FB\u30D8\u30EB\u30B9\u30B1\u30A2\u30FB\u30D8\u30A2\u30B1\u30A2\u30FB\u30B9\u30AD\u30F3\u30B1\u30A2\u30FB\u98DF\u54C1\u306EOEM\u3001ODM\u53D7\u8A17\u88FD\u9020", /*#__PURE__*/React.createElement("br", null), "\u30FB100%\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u3092\u6D3B\u7528\u3057\u305F\u65B0\u5546\u54C1\u958B\u767A", /*#__PURE__*/React.createElement("br", null), "\u30FB100%\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u6FC3\u7E2E\u6DB2\u3001\u690D\u7269\u6027\u30B7\u30EA\u30AB\u7C89\u672B\u300C\u539F\u6599\u300D\u8CA9\u58F2", /*#__PURE__*/React.createElement("br", null), "\u30FB100%\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u300C\u30E9\u30A4\u30B9\u30B7\u30EA\u30AB\u300D\u3092\u6D3B\u7528\u3057\u305F\u5065\u5EB7\u98DF\u54C1\u30FB\u5316\u7CA7\u54C1\u30FB\u885B\u751F\u5546\u54C1\u306E\u5378\u53CA\u3073\u5C0F\u58F2\u8CA9\u58F2\u3002")
    }, {
      label: 'グループ企業',
      value: 'シリカのある生活株式会社'
    }, {
      label: 'TEL / FAX',
      value: /*#__PURE__*/React.createElement(React.Fragment, null, "TEL\uFF1A0575-36-4879", /*#__PURE__*/React.createElement("br", null), "FAX\uFF1A0575-36-2961")
    }, {
      label: '所在地',
      value: '〒501-3788 岐阜県美濃市蕨生矢坪2603番地6'
    }]
  }), /*#__PURE__*/React.createElement("img", {
    src: AB + 'images/factory.webp',
    alt: "",
    style: {
      flex: 1,
      minWidth: 260,
      height: 420,
      objectFit: 'cover'
    }
  }))));
}
Object.assign(window, {
  AboutPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/App.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  MegaMenuPanel
} = window.CREDEEDesignSystem_2e31d6;
const LOGO = '../../assets/logo/credee-logo.webp';
const MENUS = {
  '植物由来ケイ素について': [{
    label: 'シリカ(ケイ素)について'
  }, {
    label: 'シリカの有効性について'
  }, {
    label: 'シリカと人の深いかかわり'
  }, {
    label: 'シリカの摂取方法'
  }],
  '研究開発・製造': [{
    label: '研究開発ストーリー'
  }, {
    label: '製造'
  }, {
    label: '籾殻にこだわる理由'
  }, {
    label: 'エビデンス'
  }],
  '製造のご相談': [{
    label: '機能性水のOEM'
  }, {
    label: '化粧品'
  }, {
    label: '機能性表示食品'
  }, {
    label: '濃縮液'
  }],
  '販売のご相談': [{
    label: '販売店パートナー'
  }, {
    label: '植物由来シリカ商品'
  }, {
    label: '原料販売'
  }],
  '会社情報': [{
    label: '代表挨拶'
  }, {
    label: '企業理念'
  }, {
    label: '会社概要'
  }, {
    label: 'サステナビリティ'
  }]
};
function App() {
  const [page, setPage] = React.useState('home');
  const [menu, setMenu] = React.useState(null);
  const [drawer, setDrawer] = React.useState(false);
  const go = p => {
    setPage(p);
    setMenu(null);
    setDrawer(false);
    window.scrollTo(0, 0);
  };
  const onSelect = item => {
    if (item.label === '会社情報') {
      setMenu(menu === item.label ? null : item.label);
      return;
    }
    if (item.label === 'ペット製品') {
      go('home');
      return;
    }
    setMenu(menu === item.label ? null : item.label);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    logoSrc: LOGO,
    onSelect: onSelect,
    onMenu: () => setDrawer(true),
    activeLabel: page === 'about' ? '会社情報' : page === 'oem' ? '製造のご相談' : undefined
  }), menu ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 'var(--page-gutter)',
      top: '100%',
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(MegaMenuPanel, {
    title: menu,
    links: (MENUS[menu] || []).map(l => ({
      ...l,
      href: '#'
    })),
    onClose: () => setMenu(null)
  })) : null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 'var(--space-16)',
      padding: '0 var(--page-gutter) var(--space-12)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-13)',
      color: 'var(--text-muted)'
    }
  }, [['home', 'TOP'], ['oem', 'OEM・ODM'], ['about', '会社情報']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    type: "button",
    onClick: () => go(k),
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: '0 0 4px',
      fontFamily: 'inherit',
      fontSize: 'inherit',
      color: page === k ? 'var(--orange-400)' : 'var(--text-muted)',
      borderBottom: page === k ? '3px solid var(--rule-accent)' : '3px solid transparent'
    }
  }, l))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1
    }
  }, page === 'home' ? /*#__PURE__*/React.createElement(Home, {
    onNav: go
  }) : page === 'oem' ? /*#__PURE__*/React.createElement(OemPage, null) : /*#__PURE__*/React.createElement(AboutPage, null)), /*#__PURE__*/React.createElement(SiteFooter, {
    logoSrc: LOGO
  }), drawer ? /*#__PURE__*/React.createElement("div", {
    onClick: () => setDrawer(false),
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.16)',
      zIndex: 50,
      display: 'flex',
      justifyContent: 'flex-end',
      padding: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      maxHeight: '100%',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement(MegaMenuPanel, {
    title: "\u30E1\u30CB\u30E5\u30FC",
    onClose: () => setDrawer(false),
    links: [{
      label: 'TOPページ'
    }, {
      label: '会社案内'
    }, {
      label: 'シリカとは'
    }, {
      label: '商品紹介'
    }, {
      label: '研究開発・製造'
    }, {
      label: 'サステナビリティ'
    }, {
      label: '法人パートナー向け'
    }, {
      label: 'ニュースリリース'
    }, {
      label: 'オンラインショップ'
    }, {
      label: 'tel：0575-36-4879'
    }, {
      label: 'お問合せ'
    }]
  }))) : null);
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/Home.jsx
try { (() => {
const {
  SiteHeader,
  SiteFooter,
  MegaMenuPanel,
  Button,
  ArrowLink,
  Icon,
  SectionLabel,
  MinchoHeading,
  FeatureCard,
  NewsList
} = window.CREDEEDesignSystem_2e31d6;
const A = '../../assets/';
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'var(--gray-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + 'images/hero-silica-dissolve.webp',
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '0 var(--page-gutter) var(--space-60)',
      minHeight: 620,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      paddingTop: 'var(--space-40)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 1,
    overImage: true
  }, "\u3082\u307F\u6BBB\u304B\u3089\u30B1\u30A4\u7D20\u3092\u62BD\u51FA\u3001", /*#__PURE__*/React.createElement("br", null), "\u4E16\u754C\u3067\u521D\u3081\u3066\u6EB6\u6DB2\u5316\u3057\u307E\u3057\u305F\u3002"), /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2
  }, "\u7279\u8A31\u88FD\u6CD5\u306B\u3088\u308A\u7D14\u5EA698%\u4EE5\u4E0A\u3002", /*#__PURE__*/React.createElement("br", null), "\u975E\u6676\u8CEA\u306E\u6C34\u6EB6\u6027\u690D\u7269\u30B1\u30A4\u7D20\u3067\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-20)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => onNav('oem')
  }, "\u539F\u6599\u30FB\uFF2F\uFF25\uFF2D\u306E\u3054\u76F8\u8AC7"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    style: {
      border: '1px solid var(--border-hairline)'
    }
  }, "\u8CA9\u58F2\u4EE3\u7406\u5E97\u3092\u304A\u8003\u3048\u306E\u65B9")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-18)',
      fontWeight: 400,
      color: 'var(--slate-500)',
      textShadow: 'var(--text-shadow-over-image)',
      margin: 'var(--space-30) 0 0'
    }
  }, "\u7814\u7A7640\u5E74 \uFF0F \u5B8C\u5168\u7121\u8FB2\u85AC\u7C73 \uFF0F \u7279\u8A31\u88FD\u6CD5\uFF0FOEM\u30FBODM \uFF0F \u5C90\u961C\u770C\u7F8E\u6FC3\u5E02")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'auto',
      textAlign: 'right',
      fontSize: 'var(--fs-13)',
      color: 'var(--text-muted)'
    }
  }, "\u203B\u30B7\u30EA\u30AB\u304C\u6EB6\u3051\u308B\u30A4\u30E1\u30FC\u30B8\u56F3")));
}
function Message() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) var(--page-gutter)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Message"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-60)',
      alignItems: 'flex-start',
      paddingTop: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-24)'
    }
  }, /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2,
    rule: false,
    size: "var(--fs-28)",
    color: "var(--text-primary)"
  }, "\u690D\u7269\u7531\u6765\u30B7\u30EA\u30AB\u88FD\u54C1\u306E\u3001", /*#__PURE__*/React.createElement("br", null), "\u7DCF\u767A\u58F2\u5143\u3068\u3057\u3066\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "\u682A\u5F0F\u4F1A\u793E\u30AF\u30EC\u30C7\u30A3\u30FC\u306F\u3001\u6C34\u6EB6\u6027\u3082\u307F\u6BBB\u30B7\u30EA\u30AB\uFF08\u30B1\u30A4\u7D20\uFF09\u306E\u5143\u7956\u3067\u3059\u3002", /*#__PURE__*/React.createElement("br", null), "40\u5E74\u4F59\u308A\u306B\u308F\u305F\u308A\u3001\u690D\u7269\u7531\u6765\u30B1\u30A4\u7D20\u306E\u7814\u7A76\u30FB\u958B\u767A\u3092\u91CD\u306D\u3066\u304D\u307E\u3057\u305F\u3002", /*#__PURE__*/React.createElement("br", null), "\u73FE\u5728\u306F\u539F\u6599\u306E\u4F9B\u7D66\u304B\u3089\u3001\u5065\u5EB7\u98DF\u54C1\u30FB\u5316\u7CA7\u54C1\u306E\u53D7\u8A17\u88FD\u9020\u307E\u3067\u3001", /*#__PURE__*/React.createElement("br", null), "\u4E00\u8CAB\u3057\u3066\u304A\u5FDC\u3048\u3067\u304D\u308B\u4F53\u5236\u3092\u6574\u3048\u3066\u3044\u307E\u3059\u3002")), /*#__PURE__*/React.createElement("img", {
    src: A + 'images/message-1.webp',
    alt: "",
    style: {
      width: '50%',
      height: 369,
      objectFit: 'cover'
    }
  })));
}
function NewService() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-24)',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: 'var(--space-24) var(--page-gutter)',
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-20)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "NEW SERVICE"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-16)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, "2026.08 \uFF5C \u6C34\u306EOEM\u53D7\u8A17\u3092\u958B\u59CB\u3057\u307E\u3057\u305F\u3002"), /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#"
  }, "\uFF5C \u8A73\u3057\u304F\u898B\u308B"));
}
function Initiatives({
  onNav
}) {
  const cards = [{
    label: 'Technology',
    image: A + 'images/technology.webp',
    title: '製造工程',
    body: 'もみ殻を高温で二次燃焼させ、安全な非晶質のケイ素だけを取り出し、抽出から溶液化までを、自社の設備で行っています。',
    cta: '研究開発ストーリーへ'
  }, {
    label: 'Evidence',
    image: A + 'images/evidence.webp',
    title: '信頼の裏付け',
    body: '非晶質であること、安全分析試験を重ねていること、研究機関と連携していること。主張の根拠を公開しています。',
    cta: 'エビデンスへ'
  }, {
    label: 'Company',
    image: A + 'images/company.webp',
    title: '製造工程',
    body: '岐阜県美濃市の自社設備で、植物由来シリカの製造から受託開発までを行っています。会社の概要と沿革をご覧いただけます。',
    cta: '会社概要へ',
    to: 'about'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) var(--page-gutter)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mincho)',
      fontSize: 'var(--fs-22)',
      color: 'var(--text-sub)',
      margin: '0 0 var(--space-40)'
    }
  }, "CREDEE\u306E\u53D6\u308A\u7D44\u307F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-40)',
      alignItems: 'stretch'
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(FeatureCard, {
    key: c.label,
    label: c.label,
    image: c.image,
    title: c.title,
    body: c.body,
    ctaLabel: c.cta,
    ctaHref: undefined,
    style: c.to ? {
      cursor: 'pointer'
    } : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-40)',
      paddingTop: 'var(--space-16)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(ArrowLink, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('about');
    }
  }, "\u4F1A\u793E\u60C5\u5831\u3092\u3072\u3089\u304F"))));
}
function News() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-padding-y) var(--space-20)',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-40)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      borderBottom: '1px solid var(--border-hairline)',
      paddingBottom: 'var(--space-16)',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-16)',
      color: 'var(--text-ink)'
    }
  }, "News"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-15)',
      color: 'var(--text-sub)'
    }
  }, "\u4E00\u89A7\u3092\u898B\u308B \u2192")), /*#__PURE__*/React.createElement(NewsList, {
    items: [{
      date: '2026.9.3',
      title: '機能性水OEM （混ぜ物水）のOEM受託を開始しました。',
      href: '#'
    }, {
      date: '2026.9.3',
      title: '正規販売店に関するお知らせ',
      href: '#'
    }, {
      date: '2026.9.3',
      title: 'コーポレートサイトをリニューアルしました',
      href: '#'
    }]
  }));
}
function Home({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Message, null), /*#__PURE__*/React.createElement(NewService, null), /*#__PURE__*/React.createElement(Initiatives, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(News, null));
}
Object.assign(window, {
  Home,
  Hero,
  Message,
  NewService,
  Initiatives,
  News
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/corporate-site/OemPage.jsx
try { (() => {
const {
  Button,
  ArrowLink,
  Icon,
  SectionLabel,
  MinchoHeading,
  BenefitItem,
  StepItem,
  PersonCard
} = window.CREDEEDesignSystem_2e31d6;
const AO = '../../assets/';
function OemPage() {
  const merits = [['icon-cost', 'ローコストで新商品が完成', '一貫製造によりクライアント様には仕入しやすい価格で提供します。'], ['icon-speed', '開発の手間が省け短期間で商品化', '研究開発、製造との連携で最短で商品化が叶います。'], ['icon-branding', '独自のブランディング・ポジショニングが叶う', 'OEM、ODM、コラボ商品の展開により商品のブランディングができます。'], ['icon-advantage', '競合優位性が増す', '他社との比較で販売優位性が高まります。'], ['icon-advantage', '新たな顧客獲得へとつながる', 'シリカを通じて新規顧客の獲得が叶います。'], ['icon-cost', '新たな売上の機会が叶う', '継続的に販売して頂く事で、売上の拡大が叶います。']];
  const collab = [['oem-supplement', 'サプリメントにシリカを配合', 'カプセル、打錠、液体などに'], ['oem-cosmetics', '美容用品にシリカを配合', '基礎化粧品やヘアケア用品に配合'], ['oem-sweets', 'お菓子に配合', 'グミやクッキーやケーキに配合'], ['oem-water', '飲料水や炭酸水に配合', 'お水や炭酸水に配合することで身近にシリカを摂取できます。'], ['oem-brand', 'OEM商品への展開', 'OEM商品にすることで、商品のブランディングが叶います。']];
  const steps = [['お問い合わせ', 'お問い合わせはWEBサイトまたは、電話にて直接お問い合わせください。'], ['お打ち合わせ', 'OEM、ODM事業の計画や販売戦略、製造数量など貴社のご希望をお伺いさせていただきます。'], ['ご提案・お見積り', 'お打ち合わせで確定した内容をもとにお見積りを作成致します。'], ['デザイン作成～資材発注', 'ラベル、パッケージのデザインの決定後、資材のご準備を致します。'], ['製造・加工', '資材がそろいましたら、製造にとりかかります。'], ['商品納品', '商品納品後には、商品に関する基礎知識のレクチャーや販売促進のご協力も行っております。']];
  const wrap = {
    padding: 'var(--section-padding-y) var(--page-gutter)',
    maxWidth: 'var(--content-max)',
    margin: '0 auto',
    width: '100%'
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      paddingBottom: 0
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    align: "left"
  }, "OEM\u30FBODM"), /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2,
    style: {
      marginTop: 'var(--space-24)'
    }
  }, "\u30B7\u30EA\u30AB\u306E\u3042\u308B\u751F\u6D3B\u306FOEM\u3001ODM\u3001\u30B3\u30E9\u30DC\u5546\u54C1\u3067", /*#__PURE__*/React.createElement("br", null), "\u300C\u58F2\u308C\u305D\u3046\u300D\u3067\u306F\u306A\u304F\u300C\u58F2\u308C\u308B\u300D\u5546\u54C1\u3092\u63D0\u4F9B\u3057\u307E\u3059\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-40)',
      paddingTop: 'var(--space-40)'
    }
  }, [['ワンストップ製造によりコストダウンを実現', 'もみ殻の調達～シリカ原料の製造、シリカ濃縮液の製造、製品化を自社で行うことで「高品質でローコスト」を実現。'], ['専門家によるアドバイス', 'ドクター、管理薬剤師など技術的、専門的な見地から、商品開発に関するアドバイスを行います。'], ['商品販売のバックアップ', '商品販売開始後も、商品に関する基礎知識のレクチャーや販促方法に関するご提案・アドバイスを行います。']].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: 1,
      display: 'flex',
      gap: 'var(--space-16)',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AO + 'illustrations/rule-vertical.svg',
    alt: "",
    style: {
      height: 56,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-18)',
      fontWeight: 'var(--fw-semibold)',
      color: 'var(--text-primary)',
      margin: '0 0 var(--space-8)'
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-14)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "OEM\u3001ODM\u3001\u30B3\u30E9\u30DC\u306E\u30E1\u30EA\u30C3\u30C8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-24)'
    }
  }, merits.map(([ic, t, b]) => /*#__PURE__*/React.createElement(BenefitItem, {
    key: t,
    style: {
      flex: '1 1 30%',
      minWidth: 220
    },
    icon: AO + 'illustrations/' + ic + '.svg',
    title: t,
    body: b
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      background: 'var(--surface-alt)',
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2,
    rule: false,
    align: "center",
    size: "var(--fs-28)",
    color: "var(--text-primary)"
  }, "\u30B7\u30EA\u30AB\u3068\u5FA1\u793E\u306E\u65E2\u5B58\u5546\u54C1\u3092\u30B3\u30E9\u30DC\u3057\u307E\u305B\u3093\u304B\uFF1F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-24)',
      flexWrap: 'wrap',
      paddingTop: 'var(--space-40)'
    }
  }, collab.map(([img, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      flex: '1 1 18%',
      minWidth: 180,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: AO + 'images/' + img + '.webp',
    alt: "",
    style: {
      width: '100%',
      aspectRatio: '1 / 1',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-16)',
      fontWeight: 'var(--fw-medium)',
      color: 'var(--text-primary)',
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-13)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "OEM\u30FBODM \u88FD\u9020\u30D5\u30ED\u30FC"), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 'var(--space-24)'
    }
  }, steps.map(([t, b], i) => /*#__PURE__*/React.createElement(StepItem, {
    key: t,
    n: i + 1,
    title: t,
    body: b
  })))), /*#__PURE__*/React.createElement("section", {
    style: wrap
  }, /*#__PURE__*/React.createElement(MinchoHeading, {
    level: 2
  }, "\u7814\u7A76\u958B\u767A\u306B\u3064\u3044\u3066\u306E\u30E1\u30C3\u30BB\u30FC\u30B8"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-60)',
      paddingTop: 'var(--space-40)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(PersonCard, {
    photo: AO + 'images/person-nakazaki.webp',
    role: /*#__PURE__*/React.createElement(React.Fragment, null, "\u5DE5\u5B66\u535A\u58EB", /*#__PURE__*/React.createElement("br", null), "\u5143 \u5927\u962A\u5E9C\u7ACB\u9AD8\u5C02 \u6559\u6388"),
    name: "\u4E2D\u5D0E \u7FA9\u660E"
  }), /*#__PURE__*/React.createElement(PersonCard, {
    photo: AO + 'images/person-mori.webp',
    role: /*#__PURE__*/React.createElement(React.Fragment, null, "\u6771\u4EAC\u4E88\u9632\u533B\u7642\u30AF\u30EA\u30CB\u30C3\u30AF \u9662\u9577", /*#__PURE__*/React.createElement("br", null), "\u7368\u5354\u5927\u5B66 \u540D\u8A89\u6559\u6388"),
    name: "\u68EE \u5409\u81E3"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 260,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--fs-15)',
      lineHeight: 'var(--lh-relaxed)',
      color: 'var(--text-sub)',
      margin: 0
    }
  }, "\u30C9\u30AF\u30BF\u30FC\u3001\u7BA1\u7406\u85AC\u5264\u5E2B\u3092\u306F\u3058\u3081\u3068\u3059\u308B\u5C02\u9580\u5BB6\u304C\u3001\u6280\u8853\u7684\u30FB\u5C02\u9580\u7684\u306A\u898B\u5730\u304B\u3089\u5546\u54C1\u958B\u767A\u306B\u95A2\u3059\u308B\u30A2\u30C9\u30D0\u30A4\u30B9\u3092\u884C\u3044\u307E\u3059\u3002"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    icon: "arrow_forward"
  }, "\u30B5\u30F3\u30D7\u30EB\u4F9D\u983C\u30FB\u304A\u554F\u3044\u5408\u308F\u305B")))));
}
Object.assign(window, {
  OemPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/corporate-site/OemPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BenefitItem = __ds_scope.BenefitItem;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MinchoHeading = __ds_scope.MinchoHeading;

__ds_ns.NewsList = __ds_scope.NewsList;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.SpecTable = __ds_scope.SpecTable;

__ds_ns.StepItem = __ds_scope.StepItem;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.MegaMenuPanel = __ds_scope.MegaMenuPanel;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
