const { Button } = window.DesignjoyDesignSystem_2bb465;
const { Smile } = window;

function StickyCta({ onApply }) {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const book = document.getElementById('book');
      const footerNear = document.body.scrollHeight - (y + window.innerHeight) < 240;
      // show after the hero, hide once we're sitting on the booking section or near the footer
      let onBook = false;
      if (book) {
        const r = book.getBoundingClientRect();
        onBook = r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2;
      }
      setShow(y > window.innerHeight * 0.85 && !onBook && !footerNear);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed', left: '50%', bottom: 22, zIndex: 100,
      transform: `translateX(-50%) translateY(${show ? '0' : '130%'})`,
      opacity: show ? 1 : 0, pointerEvents: show ? 'auto' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-out), opacity var(--dur-base) var(--ease-out)',
    }}>
      <div className="dj-sticky-inner" style={{
        display: 'flex', alignItems: 'center', gap: 18, padding: '11px 12px 11px 22px',
        background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
        borderRadius: 'var(--radius-pill)', boxShadow: 'var(--shadow-float)', border: '1px solid rgba(255,255,255,0.7)',
        maxWidth: '94vw', boxSizing: 'border-box',
      }}>
        <Smile size={22} color="var(--dj-orange)" />
        <span className="dj-sticky-text" style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-strong)', whiteSpace: 'nowrap' }}>
          Rebrand in 10 business days
        </span>
        <Button variant="primary" pill onClick={onApply} style={{ whiteSpace: 'nowrap' }}>
          Apply for a sprint slot
        </Button>
      </div>
      <style>{`
        @media (max-width: 560px) {
          .dj-sticky-inner { gap: 10px; padding: 8px 10px 8px 16px; }
          .dj-sticky-text { display: none; }
        }
      `}</style>
    </div>
  );
}

window.StickyCta = StickyCta;
