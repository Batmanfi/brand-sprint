const { Container, Accent, Eyebrow, Check } = window;

function TimelineNode({ day, label, fill, dark }) {
  return (
    <div className="dj-tl-node" style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14 }}>
      <div className="dj-tl-circle" style={{ background: fill, color: '#fff', boxShadow: 'var(--shadow-card)', border: '4px solid var(--dj-canvas)' }}>
        <span className="dj-tl-eyebrow" style={{ letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.85, fontWeight: 600 }}>Day</span>
        <span className="dj-tl-day" style={{ fontWeight: 600, lineHeight: 1, letterSpacing: '-1px' }}>{day}</span>
      </div>
      <div className="dj-tl-label" style={{ fontWeight: 500, color: 'var(--text-strong)', lineHeight: 1.3 }}>{label}</div>
    </div>);

}

function Timeline() {
  return (
    <div className="reveal dj-timeline" style={{ position: 'relative', margin: '0 auto', maxWidth: 880 }}>
      <div aria-hidden="true" className="dj-tl-line" style={{ position: 'absolute', background: 'linear-gradient(90deg, #ffd817, #ff5a00 40%, #ff0084 70%, #0000fe)' }} />
      <div className="dj-tl-row" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <TimelineNode day="1" label="Kickoff" fill="var(--gloss-black)" dark />
        <TimelineNode day="3" label="Brand direction review" fill="var(--grad-yellow)" />
        <TimelineNode day="6" label="Full identity review" fill="var(--grad-orange)" />
        <TimelineNode day="10" label="Final files signed off" fill="var(--grad-blue)" />
      </div>
      <style>{`
        .dj-tl-line { top: 42px; left: 12%; right: 12%; height: 5px; border-radius: 999px; }
        .dj-tl-node { min-width: 120px; }
        .dj-tl-circle { width: 84px; height: 84px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; }
        .dj-tl-eyebrow { font-size: 11px; }
        .dj-tl-day { font-size: 30px; }
        .dj-tl-label { font-size: 15px; max-width: 150px; }
        @media (max-width: 600px) {
          .dj-tl-line { top: 28px; left: 9%; right: 9%; height: 4px; }
          .dj-tl-row { gap: 4px; }
          .dj-tl-node { min-width: 0; gap: 9px; }
          .dj-tl-circle { width: 56px; height: 56px; border-width: 3px; }
          .dj-tl-eyebrow { font-size: 8px; letter-spacing: 0.08em; }
          .dj-tl-day { font-size: 20px; letter-spacing: -0.5px; }
          .dj-tl-label { font-size: 11.5px; line-height: 1.25; max-width: 78px; }
        }
      `}</style>
    </div>);

}

function Deliverable({ title, body, color }) {
  return (
    <div style={{ display: 'flex', gap: 16, padding: 24, background: '#fff', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
      <span style={{ marginTop: 2 }}><Check color={color} /></span>
      <div>
        <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 17, color: 'var(--text-strong)', marginBottom: 5 }}>{title}</div>
        <div style={{ fontSize: 15, lineHeight: 1.5, color: 'rgba(0, 0, 0, 0.8)' }}>{body}</div>
      </div>
    </div>);

}

function Solution() {
  const items = [
  { title: 'Brand direction', body: 'We research your positioning, audience and competitive landscape before any visual work begins.', color: 'var(--dj-orange)' },
  { title: 'Logo suite — primary, secondary, icon', body: 'Every variant your business needs across every touchpoint, designed in-house.', color: 'var(--dj-pink)' },
  { title: 'Color system &amp; typography', body: 'The complete visual language, built, tested and shipped ready to apply anywhere.', color: 'var(--dj-blue)' },
  { title: 'Brand guidelines document', body: 'Every rule documented so future work stays on-brand without needing the original designer.', color: 'var(--dj-green)' },
  { title: 'Landing page', body: 'Webflow live or Figma handoff — designed, built and launched for you.', color: 'var(--dj-orange)' },
  { title: 'All source files', body: 'Every working file organized and handed off on Day 10.', color: 'var(--dj-pink)' }];

  return (
    <section style={{ padding: '20px 0 100px' }}>
      <Container>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 860, margin: '0 auto 18px' }}>
          <Eyebrow>The Sprint System</Eyebrow>
          <h2 className="dj-h2" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginTop: 14 }}>
            Three months of calendar time, collapsed into <Accent>10 business days</Accent>.
          </h2>
          <p style={{ margin: '22px auto 0', fontSize: 18, lineHeight: 1.6, maxWidth: 740, color: "rgb(0, 0, 0)" }}>
            Standard agency rebrands take 3 to 6 months because they run sequentially — strategy, then identity,
            then web, with weeks of handoff between teams. The Sprint System runs every layer in parallel with one
            senior designer across all of them. Your only role is to review at three checkpoints.
          </p>
        </div>

        <div style={{ margin: '64px 0 80px' }}>
          <Timeline />
        </div>

        <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
          <div style={{ gridColumn: '1 / -1', marginBottom: 4 }}>
            <Eyebrow color="var(--text-strong)" style={{ letterSpacing: '0.14em' }}>What&rsquo;s done for you</Eyebrow>
          </div>
          {items.map((it) =>
          <Deliverable key={it.title} title={<span dangerouslySetInnerHTML={{ __html: it.title }} />} body={<span dangerouslySetInnerHTML={{ __html: it.body }} />} color={it.color} />
          )}
        </div>

        <p className="reveal" style={{
          margin: '64px auto 0', maxWidth: 820, textAlign: 'center', fontSize: 19, lineHeight: 1.6, color: 'var(--text-strong)', textWrap: 'pretty'
        }}>
          The brand and the page ship together on Day 10. You launch on the date you set, not the date the next
          handoff lands. Investors and clients see the brand and assume the business has been operating at this level
          for years. <strong>The rebrand stops being the project blocking everything else.</strong>
        </p>
      </Container>
    </section>);

}

window.Solution = Solution;