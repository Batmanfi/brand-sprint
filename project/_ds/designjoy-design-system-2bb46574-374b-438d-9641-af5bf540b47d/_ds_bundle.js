/* @ds-bundle: {"format":3,"namespace":"DesignjoyDesignSystem_2bb465","components":[{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ServiceTag","sourcePath":"components/core/ServiceTag.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"}],"sourceHashes":{"components/brand/Logo.jsx":"90bca4a1611b","components/core/Avatar.jsx":"dce2aff0e2c2","components/core/Badge.jsx":"54c4bd52040c","components/core/Button.jsx":"4e953e265a9f","components/core/ServiceTag.jsx":"dea1c2394817","components/surfaces/Card.jsx":"b1022c833014","components/surfaces/FeatureCard.jsx":"2153c106c565","ui_kits/website/CtaFooter.jsx":"b07a038bef65","ui_kits/website/Header.jsx":"3d68c723fea0","ui_kits/website/Hero.jsx":"2f82c779efd0","ui_kits/website/HowItWorks.jsx":"bf4236a34ab8","ui_kits/website/Pricing.jsx":"aa5f936025e5","ui_kits/website/WhyGrid.jsx":"41b63615bc14"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignjoyDesignSystem_2bb465 = window.DesignjoyDesignSystem_2bb465 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy logo lock-up — the smile mark + "Designjoy" wordmark.
 * Inherits `color`, so it works on light or dark backgrounds.
 */
function Logo({
  size = 22,
  showText = true,
  color,
  className = '',
  style = {},
  ...rest
}) {
  const smileW = size * 1.15;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dj-logo ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: size * 0.36,
      color: color || 'var(--dj-black)',
      textDecoration: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: smileW,
    height: smileW * (7.95 / 19.792),
    viewBox: "0 0 19.792 7.95",
    fill: "none",
    "aria-hidden": "true",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.929 -0.424 C 1.695 -1.489 0.642 -2.163 -0.424 -1.929 C -1.489 -1.695 -2.163 -0.642 -1.929 0.424 L 0 0 L 1.929 -0.424 Z M 21.721 0.424 C 21.955 -0.642 21.281 -1.695 20.215 -1.929 C 19.15 -2.163 18.097 -1.489 17.863 -0.424 L 19.792 0 L 21.721 0.424 Z M 0 0 L -1.929 0.424 C -0.736 5.857 4.102 9.925 9.896 9.925 L 9.896 7.95 L 9.896 5.975 C 5.997 5.975 2.733 3.237 1.929 -0.424 L 0 0 Z M 9.896 7.95 L 9.896 9.925 C 15.69 9.925 20.528 5.856 21.721 0.424 L 19.792 0 L 17.863 -0.424 C 17.059 3.237 13.795 5.975 9.896 5.975 L 9.896 7.95 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), showText ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-black)',
      fontSize: size,
      letterSpacing: '-0.5px',
      lineHeight: 1
    }
  }, "Designjoy") : null);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Designjoy Avatar — round image, optional ring. */
function Avatar({
  src,
  alt = '',
  size = 50,
  ring = false,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dj-avatar ${className}`,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--dj-ink-700)',
      boxShadow: ring ? '0 0 0 2px var(--dj-white)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy Badge — small pill label. The hero "Start today" chip is a
 * black badge with a coloured status dot; also used for plain tags.
 */
function Badge({
  children,
  variant = 'dark',
  dot = false,
  dotColor = 'var(--dj-yellow)',
  className = '',
  style = {},
  ...rest
}) {
  const variants = {
    dark: {
      background: 'var(--dj-black)',
      color: 'var(--dj-white)'
    },
    light: {
      background: 'var(--dj-white)',
      color: 'var(--dj-black)',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--dj-black)',
      border: '1px solid var(--dj-hairline)'
    },
    orange: {
      background: 'var(--dj-orange)',
      color: 'var(--dj-white)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dj-badge ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: dot ? '5px 16px 5px 10px' : '5px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 'var(--fw-regular)',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: dotColor,
      flex: '0 0 auto'
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy Button — pill/rounded action with the signature glossy-black
 * primary, a white "on-dark" variant, and a hairline outline secondary.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  pill = false,
  icon = null,
  iconRight = null,
  as = 'button',
  className = '',
  style = {},
  ...rest
}) {
  const Tag = as;
  const sizes = {
    sm: {
      padding: '6px 14px',
      fontSize: 14,
      height: 34
    },
    md: {
      padding: '8px 16px',
      fontSize: 15,
      height: 38
    },
    lg: {
      padding: '0 24px',
      fontSize: 20,
      height: 60
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 7,
    height: sizes[size].height,
    padding: sizes[size].padding,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--fw-medium)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), opacity var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    boxSizing: 'border-box'
  };
  const variants = {
    primary: {
      background: 'var(--gloss-black)',
      borderColor: 'var(--dj-black)',
      color: 'var(--dj-white)',
      boxShadow: 'var(--gloss-black-shadow)'
    },
    light: {
      background: 'var(--dj-white)',
      borderColor: 'var(--dj-white)',
      color: 'var(--dj-black)',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      borderColor: 'var(--dj-hairline)',
      color: 'var(--dj-black)'
    },
    solid: {
      background: 'var(--dj-black)',
      borderColor: 'var(--dj-black)',
      color: 'var(--dj-white)'
    },
    accent: {
      background: 'var(--dj-orange)',
      borderColor: 'var(--dj-orange)',
      color: 'var(--dj-white)'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `dj-button ${className}`,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    className: "dj-button__icon",
    style: {
      display: 'inline-flex'
    }
  }, icon) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? /*#__PURE__*/React.createElement("span", {
    className: "dj-button__icon",
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/ServiceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy ServiceTag — frosted glass pill listing a service
 * ("Mobile apps", "Logos", "Webflow"). Floats over gradient art.
 */
function ServiceTag({
  children,
  tone = 'frost',
  className = '',
  style = {},
  ...rest
}) {
  const tones = {
    frost: {
      background: 'rgba(255,255,255,0.16)',
      color: 'var(--dj-white)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.22)'
    },
    light: {
      background: 'var(--dj-white)',
      color: 'var(--dj-black)',
      boxShadow: 'var(--shadow-sm)'
    },
    dark: {
      background: 'rgba(0,0,0,0.55)',
      color: 'var(--dj-white)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `dj-service-tag ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '12px 22px',
      fontFamily: 'var(--font-sans)',
      fontSize: 20,
      fontWeight: 'var(--fw-medium)',
      letterSpacing: '-0.3px',
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { ServiceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ServiceTag.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy Card — large-radius surface. `surface` for plain panels,
 * `dark` for the black product cards, or pass a `gradient` token /
 * background for the signature fluid-colour fills.
 */
function Card({
  children,
  variant = 'surface',
  gradient = null,
  padded = true,
  className = '',
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-card)'
    },
    dark: {
      background: 'var(--dj-black)',
      color: 'var(--dj-white)',
      boxShadow: 'var(--gloss-inset-dark)'
    },
    flat: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--dj-hairline)'
    }
  };
  const gradStyle = gradient ? {
    background: gradient.startsWith('--') ? `var(${gradient})` : gradient,
    color: 'var(--dj-white)'
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `dj-card ${className}`,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      padding: padded ? 'var(--space-6)' : 0,
      boxSizing: 'border-box',
      ...variants[variant],
      ...gradStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Designjoy FeatureCard — a square gradient tile carrying an icon,
 * with a title and supporting line below (the "Design board",
 * "Fast delivery" benefit cards).
 */
function FeatureCard({
  title,
  description,
  icon = null,
  image = null,
  gradient = 'var(--grad-orange)',
  tileSize = 240,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `dj-feature-card ${className}`,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)',
      maxWidth: tileSize,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Card, {
    padded: false,
    gradient: gradient,
    style: {
      width: tileSize,
      height: tileSize,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...(image ? {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : null)
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: 64
    }
  }, icon) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-medium)',
      fontSize: 'var(--fs-title)',
      letterSpacing: '-0.5px',
      color: 'var(--text-strong)',
      lineHeight: 1.1
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-body)',
      color: 'var(--text-muted)',
      lineHeight: 1.45
    }
  }, description) : null));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CtaFooter.jsx
try { (() => {
const {
  Logo
} = window.DesignjoyDesignSystem_2bb465;
function Circles() {
  const c = [{
    x: 0,
    c: '#2be86b',
    s: 150
  }, {
    x: 95,
    c: '#ff0084',
    s: 150
  }, {
    x: 175,
    c: '#ff5a00',
    s: 110
  }, {
    x: 215,
    c: '#0000fe',
    s: 170
  }, {
    x: 300,
    c: '#ffd817',
    s: 150
  }, {
    x: 250,
    c: '#ff8e1a',
    s: 130
  }, {
    x: 360,
    c: '#ff0084',
    s: 150
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 200,
      width: 470,
      marginTop: 36
    }
  }, c.map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: o.x,
      bottom: 0,
      width: o.s,
      height: o.s,
      borderRadius: '50%',
      background: o.c,
      mixBlendMode: 'normal'
    }
  })));
}
function CtaFooter({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#000',
      color: '#fff',
      padding: '90px 0 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 40px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontWeight: 500,
      fontSize: 72,
      lineHeight: 0.98,
      letterSpacing: '-2px'
    }
  }, "See if Designjoy is", /*#__PURE__*/React.createElement("br", null), "the right fit for you", /*#__PURE__*/React.createElement("br", null), "(it totally is)"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,.55)',
      fontSize: 20,
      marginTop: 26
    }
  }, "Schedule a quick, 15 minute guided tour", /*#__PURE__*/React.createElement("br", null), "through Designjoy."), /*#__PURE__*/React.createElement(Circles, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36,
      marginTop: 60,
      paddingTop: 28,
      borderTop: '1px solid rgba(255,255,255,.12)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 20,
    color: "#fff"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "Headquartered in Phoenix, Arizona"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 28,
      color: 'rgba(255,255,255,.5)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Terms of service"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Privacy Policy")))));
}
window.DJ_CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Logo,
  Button
} = window.DesignjoyDesignSystem_2bb465;
const PhoneIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "13",
  height: "13",
  viewBox: "0 0 13.419 13.402",
  fill: "currentColor"
}, /*#__PURE__*/React.createElement("path", {
  d: "M 12.928 9.62 L 11.499 8.191 C 11.347 8.036 11.166 7.912 10.965 7.828 C 10.765 7.744 10.55 7.701 10.333 7.701 C 10.115 7.701 9.9 7.744 9.7 7.828 C 9.499 7.912 9.318 8.036 9.166 8.191 L 8.88 8.477 C 7.44 7.275 6.111 5.948 4.908 4.51 L 5.199 4.218 C 5.508 3.909 5.682 3.489 5.682 3.052 C 5.682 2.614 5.508 2.195 5.199 1.885 L 3.788 0.473 C 3.475 0.17 3.057 0 2.621 0 C 2.185 0 1.767 0.17 1.454 0.473 L 0.673 1.255 C 0.298 1.635 0.065 2.131 0.012 2.662 C -0.041 3.193 0.089 3.725 0.381 4.172 C 2.712 7.681 5.721 10.69 9.23 13.021 C 9.676 13.313 10.209 13.443 10.74 13.39 C 11.271 13.337 11.767 13.104 12.147 12.729 L 12.928 11.953 C 13.084 11.801 13.207 11.62 13.291 11.42 C 13.375 11.219 13.419 11.004 13.419 10.787 C 13.419 10.569 13.375 10.354 13.291 10.154 C 13.207 9.954 13.084 9.772 12.928 9.62 Z"
}));
function Header({
  onSeePricing
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '28px 40px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    size: 22
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md"
  }, "Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "md",
    icon: /*#__PURE__*/React.createElement(PhoneIcon, null)
  }, "Book a call"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "md",
    onClick: onSeePricing
  }, "See pricing")));
}
window.DJ_Header = Header;
window.DJ_PhoneIcon = PhoneIcon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  Avatar
} = window.DesignjoyDesignSystem_2bb465;
function JoinCard({
  onSeePricing
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 390,
      minHeight: 484,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      padding: 32,
      boxSizing: 'border-box',
      background: 'var(--grad-join)',
      boxShadow: 'var(--gloss-inset-dark), var(--shadow-float)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'url(../../assets/grad-purple-blob.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      mixBlendMode: 'overlay',
      opacity: 0.5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "dark",
    dot: true,
    dotColor: "var(--dj-yellow)"
  }, "Start today"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/monthly-club-smileys.png",
    alt: "Monthly club",
    style: {
      position: 'absolute',
      right: -14,
      top: 4,
      width: 210,
      transform: 'rotate(3deg)',
      filter: 'drop-shadow(0 16px 30px rgba(0,0,0,.35))'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 50,
      lineHeight: 1,
      letterSpacing: '-1.5px'
    }
  }, "Join", /*#__PURE__*/React.createElement("br", null), "Designjoy"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '14px 0 0',
      color: 'rgba(255,255,255,.85)',
      fontSize: 20
    }
  }, "One subscription to rule them all."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    onClick: onSeePricing,
    style: {
      width: '100%',
      marginTop: 24,
      fontSize: 20
    }
  }, "See pricing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/avatar-brett.png",
    size: 50
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#fff',
      fontSize: 14
    }
  }, "Book a 15-min intro call"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,.53)',
      fontSize: 14
    }
  }, "Schedule now"))), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: '#fff',
      color: '#000',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16
    }
  }, "\u2192")))));
}
function Hero({
  onSeePricing
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: '60px 40px',
      display: 'flex',
      gap: 32,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "dj-display",
    style: {
      fontSize: 82
    }
  }, "Design subscriptions for ", /*#__PURE__*/React.createElement("span", {
    className: "dj-accent"
  }, "everyone")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 20,
      color: 'var(--dj-muted)'
    }
  }, "Pause or cancel anytime.")), /*#__PURE__*/React.createElement(JoinCard, {
    onSeePricing: onSeePricing
  }));
}
window.DJ_Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
const {
  ServiceTag,
  Button,
  Logo
} = window.DesignjoyDesignSystem_2bb465;
function StepCard({
  bg,
  title,
  desc,
  dark,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 0,
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      minHeight: 560,
      padding: 32,
      boxSizing: 'border-box',
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      color: '#fff',
      fontWeight: 500,
      fontSize: 32,
      letterSpacing: '-0.5px'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      color: 'rgba(255,255,255,.85)',
      fontSize: 18,
      maxWidth: 300
    }
  }, desc)));
}
function MiniPricing() {
  const incl = ['One request at a time', 'Unlimited stock photos', 'Avg. 48 hour delivery', 'Up to 2 users', 'Unlimited brands', 'Pause or cancel anytime'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 32,
      top: 28,
      right: 32,
      background: '#000',
      borderRadius: 14,
      padding: '20px 22px',
      color: '#fff',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 500
    }
  }, "Monthly club"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px dashed rgba(255,255,255,.2)',
      margin: '12px 0'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: '-1px'
    }
  }, "$5,995"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 14
    }
  }, "/month")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      letterSpacing: '.18em',
      color: 'rgba(255,255,255,.5)',
      margin: '14px 0 8px'
    }
  }, "INCLUDED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '6px 16px',
      fontSize: 12.5,
      color: 'rgba(255,255,255,.85)'
    }
  }, incl.map(i => /*#__PURE__*/React.createElement("span", {
    key: i
  }, i))));
}
function ServiceCloud() {
  const tags = ['Mobile apps', 'Presentations', 'Logos', 'Webflow', 'Branding', 'Email', 'Display ads', 'Packaging', 'Ad creative'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      padding: 26,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      alignContent: 'center',
      justifyContent: 'center'
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement(ServiceTag, {
    key: t,
    tone: i % 4 === 0 ? 'light' : 'frost',
    style: {
      fontSize: 17,
      padding: '9px 16px'
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: '46%',
      transform: 'translate(-50%,-50%)',
      width: 64,
      height: 64,
      borderRadius: 18,
      background: '#1d1d1d',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    showText: false,
    size: 30,
    color: "#fff"
  })));
}
function Mockups() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/mockup-a.png",
    alt: "",
    style: {
      display: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 70,
      top: 60,
      width: 150,
      height: 210,
      borderRadius: 14,
      background: 'var(--grad-blue)',
      boxShadow: 'var(--shadow-float)',
      transform: 'rotate(-8deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 120,
      top: 40,
      width: 150,
      height: 220,
      borderRadius: 14,
      background: '#c6ff3d',
      boxShadow: 'var(--shadow-float)',
      transform: 'rotate(4deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 150,
      top: 56,
      width: 160,
      height: 230,
      borderRadius: 14,
      overflow: 'hidden',
      background: '#fff',
      boxShadow: 'var(--shadow-float)',
      transform: 'rotate(-2deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '52%',
      background: 'linear-gradient(180deg,#2a2a2a,#111)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-accent)',
      fontStyle: 'italic',
      fontSize: 18
    }
  }, "Health skin,", /*#__PURE__*/React.createElement("br", null), "happy life"))));
}
function HowItWorks() {
  const clients = ['nectar', 'Buy me a coffee', 'beehiiv', 'Laravel', 'xfinity'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px 40px 60px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dj-h2",
    style: {
      textAlign: 'center',
      fontSize: 64,
      marginBottom: 44
    }
  }, "The way design ", /*#__PURE__*/React.createElement("span", {
    className: "dj-accent"
  }, "should've"), /*#__PURE__*/React.createElement("br", null), "been done in the first place"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    bg: "../../assets/grad-yellow.jpg",
    title: "Subscribe",
    desc: "Subscribe to a plan & request as many designs as you'd like."
  }, /*#__PURE__*/React.createElement(MiniPricing, null)), /*#__PURE__*/React.createElement(StepCard, {
    bg: "../../assets/grad-blue.jpg",
    title: "Request",
    desc: "Request whatever you'd like, from mobile apps to logos."
  }, /*#__PURE__*/React.createElement(ServiceCloud, null)), /*#__PURE__*/React.createElement(StepCard, {
    bg: "../../assets/grad-orange.jpg",
    title: "Receive",
    desc: "Receive your design within two business days on average."
  }, /*#__PURE__*/React.createElement(Mockups, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 56,
      marginTop: 56,
      flexWrap: 'wrap',
      opacity: 0.85
    }
  }, clients.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.5px',
      color: '#111'
    }
  }, c))));
}
window.DJ_HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
const {
  Button,
  Badge,
  Avatar
} = window.DesignjoyDesignSystem_2bb465;
function Pricing({
  onJoin
}) {
  const incl = ['One request at a time', 'Unlimited stock photos', 'Avg. 48 hour delivery', 'Up to 2 users', 'Unlimited brands', 'Pause or cancel anytime', 'Webflow development', 'Unlimited requests'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px 40px 80px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 720,
      maxWidth: '100%',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      background: '#000',
      color: '#fff',
      padding: 40,
      boxSizing: 'border-box',
      boxShadow: 'var(--gloss-inset-dark), var(--shadow-float)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: -60,
      top: -60,
      width: 280,
      height: 280,
      borderRadius: '50%',
      background: 'var(--grad-orange)',
      filter: 'blur(8px)',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 500
    }
  }, "Monthly club"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'rgba(255,255,255,.55)',
      marginTop: 4
    }
  }, "Pause or cancel anytime.")), /*#__PURE__*/React.createElement(Badge, {
    variant: "dark",
    dot: true,
    dotColor: "var(--dj-green)",
    style: {
      background: '#1d1d1d'
    }
  }, "Spots available")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      margin: '24px 0 6px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 72,
      fontWeight: 500,
      letterSpacing: '-2px'
    }
  }, "$5,995"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,.6)',
      fontSize: 18
    }
  }, "/month")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      letterSpacing: '.18em',
      color: 'rgba(255,255,255,.5)',
      margin: '22px 0 12px'
    }
  }, "WHAT'S INCLUDED"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '10px 24px',
      fontSize: 15,
      color: 'rgba(255,255,255,.9)'
    }
  }, incl.map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--dj-green)'
    }
  }, "\u2713"), i))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "lg",
    pill: true,
    onClick: onJoin,
    style: {
      flex: 1,
      fontSize: 18
    }
  }, "Join today"), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    size: "lg",
    pill: true,
    style: {
      flex: 1,
      fontSize: 18,
      background: '#1d1d1d',
      color: '#fff',
      borderColor: '#1d1d1d'
    }
  }, "Book a call")))));
}
window.DJ_Pricing = Pricing;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WhyGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  FeatureCard
} = window.DesignjoyDesignSystem_2bb465;
const Emoji = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 64,
    filter: 'drop-shadow(0 10px 16px rgba(0,0,0,.25))'
  }
}, children);
function WhyGrid() {
  const features = [{
    title: 'Design board',
    desc: 'Easily manage your design queue with a Trello board.',
    gradient: 'var(--grad-yellow)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\uD83D\uDDC2\uFE0F")
  }, {
    title: 'Fixed monthly rate',
    desc: 'No surprises here! Pay the same fixed price each month.',
    gradient: 'var(--grad-blue)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\uD83D\uDD12")
  }, {
    title: 'Fast delivery',
    desc: 'Get your design one at a time in just a couple days on average.',
    gradient: 'var(--grad-orange)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\u26A1")
  }, {
    title: 'Top-notch quality',
    desc: 'Senior-level design quality at your fingertips, whenever you need it.',
    gradient: 'radial-gradient(120% 120% at 70% 20%, #ff0084, #2be86b 120%)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\u2B50")
  }, {
    title: 'Flexible and scalable',
    desc: 'Scale up or down as needed, and pause or cancel at anytime.',
    gradient: 'radial-gradient(120% 120% at 30% 10%, #ff5a00, #0000fe 120%)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\uD83E\uDDE9")
  }, {
    title: 'Unique and all yours',
    desc: 'Every design is made especially for you and is 100% yours.',
    gradient: 'var(--grad-join)',
    icon: /*#__PURE__*/React.createElement(Emoji, null, "\uD83C\uDF81")
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      width: '100%',
      boxSizing: 'border-box',
      padding: '40px 40px 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 40,
      justifyItems: 'start'
    }
  }, features.map(f => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: f.title
  }, f, {
    tileSize: 300
  })))));
}
window.DJ_WhyGrid = WhyGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WhyGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ServiceTag = __ds_scope.ServiceTag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

})();
