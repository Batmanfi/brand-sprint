const { Container, Eyebrow } = window;

const FAQS = [
  { q: 'How is a full rebrand and landing page possible in 10 days?', a: 'Standard agencies run strategy, identity and web sequentially, with handoffs between teams. We run every layer in parallel with one senior designer across all of them. The work-hours are the same as a typical month-long engagement — the calendar time is compressed because there are no handoffs.' },
  { q: 'Do I need to write the page copy?', a: 'No. We write every line of the landing page from the brand brief and your offer. You approve the copy at the same checkpoint where you approve the visual direction.' },
  { q: 'What if I have no brand assets to start from?', a: 'Starting from scratch is what the sprint is built for. The kickoff call covers your positioning, your customer and your direction. Bring answers to our discovery questions — we build the visual identity from there.' },
  { q: 'How much of my time will this actually take?', a: 'Three 30-minute checkpoint reviews: Day 3 for brand direction, Day 6 for full identity, Day 10 for final files. Outside those, you do not need to be in the project.' },
  { q: 'What if I don\u2019t like the first direction?', a: 'Unlimited revisions within scope. We revise until the direction is right. The 75% refund after week one covers the case where the fit isn\u2019t there at all.' },
  { q: 'Is this a subscription?', a: 'No \u2014 one flat payment, one engagement. Designjoy\u2019s monthly subscription is a separate product, so the sprint carries no ongoing obligation.' },
  { q: 'Is this right for my business?', a: 'Yes if you\u2019re a startup launching to market, or a company that has outgrown its current brand and needs a rebrand built and shipped together with the page. Not right if you only need ad creatives, complex motion design or video production — those are out of scope.' },
  { q: '6-month agency timelines exist for a reason. What\u2019s actually different here?', a: 'The 6-month timeline isn\u2019t from the work itself — it\u2019s from the structure: multiple teams, sequential handoffs, committee approvals and scheduling lag between every phase. One senior designer running every layer in parallel removes every one of those bottlenecks. Same work, no waiting.' },
];

function FaqItem({ item, open, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--dj-hairline)' }}>
      <button
        onClick={onToggle}
        style={{
          width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
          padding: '24px 4px', fontFamily: 'var(--font-sans)',
        }}
      >
        <span style={{ fontWeight: 500, fontSize: 'clamp(17px, 2vw, 20px)', letterSpacing: '-0.3px', color: 'var(--text-strong)' }}>{item.q}</span>
        <span style={{
          flex: '0 0 auto', width: 34, height: 34, borderRadius: '50%',
          background: open ? 'var(--gloss-black)' : '#fff', color: open ? '#fff' : 'var(--text-strong)',
          border: open ? '1px solid #000' : '1px solid var(--dj-hairline)',
          boxShadow: open ? 'var(--gloss-black-shadow)' : 'var(--shadow-sm)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, lineHeight: 1, transition: 'all var(--dur-base) var(--ease-out)',
          transform: open ? 'rotate(180deg)' : 'none',
        }}>{open ? '\u2212' : '+'}</span>
      </button>
      <div style={{ display: 'grid', gridTemplateRows: open ? '1fr' : '0fr', transition: 'grid-template-rows var(--dur-slow) var(--ease-out)' }}>
        <div style={{ overflow: 'hidden' }}>
          <p style={{ margin: 0, padding: '0 56px 26px 4px', fontSize: 16.5, lineHeight: 1.6, color: 'rgba(0, 0, 0, 0.8)' }}>{item.a}</p>
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '40px 0 100px' }}>
      <Container style={{ maxWidth: 860 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="dj-h2" style={{ fontSize: 'clamp(32px, 4vw, 50px)', marginTop: 14 }}>Before you book</h2>
        </div>
        <div className="reveal" style={{ borderTop: '1px solid var(--dj-hairline)' }}>
          {FAQS.map((item, i) => (
            <FaqItem key={i} item={item} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

window.Faq = Faq;
