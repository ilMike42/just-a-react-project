import { useState } from 'react';

const TABS = [
  { id: 'home', label: 'Home', content: 'Home tab content. Tabs help organise related content.' },
  { id: 'profile', label: 'Profile', content: 'Profile tab content. Navigate between views without leaving the page.' },
  { id: 'contact', label: 'Contact', content: 'Contact tab content. Only the active panel is visible.' },
] as const;

export default function TabsSection() {
  const [active, setActive] = useState<string>('home');

  return (
    <section id="navs-tabs" className="mb-5">
      <h2 className="mb-4">Navs &amp; Tabs</h2>

      <div className="row g-4">
        <div className="col-lg-6">
          <h5>Tabs</h5>
          <ul className="nav nav-tabs" role="tablist">
            {TABS.map((t) => (
              <li key={t.id} className="nav-item" role="presentation">
                <button
                  type="button"
                  className={`nav-link${active === t.id ? ' active' : ''}`}
                  role="tab"
                  aria-selected={active === t.id}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content border border-top-0 rounded-bottom p-3">
            {TABS.map((t) => (
              <div
                key={t.id}
                className={`tab-pane fade${active === t.id ? ' show active' : ''}`}
                role="tabpanel"
              >
                {t.content}
              </div>
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <h5>Pills</h5>
          <ul className="nav nav-pills mb-3">
            {TABS.map((t) => (
              <li key={t.id} className="nav-item">
                <button
                  type="button"
                  className={`nav-link${active === t.id ? ' active' : ''}`}
                  onClick={() => setActive(t.id)}
                >
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {TABS.map((t) => (
              <div key={t.id} className={`tab-pane fade${active === t.id ? ' show active' : ''}`}>
                {t.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
