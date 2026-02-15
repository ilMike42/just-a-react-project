export default function ProgressSection() {
  return (
    <section id="progress" className="mb-5">
      <h2 className="mb-4">Progress Bars</h2>

      <div className="row g-4">
        <div className="col-lg-6">
          <h5>Basic</h5>
          {[
            { pct: 25, bg: '' },
            { pct: 50, bg: 'bg-success' },
            { pct: 75, bg: 'bg-warning' },
            { pct: 100, bg: 'bg-danger' },
          ].map(({ pct, bg }) => (
            <div key={pct} className="progress mb-3" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
              <div className={`progress-bar ${bg}`} style={{ width: `${pct}%` }}>{pct}%</div>
            </div>
          ))}
        </div>

        <div className="col-lg-6">
          <h5>Striped</h5>
          <div className="progress mb-3" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar progress-bar-striped" style={{ width: '40%' }}>40%</div>
          </div>

          <h5>Animated</h5>
          <div className="progress mb-3" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" style={{ width: '60%' }}>60%</div>
          </div>

          <h5>Stacked</h5>
          <div className="progress-stacked mb-3">
            <div className="progress" role="progressbar" aria-valuenow={15} aria-valuemin={0} aria-valuemax={100} style={{ width: '15%' }}>
              <div className="progress-bar">15%</div>
            </div>
            <div className="progress" role="progressbar" aria-valuenow={30} aria-valuemin={0} aria-valuemax={100} style={{ width: '30%' }}>
              <div className="progress-bar bg-success">30%</div>
            </div>
            <div className="progress" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{ width: '20%' }}>
              <div className="progress-bar bg-info">20%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
