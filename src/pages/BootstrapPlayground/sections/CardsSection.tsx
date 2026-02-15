const PLACEHOLDER_IMG = (color: string, text: string, h = 180) => (
  <svg
    className="card-img-top"
    width="100%"
    height={h}
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    role="img"
    aria-label={text}
  >
    <rect width="100%" height="100%" fill={color} />
    <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle">
      {text}
    </text>
  </svg>
);

export default function CardsSection() {
  return (
    <section id="cards" className="mb-5">
      <h2 className="mb-4">Cards</h2>

      <div className="row g-4">
        {/* Basic */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Basic Card</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
              <p className="card-text">
                Quick example text to build on the card title and make up the bulk of the
                card&apos;s content.
              </p>
              <a href="#cards" className="card-link">Card link</a>
              <a href="#cards" className="card-link">Another link</a>
            </div>
          </div>
        </div>

        {/* With Image */}
        <div className="col-md-4">
          <div className="card">
            {PLACEHOLDER_IMG('#868e96', 'Image cap')}
            <div className="card-body">
              <h5 className="card-title">Card with Image</h5>
              <p className="card-text">A card with an SVG placeholder image cap.</p>
              <a href="#cards" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        {/* With List Group */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Featured</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-footer text-body-secondary">2 days ago</div>
          </div>
        </div>
      </div>

      {/* Horizontal */}
      <div className="row mt-4">
        <div className="col-lg-8">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-4">
                <svg
                  className="img-fluid rounded-start"
                  width="100%"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid slice"
                  role="img"
                  aria-label="Image"
                >
                  <rect width="100%" height="100%" fill="#868e96" />
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em" textAnchor="middle">
                    Image
                  </text>
                </svg>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Horizontal Card</h5>
                  <p className="card-text">
                    A wider card with supporting text as a natural lead-in to additional
                    content.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
