import { useRef, useEffect, useCallback } from 'react';
import { Toast } from 'bootstrap';

export default function ToastsSection() {
  const toastRef = useRef<HTMLDivElement>(null);
  const bsToast = useRef<Toast | null>(null);

  useEffect(() => {
    if (toastRef.current) {
      bsToast.current = new Toast(toastRef.current, { autohide: true, delay: 5000 });
    }
    return () => {
      bsToast.current?.dispose();
    };
  }, []);

  const show = useCallback(() => bsToast.current?.show(), []);

  return (
    <section id="toasts" className="mb-5">
      <h2 className="mb-4">Toasts</h2>

      <button type="button" className="btn btn-primary mb-3" onClick={show}>
        Show Toast
      </button>

      {/* Live toast (bottom-right) */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1070 }}>
        <div ref={toastRef} className="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header">
            <svg className="rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#007aff" />
            </svg>
            <strong className="me-auto">Bootstrap</strong>
            <small>just now</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" />
          </div>
          <div className="toast-body">
            Hello! This toast was triggered via React ref + Bootstrap&apos;s Toast API.
          </div>
        </div>
      </div>

      {/* Static color toasts */}
      <div className="d-flex flex-column gap-2" style={{ maxWidth: 400 }}>
        {['primary', 'success', 'danger', 'warning'].map((v) => (
          <div
            key={v}
            className={`toast show align-items-center text-bg-${v} border-0`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="d-flex">
              <div className="toast-body">A {v} toast — always visible (static).</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
