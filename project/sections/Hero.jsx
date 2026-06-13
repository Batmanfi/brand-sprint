const { Button, Badge, Logo } = window.DesignjoyDesignSystem_2bb465;
const { Container, Accent, Eyebrow, Smile } = window;

function PlayButton({ size = 76 }) {
  return (
    <span
      style={{
        width: size, height: size, borderRadius: '50%',
        background: 'var(--gloss-black)', border: '1px solid #000',
        boxShadow: 'var(--gloss-black-shadow), var(--shadow-float)',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }}
      className="play-btn">
      
      <span style={{
        width: 0, height: 0, marginLeft: 6,
        borderTop: `${size * 0.17}px solid transparent`,
        borderBottom: `${size * 0.17}px solid transparent`,
        borderLeft: `${size * 0.28}px solid #fff`
      }} />
    </span>);

}

function Vsl() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 880, margin: '0 auto' }}>
      {/* gradient glow behind the frame */}
      <div style={{
        position: 'absolute', inset: '-26px -10px', borderRadius: 36, zIndex: 0,
        background: 'var(--grad-orange)', filter: 'blur(46px)', opacity: 0.4
      }} />
      <div style={{
        position: 'relative', zIndex: 1, borderRadius: 'var(--radius-xl)', padding: 10,
        background: 'var(--grad-join)', boxShadow: 'var(--shadow-float)'
      }}>
        <div style={{
          position: 'relative', aspectRatio: '16 / 9', borderRadius: 20, overflow: 'hidden',
          background: '#0c0c10', border: '2px dashed rgba(255,255,255,0.28)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20
        }}>
          {/* faint foil texture */}
          <div style={{
            position: 'absolute', inset: 0, backgroundImage: `url(${window.__resources && window.__resources.foil || 'assets/grad-purple-blob.png'})`,
            backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22, mixBlendMode: 'screen'
          }} />
          <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18 }}>
            <PlayButton />
            <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
              <div style={{ color: '#fff', fontWeight: 500, fontSize: 19 }}>VSL embed goes here</div>
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginTop: 4 }}>
                Drop your sales video — 16:9
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}

function Hero({ onApply }) {
  const trust = [
  '$1.7M studio',
  'Trusted by founders for 8 years',
  'Sub-48-hour turnaround per request, every request'];

  return (
    <section style={{ position: 'relative', overflow: 'hidden' }}>
      {/* background joy orbs */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <span style={{ position: 'absolute', top: -120, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'var(--grad-yellow)', filter: 'blur(90px)', opacity: 0.35 }} />
        <span style={{ position: 'absolute', top: 40, right: -120, width: 420, height: 420, borderRadius: '50%', background: 'var(--grad-blue)', filter: 'blur(100px)', opacity: 0.3 }} />
      </div>

      <Container style={{ position: 'relative', zIndex: 1, paddingTop: 34, paddingBottom: 90 }}>
        {/* brand row — centered mark */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 64 }}>
          <Logo size={24} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', maxWidth: 980, margin: '0 auto' }}>
          <Badge variant="dark" dot dotColor="var(--dj-yellow)" style={{ fontSize: 16, padding: '10px 16px 10px 10px', whiteSpace: 'nowrap' }}>
            For startups launching &amp; companies rebranding
          </Badge>

          <h1 className="dj-display hero-h1" style={{ marginTop: 26, maxWidth: 980, textWrap: 'balance', lineHeight: "1.1", fontSize: "48px" }} data-comment-anchor="b173588c2a-h1-88-11">
            We’ll build your professional brand identity and launch your website in <Accent>10 days</Accent> using our <span style={{ color: 'rgb(19, 19, 19)' }}>Sprint System</span>, so you can stand out from your competition.
          </h1>

          <p style={{ margin: '26px 0 0', fontSize: 21, lineHeight: 1.5, maxWidth: 720, color: "rgb(36, 36, 36)" }}>
            Done for you, end to end. One senior designer on every layer of the rebrand.
            Your only role is to review at three checkpoints.
          </p>

          <div style={{ display: 'flex', gap: 14, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Button variant="primary" size="lg" pill onClick={onApply} style={{ fontSize: 18, padding: '0 30px' }}>
              Apply for a sprint slot
            </Button>
          </div>

          <div style={{ width: '100%', marginTop: 56 }}>
            <Vsl />
          </div>

          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center',
            gap: '12px 26px', marginTop: 40, fontSize: 15, fontWeight: 500, color: 'var(--text-strong)'
          }}>
            {trust.map((t, i) =>
            <React.Fragment key={t}>
                {i > 0 && <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--dj-hairline)' }} />}
                <span>{t}</span>
              </React.Fragment>
            )}
          </div>
        </div>
      </Container>

      <style>{`
        .play-btn:hover { transform: scale(1.06); }
        @media (max-width: 600px) { .hero-h1 { letter-spacing: -1px; } }
      `}</style>
    </section>);

}

window.Hero = Hero;