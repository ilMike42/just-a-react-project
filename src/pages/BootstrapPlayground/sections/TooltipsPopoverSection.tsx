import { useRef, useEffect } from 'react';
import { Tooltip, Popover } from 'bootstrap';

export default function TooltipsPopoverSection() {
  const tooltipRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const popoverRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const tooltips = tooltipRefs.current
      .filter((el): el is HTMLButtonElement => el !== null)
      .map((el) => new Tooltip(el));

    const popovers = popoverRefs.current
      .filter((el): el is HTMLButtonElement => el !== null)
      .map((el) => new Popover(el));

    return () => {
      tooltips.forEach((t) => t.dispose());
      popovers.forEach((p) => p.dispose());
    };
  }, []);

  return (
    <section id="tooltips" className="mb-5">
      <h2 className="mb-4">Tooltips &amp; Popovers</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <h5>Tooltips</h5>
          <div className="d-flex flex-wrap gap-2">
            {(['top', 'right', 'bottom', 'left'] as const).map((p, i) => (
              <button
                key={p}
                ref={(el) => { tooltipRefs.current[i] = el; }}
                type="button"
                className="btn btn-outline-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement={p}
                title={`Tooltip on ${p}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h5>Popovers</h5>
          <div className="d-flex flex-wrap gap-2">
            {(['top', 'right', 'bottom', 'left'] as const).map((p, i) => (
              <button
                key={p}
                ref={(el) => { popoverRefs.current[i] = el; }}
                type="button"
                className="btn btn-outline-primary"
                data-bs-toggle="popover"
                data-bs-placement={p}
                data-bs-title={`Popover ${p}`}
                data-bs-content={`Content for the ${p} popover.`}
                data-bs-trigger="focus"
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
