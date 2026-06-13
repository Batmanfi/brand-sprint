const { Button, Badge } = window.DesignjoyDesignSystem_2bb465;
const { Container, Accent, Check, Smile } = window;

function FinalCta({ onApply }) {
  const incl = [
    { t: 'Complete brand identity', d: 'Direction, logo suite, color system, typography, guidelines — usable from Day 10.' },
    { t: 'Landing page', d: 'Webflow live or Figma handoff, designed and built for you.' },
    { t: 'Done for you, end to end', d: 'Your only role is to review at three checkpoints.' },
  ];
  return (
    <section style={{ padding: '40px 0 100px' }}>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="reveal" style={{
          position: 'relative', width: 880, maxWidth: '100%', borderRadius: 'var(--radius-xl)', overflow: 'hidden',
          background: '#000', color: '#fff', padding: 'clamp(32px, 5vw, 56px)', boxSizing: 'border-box',
          boxShadow: 'var(--gloss-inset-dark), var(--shadow-float)',
        }}>
          <div aria-hidden="true" style={{ position: 'absolute', right: -90, top: -90, width: 320, height: 320, borderRadius: '50%', background: 'var(--grad-orange)', filter: 'blur(10px)', opacity: 0.9 }} />
          <div aria-hidden="true" style={{ position: 'absolute', left: -120, bottom: -120, width: 300, height: 300, borderRadius: '50%', background: 'var(--grad-blue)', filter: 'blur(40px)', opacity: 0.5 }} />

          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <Smile size={26} color="var(--dj-yellow)" />
              <Badge variant="dark" dot dotColor="var(--dj-green)" style={{ background: '#1d1d1d' }}>Spots open this month</Badge>
            </div>

            <h2 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'clamp(28px, 3.6vw, 44px)', lineHeight: 1.08, letterSpacing: '-1.2px', maxWidth: 680 }}>
              10 business days from kickoff to a brand and page you can <Accent>launch behind</Accent>.
            </h2>

            <div style={{ display: 'grid', gap: 14, margin: '32px 0 30px' }}>
              {incl.map((i) => (
                <div key={i.t} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ marginTop: 1 }}><Check /></span>
                  <div>
                    <span style={{ fontWeight: 600, fontSize: 17 }}>{i.t}. </span>
                    <span style={{ color: 'rgba(255,255,255,0.62)', fontSize: 17 }}>{i.d}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px dashed rgba(255,255,255,0.18)', paddingTop: 28, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '18px 40px' }}>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, maxWidth: 360, lineHeight: 1.5 }}>
                75% refunded if you&rsquo;re not satisfied after the first week of work.
              </div>
              <Button variant="light" size="lg" pill onClick={onApply} style={{ fontSize: 18, padding: '0 32px', marginLeft: 'auto' }}>
                Book your sprint brief call
              </Button>
            </div>

            <div style={{ marginTop: 18, color: 'rgba(255,255,255,0.5)', fontSize: 14, textAlign: 'right' }}>
              15 minutes. No commitment. Kickoff this week if it&rsquo;s a fit.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

window.FinalCta = FinalCta;
