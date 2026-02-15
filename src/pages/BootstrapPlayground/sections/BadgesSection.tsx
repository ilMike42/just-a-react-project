export default function BadgesSection() {
  return (
    <section id="badges" className="mb-5">
      <h2 className="mb-4">Badges</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <h5>Color Variants</h5>
          <div className="d-flex flex-wrap gap-2">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
              (v) => (
                <span key={v} className={`badge text-bg-${v}`}>
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="col-md-4">
          <h5>Pill Badges</h5>
          <div className="d-flex flex-wrap gap-2">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info'].map((v) => (
              <span key={v} className={`badge rounded-pill text-bg-${v}`}>
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </span>
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <h5>On Buttons</h5>
          <div className="d-flex flex-wrap gap-2">
            <button type="button" className="btn btn-primary position-relative">
              Inbox
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                99+
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <button type="button" className="btn btn-primary position-relative">
              Notifications
              <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <h5>Headings</h5>
        <h1>h1 <span className="badge text-bg-secondary">New</span></h1>
        <h3>h3 <span className="badge text-bg-secondary">New</span></h3>
      </div>
    </section>
  );
}
