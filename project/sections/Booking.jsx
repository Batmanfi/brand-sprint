const { Button } = window.DesignjoyDesignSystem_2bb465;
const { Container, Eyebrow } = window;

function Booking({ onApply }) {
  React.useEffect(() => {
    if (window.__calInit) return;
    window.__calInit = true;
    (function (C, A, L) {
      let p = function (a, ar) {a.q.push(ar);};
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;let ar = arguments;
        if (!cal.loaded) {cal.ns = {};cal.q = cal.q || [];d.head.appendChild(d.createElement('script')).src = A;cal.loaded = true;}
        if (ar[0] === L) {
          const api = function () {p(api, arguments);};
          const namespace = ar[1];api.q = api.q || [];
          if (typeof namespace === 'string') {cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ['initNamespace', namespace]);} else
          p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');
    window.Cal('init', '15min', { origin: 'https://cal.com' });
    window.Cal.ns['15min']('inline', {
      elementOrSelector: '#cal-embed',
      config: { layout: 'month_view' },
      calLink: 'theinfostudio/15min'
    });
    window.Cal.ns['15min']('ui', { hideEventTypeDetails: false, layout: 'month_view' });
  }, []);

  return (
    <section id="book" style={{ position: 'relative', background: 'var(--dj-canvas)', padding: '64px 0 88px', borderTop: '1px solid var(--dj-hairline)' }}>
      <Container>
        <div className="reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 38px' }}>
          <Eyebrow>Step one</Eyebrow>
          <h2 className="dj-h2" style={{ fontSize: 'clamp(34px, 4vw, 50px)', margin: '14px 0 0' }}>
            Book your sprint brief call
          </h2>
        </div>

        <div className="reveal" style={{
          background: '#fff', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card)',
          padding: 14, maxWidth: 1000, margin: '0 auto'
        }}>
          <div id="cal-embed" />
          <noscript>
            <div style={{ padding: 40, textAlign: 'center' }}>
              <a href="https://cal.com/theinfostudio/15min">Book on Cal.com →</a>
            </div>
          </noscript>
        </div>
      </Container>
    </section>);

}

window.Booking = Booking;