const SLIDES = [
  { label: 'First slide', text: 'The first carousel slide.', color: '#0d6efd' },
  { label: 'Second slide', text: 'The second carousel slide.', color: '#198754' },
  { label: 'Third slide', text: 'The third carousel slide.', color: '#dc3545' },
];

export default function CarouselSection() {
  return (
    <section id="carousel" className="mb-5">
      <h2 className="mb-4">Carousel</h2>

      <div
        id="demoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: 700 }}
      >
        <div className="carousel-indicators">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#demoCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? 'active' : ''}
              aria-current={i === 0 ? 'true' : undefined}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner rounded">
          {SLIDES.map((s, i) => (
            <div key={i} className={`carousel-item${i === 0 ? ' active' : ''}`}>
              <svg
                className="d-block w-100"
                width="700"
                height="300"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                aria-label={s.label}
              >
                <rect width="100%" height="100%" fill={s.color} />
                <text x="50%" y="50%" fill="#fff" dy=".3em" textAnchor="middle" fontSize="24">
                  {s.label}
                </text>
              </svg>
              <div className="carousel-caption d-none d-md-block">
                <h5>{s.label}</h5>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demoCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demoCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}
