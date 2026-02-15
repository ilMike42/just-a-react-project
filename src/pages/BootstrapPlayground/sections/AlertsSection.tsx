import { useState } from 'react';

export default function AlertsSection() {
  const [visible, setVisible] = useState(true);

  return (
    <section id="alerts" className="mb-5">
      <h2 className="mb-4">Alerts</h2>

      <div className="row">
        <div className="col-lg-8">
          {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
            (v) => (
              <div key={v} className={`alert alert-${v}`} role="alert">
                A simple <strong>{v}</strong> alert — check it out!
              </div>
            ),
          )}
        </div>

        <div className="col-lg-4">
          <h5>With Link</h5>
          <div className="alert alert-primary" role="alert">
            Alert with <a href="#alerts" className="alert-link">an example link</a>.
          </div>

          <h5>With Icon</h5>
          <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-check-circle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div>Operation completed successfully!</div>
          </div>

          <h5>Dismissible</h5>
          {visible ? (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Warning!</strong> This alert can be dismissed.
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setVisible(false)}
              />
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-outline-warning btn-sm"
              onClick={() => setVisible(true)}
            >
              Show dismissible alert
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
