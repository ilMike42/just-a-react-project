const ROWS = [
  { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
  { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
  { id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter' },
];

export default function TablesSection() {
  return (
    <section id="tables" className="mb-5">
      <h2 className="mb-4">Tables</h2>

      <div className="row g-4">
        <div className="col-lg-6">
          <h5>Striped &amp; Hover</h5>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.id}>
                  <th scope="row">{r.id}</th>
                  <td>{r.first}</td>
                  <td>{r.last}</td>
                  <td>{r.handle}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-lg-6">
          <h5>Bordered &amp; Responsive</h5>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.id}>
                    <th scope="row">{r.id}</th>
                    <td>{r.first}</td>
                    <td>{r.last}</td>
                    <td>{r.handle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
