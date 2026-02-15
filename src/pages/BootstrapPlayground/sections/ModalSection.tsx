import { useRef, useEffect, useCallback } from 'react';
import { Modal } from 'bootstrap';

export default function ModalSection() {
  const modalRef = useRef<HTMLDivElement>(null);
  const bsModal = useRef<Modal | null>(null);

  useEffect(() => {
    if (modalRef.current) {
      bsModal.current = new Modal(modalRef.current);
    }
    return () => {
      bsModal.current?.dispose();
    };
  }, []);

  const open = useCallback(() => bsModal.current?.show(), []);
  const close = useCallback(() => bsModal.current?.hide(), []);

  return (
    <section id="modal" className="mb-5">
      <h2 className="mb-4">Modal</h2>

      <button type="button" className="btn btn-primary" onClick={open}>
        Launch demo modal
      </button>

      <div ref={modalRef} className="modal fade" tabIndex={-1} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Title</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={close} />
            </div>
            <div className="modal-body">
              <p>
                This Bootstrap modal is controlled via React refs and the{' '}
                <code>Modal</code> ES import from <code>bootstrap</code> (tree-shaken by
                Vite).
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={close}>Close</button>
              <button type="button" className="btn btn-primary" onClick={close}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
