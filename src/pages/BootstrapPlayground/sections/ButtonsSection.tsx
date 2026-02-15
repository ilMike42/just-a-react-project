export default function ButtonsSection() {
  return (
    <section id="buttons" className="mb-5">
      <h2 className="mb-4">Buttons</h2>

      <h5>Variants</h5>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link'].map(
          (v) => (
            <button key={v} type="button" className={`btn btn-${v}`}>
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ),
        )}
      </div>

      <h5>Outline</h5>
      <div className="d-flex flex-wrap gap-2 mb-3">
        {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'].map((v) => (
          <button key={v} type="button" className={`btn btn-outline-${v}`}>
            {v.charAt(0).toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>

      <h5>Sizes</h5>
      <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
        <button type="button" className="btn btn-primary btn-lg">Large</button>
        <button type="button" className="btn btn-primary">Default</button>
        <button type="button" className="btn btn-primary btn-sm">Small</button>
      </div>

      <h5>States</h5>
      <div className="d-flex flex-wrap gap-2 mb-3">
        <button type="button" className="btn btn-primary active">Active</button>
        <button type="button" className="btn btn-primary" disabled>Disabled</button>
      </div>

      <h5>Button Group</h5>
      <div className="btn-group" role="group" aria-label="Example button group">
        <button type="button" className="btn btn-outline-primary">Left</button>
        <button type="button" className="btn btn-outline-primary">Middle</button>
        <button type="button" className="btn btn-outline-primary">Right</button>
      </div>
    </section>
  );
}
