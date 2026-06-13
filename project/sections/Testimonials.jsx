const { Container, Accent, Eyebrow, AvatarStub } = window;

function QuoteCard({ stat, quote, context, name, role, initials, glow }) {
  return (
    <div style={{
      position: 'relative', flex: 1, minWidth: 300, borderRadius: 'var(--radius-lg)', overflow: 'hidden',
      background: '#141414', boxShadow: 'var(--gloss-inset-dark), var(--shadow-float)',
      padding: 36, boxSizing: 'border-box', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ position: 'absolute', top: -70, right: -70, width: 220, height: 220, borderRadius: '50%', background: glow, filter: 'blur(12px)', opacity: 0.85 }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ fontSize: 'clamp(24px, 2.4vw, 30px)', fontWeight: 500, letterSpacing: '-0.8px', color: '#fff', lineHeight: 1.12 }}>
          {stat}
        </div>
        <p style={{
          fontFamily: 'var(--font-accent)', fontStyle: 'italic', fontWeight: 400,
          fontSize: 'clamp(22px, 2.2vw, 27px)', lineHeight: 1.3, color: '#fff', margin: '24px 0 0',
        }}>
          &ldquo;{quote}&rdquo;
        </p>
        <p style={{ margin: '16px 0 0', fontSize: 16, lineHeight: 1.55, color: 'rgba(255,255,255,0.6)' }}>
          {context}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 'auto', paddingTop: 30 }}>
          <AvatarStub initials={initials} bg={glow} size={52} />
          <div style={{ lineHeight: 1.35 }}>
            <div style={{ color: '#fff', fontWeight: 600, fontSize: 16 }}>{name}</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  return (
    <section style={{ background: '#000', color: '#fff', padding: '96px 0 100px' }}>
      <Container>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 56px' }}>
          <Eyebrow color="var(--dj-yellow)">Proof</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 'clamp(34px, 4vw, 50px)', letterSpacing: '-1.5px', lineHeight: 1.05, margin: '14px 0 0' }}>
            Who&rsquo;s already <Accent>worked</Accent> with us
          </h2>
        </div>

        <div className="reveal" style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          <QuoteCard
            stat="$1.7M annual revenue. One designer. Zero employees."
            quote="Design is everything, and these guys have nailed it."
            context="Brett has run Designjoy solo for 8 years on a sub-48-hour turnaround per request."
            name="Kevin O&rsquo;Leary"
            role="Investor, Shark Tank"
            initials="KO"
            glow="var(--grad-orange)"
          />
          <QuoteCard
            stat="30+ active subscription clients at $4,995/month."
            quote="Designjoy shows that they know the art of subtlety."
            context="Senior-level branding, UI/UX, Webflow, and landing pages shipped without outsourcing a single file."
            name="Webflow Editorial"
            role="Featured studio"
            initials="W"
            glow="var(--grad-blue)"
          />
        </div>
      </Container>
    </section>
  );
}

window.Testimonials = Testimonials;
