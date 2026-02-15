export default function DropdownsSection() {
  return (
    <section id="dropdowns" className="mb-5">
      <h2 className="mb-4">Dropdowns</h2>

      <div className="d-flex flex-wrap gap-3">
        {/* Basic */}
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#dropdowns">Action</a></li>
            <li><a className="dropdown-item" href="#dropdowns">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#dropdowns">Separated link</a></li>
          </ul>
        </div>

        {/* Split */}
        <div className="btn-group">
          <button type="button" className="btn btn-success">Split</button>
          <button
            type="button"
            className="btn btn-success dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#dropdowns">Action</a></li>
            <li><a className="dropdown-item" href="#dropdowns">Another action</a></li>
          </ul>
        </div>

        {/* Color variants */}
        {['secondary', 'danger', 'warning', 'info'].map((v) => (
          <div key={v} className="dropdown">
            <button
              className={`btn btn-${v} dropdown-toggle`}
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#dropdowns">Action</a></li>
              <li><a className="dropdown-item" href="#dropdowns">Another action</a></li>
            </ul>
          </div>
        ))}

        {/* Dropup */}
        <div className="dropup">
          <button
            className="btn btn-outline-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropup
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#dropdowns">Action</a></li>
            <li><a className="dropdown-item" href="#dropdowns">Another action</a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
