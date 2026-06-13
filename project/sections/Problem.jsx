const { Container, Accent, Eyebrow } = window;

function PainCard({ num, label, head, body, color }) {
  return (
    <div style={{
      flex: 1, minWidth: 280, background: '#fff', borderRadius: 'var(--radius-lg)',
      border: '1px solid var(--dj-hairline)', padding: '30px 30px 34px', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', gap: 16
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 2 }}>
        <span style={{
          width: 48, height: 48, borderRadius: 14, background: color, color: '#fff',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 19, letterSpacing: '-0.5px', flex: '0 0 auto'
        }}>0{num}</span>
        <Eyebrow color={color}>{label}</Eyebrow>
      </div>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 24, lineHeight: 1.18, letterSpacing: '-0.6px', color: 'var(--text-strong)' }}>
        {head}
      </h3>
      <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "rgba(0, 0, 0, 0.9)" }}>{body}</p>
    </div>);

}

function Problem() {
  return (
    <section style={{ padding: '96px 0 100px' }}>
      <Container>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 880, margin: '0 auto 56px' }}>
          <Eyebrow>The bottleneck</Eyebrow>
          <h2 className="dj-h2" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginTop: 14 }}>
            You know you need a rebrand.<br />You don&rsquo;t have a <Accent>professional</Accent> to do it.
          </h2>
        </div>

        <div className="reveal" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <PainCard
            num={1} color="var(--dj-orange)" label="Outgrown your brand"
            head="The brand no longer matches the company you actually are."
            body="The visual identity was built when the company was smaller — different positioning, different stage. Now investors and clients form an opinion about your scale from the brand before they hear a single thing you'd actually say." />
          
          <PainCard
            num={2} color="var(--dj-pink)" label="Launch blocked by design"
            head="The product is ready. The marketing is ready. The brand isn't."
            body="You've been ready to go to market for two months. Copy, messaging, distribution — all set. The brand identity and the landing page are the only pieces left, and every week of delay is another week competitors get to ship ahead of you." />
          
          <PainCard
            num={3} color="var(--dj-blue)" label="The 6-month rebrand cycle"
            head="The standard agency timeline is the quarter you don't have."
            body="The branding agency quote came back at $80K and a 6-month timeline. The in-house path means hiring a senior designer who needs 3 months to ramp. Either route, the rebrand lands after the moment you needed it." />
          
        </div>

        <p className="reveal" style={{
          fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 34px)',
          lineHeight: 1.3, textAlign: 'center', color: 'var(--text-strong)', maxWidth: 880, margin: '64px auto 0',
          textWrap: 'balance'
        }}>
          The rebrand itself is doable. The timeline you&rsquo;ve been quoted for it is not.
        </p>
      </Container>
    </section>);

}

window.Problem = Problem;