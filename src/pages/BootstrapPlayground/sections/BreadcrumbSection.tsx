export default function BreadcrumbSection() {
  return (
    <section id="breadcrumb" className="mb-5">
      <h2 className="mb-4">Breadcrumb</h2>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">Home</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#breadcrumb">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>

      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#breadcrumb">Home</a></li>
          <li className="breadcrumb-item"><a href="#breadcrumb">Library</a></li>
          <li className="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
      </nav>

      <h5>Custom Divider</h5>
      <nav style={{ '--bs-breadcrumb-divider': "'>'" } as React.CSSProperties} aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="#breadcrumb">Home</a></li>
          <li className="breadcrumb-item active" aria-current="page">Library</li>
        </ol>
      </nav>
    </section>
  );
}
