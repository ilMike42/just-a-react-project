export default function ListGroupSection() {
  return (
    <section id="list-group" className="mb-5">
      <h2 className="mb-4">List Group</h2>

      <div className="row g-4">
        <div className="col-md-4">
          <h5>Basic</h5>
          <ul className="list-group">
            <li className="list-group-item active" aria-current="true">Active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item disabled" aria-disabled="true">Disabled item</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>Flush</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
          </ul>
        </div>

        <div className="col-md-4">
          <h5>Contextual</h5>
          <ul className="list-group">
            {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map(
              (v) => (
                <li key={v} className={`list-group-item list-group-item-${v}`}>
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-6">
          <h5>With Badges</h5>
          <ul className="list-group">
            {[
              { label: 'Inbox', count: 14 },
              { label: 'Drafts', count: 2 },
              { label: 'Trash', count: 1 },
            ].map((item) => (
              <li
                key={item.label}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.label}
                <span className="badge text-bg-primary rounded-pill">{item.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
