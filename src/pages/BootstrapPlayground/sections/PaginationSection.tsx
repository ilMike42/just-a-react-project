export default function PaginationSection() {
  return (
    <section id="pagination" className="mb-5">
      <h2 className="mb-4">Pagination</h2>

      <div className="row g-4">
        <div className="col-md-6">
          <h5>Default</h5>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#pagination" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className="page-item active" aria-current="page"><a className="page-link" href="#pagination">1</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">2</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">3</a></li>
              <li className="page-item disabled"><a className="page-link" href="#pagination">…</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">10</a></li>
              <li className="page-item">
                <a className="page-link" href="#pagination" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-6">
          <h5>Sizes</h5>
          <nav aria-label="Large">
            <ul className="pagination pagination-lg mb-2">
              <li className="page-item active"><a className="page-link" href="#pagination">1</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">2</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">3</a></li>
            </ul>
          </nav>
          <nav aria-label="Small">
            <ul className="pagination pagination-sm">
              <li className="page-item active"><a className="page-link" href="#pagination">1</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">2</a></li>
              <li className="page-item"><a className="page-link" href="#pagination">3</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
