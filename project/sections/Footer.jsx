const { Logo } = window.DesignjoyDesignSystem_2bb465;
const { Container } = window;

function JoyCircles() {
  const c = [
    { x: 0, c: '#2be86b', s: 120 }, { x: 78, c: '#ff0084', s: 120 },
    { x: 142, c: '#ff5a00', s: 90 }, { x: 174, c: '#0000fe', s: 136 },
    { x: 244, c: '#ffd817', s: 120 }, { x: 204, c: '#ff8e1a', s: 104 },
    { x: 296, c: '#ff0084', s: 120 },
  ];
  return (
    <div aria-hidden="true" style={{ position: 'relative', height: 150, width: 416, maxWidth: '100%', marginBottom: 8 }}>
      {c.map((o, i) => (
        <span key={i} style={{ position: 'absolute', left: o.x, bottom: 0, width: o.s, height: o.s, borderRadius: '50%', background: o.c }} />
      ))}
    </div>
  );
}

function SiteFooter() {
  const nav = ['Home', 'About', 'Pricing', 'Contact'];
  return (
    <footer style={{ background: '#000', color: '#fff', padding: '80px 0 40px', overflow: 'hidden' }}>
      <Container>
        <div style={{ maxWidth: 560 }}>
          <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.02, letterSpacing: '-1.5px' }}>
            Design subscriptions<br />for <span className="dj-accent">everyone</span>.
          </h2>
          <JoyCircles />
        </div>

        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '20px 36px', alignItems: 'center',
          marginTop: 48, paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.12)',
        }}>
          <Logo size={20} color="#fff" />
          <nav style={{ display: 'flex', gap: 26, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
            {nav.map((n) => (
              <a key={n} href="#" style={{ textDecoration: 'none' }}>{n}</a>
            ))}
          </nav>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 26, fontSize: 15, color: 'rgba(255,255,255,0.5)' }}>
            <span>@BrettFromDJ</span>
            <span>Headquartered in Phoenix, Arizona</span>
          </span>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'space-between', marginTop: 26, fontSize: 13.5, color: 'rgba(255,255,255,0.4)' }}>
          <span>&copy; 2026 Designjoy. All rights reserved.</span>
          <span>75% refunded if unsatisfied after the first week of work.</span>
        </div>
      </Container>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
