export default function SpinnersSection() {
  return (
    <section id="spinners" className="mb-5">
      <h2 className="mb-4">Spinners</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <h5>Border</h5>
          <div className="d-flex flex-wrap gap-3 mb-3">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((v) => (
              <div key={v} className={`spinner-border text-${v}`} role="status">
                <span className="visually-hidden">Loading…</span>
              </div>
            ))}
          </div>
          <h5>Small</h5>
          <div className="d-flex gap-2 mb-3">
            <div className="spinner-border spinner-border-sm text-primary" role="status">
              <span className="visually-hidden">Loading…</span>
            </div>
            <div className="spinner-border spinner-border-sm text-secondary" role="status">
              <span className="visually-hidden">Loading…</span>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h5>Grow</h5>
          <div className="d-flex flex-wrap gap-3 mb-3">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((v) => (
              <div key={v} className={`spinner-grow text-${v}`} role="status">
                <span className="visually-hidden">Loading…</span>
              </div>
            ))}
          </div>
          <h5>Buttons with Spinners</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-primary" type="button" disabled>
              <span className="spinner-border spinner-border-sm me-1" aria-hidden="true" />
              Loading…
            </button>
            <button className="btn btn-outline-secondary" type="button" disabled>
              <span className="spinner-grow spinner-grow-sm me-1" aria-hidden="true" />
              Loading…
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
