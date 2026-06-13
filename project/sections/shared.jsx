/* Shared layout helpers + small atoms for the Brand Sprint page.
   Everything is exported onto window at the bottom so the other
   text/babel section files can use them. */

const DJ = window.DesignjoyDesignSystem_2bb465;

/* Centered 1200px container */
function Container({ children, style = {}, className = '' }) {
  return (
    <div
      className={`dj-container ${className}`}
      style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Tiny ALL-CAPS eyebrow label */
function Eyebrow({ children, color = 'var(--dj-orange)', style = {} }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* Editorial italic serif accent word */
function Accent({ children }) {
  return <span className="dj-accent">{children}</span>;
}

/* Round avatar placeholder — initials on a soft tint */
function AvatarStub({ initials, size = 56, bg = 'var(--grad-orange)' }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        color: '#fff',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: size * 0.36,
        letterSpacing: '-0.5px',
        flex: '0 0 auto',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      {initials}
    </span>
  );
}

/* Green check used in deliverable / included lists */
function Check({ size = 20, color = 'var(--dj-green)' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={{ flex: '0 0 auto' }}>
      <circle cx="12" cy="12" r="11" fill={color} />
      <path d="M7 12.5l3.2 3.2L17 9" stroke="#072a13" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* The smile mark as a standalone glyph */
function Smile({ size = 26, color = 'currentColor' }) {
  return (
    <svg width={size} height={size * (7.95 / 19.792)} viewBox="0 0 19.792 7.95" fill="none" style={{ display: 'block' }}>
      <path
        d="M 1.929 -0.424 C 1.695 -1.489 0.642 -2.163 -0.424 -1.929 C -1.489 -1.695 -2.163 -0.642 -1.929 0.424 L 0 0 L 1.929 -0.424 Z M 21.721 0.424 C 21.955 -0.642 21.281 -1.695 20.215 -1.929 C 19.15 -2.163 18.097 -1.489 17.863 -0.424 L 19.792 0 L 21.721 0.424 Z M 0 0 L -1.929 0.424 C -0.736 5.857 4.102 9.925 9.896 9.925 L 9.896 7.95 L 9.896 5.975 C 5.997 5.975 2.733 3.237 1.929 -0.424 L 0 0 Z M 9.896 7.95 L 9.896 9.925 C 15.69 9.925 20.528 5.856 21.721 0.424 L 19.792 0 L 17.863 -0.424 C 17.059 3.237 13.795 5.975 9.896 5.975 L 9.896 7.95 Z"
        fill={color}
        fillRule="nonzero"
      />
    </svg>
  );
}

Object.assign(window, { Container, Eyebrow, Accent, AvatarStub, Check, Smile });
