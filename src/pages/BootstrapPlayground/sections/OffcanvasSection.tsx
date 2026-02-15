import { useRef, useEffect, useCallback } from 'react';
import { Offcanvas } from 'bootstrap';

export default function OffcanvasSection() {
  const elRef = useRef<HTMLDivElement>(null);
  const bsRef = useRef<Offcanvas | null>(null);

  useEffect(() => {
    if (elRef.current) {
      bsRef.current = new Offcanvas(elRef.current);
    }
    return () => {
      bsRef.current?.dispose();
    };
  }, []);

  const open = useCallback(() => bsRef.current?.show(), []);
  const close = useCallback(() => bsRef.current?.hide(), []);

  return (
    <section id="offcanvas" className="mb-5">
      <h2 className="mb-4">Offcanvas</h2>

      <button type="button" className="btn btn-primary" onClick={open}>
        Open Offcanvas
      </button>

      <div ref={elRef} className="offcanvas offcanvas-start" tabIndex={-1} aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasLabel">Offcanvas Panel</h5>
          <button type="button" className="btn-close" aria-label="Close" onClick={close} />
        </div>
        <div className="offcanvas-body">
          <p>
            This panel slides in from the left, controlled via React refs and Bootstrap&apos;s
            <code>Offcanvas</code> class.
          </p>
          <div className="list-group">
            {['buttons', 'alerts', 'cards', 'forms', 'modal'].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="list-group-item list-group-item-action"
                onClick={close}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
