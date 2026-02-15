import { useState, type FormEvent } from 'react';

export default function FormsSection() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
  };

  return (
    <section id="forms" className="mb-5">
      <h2 className="mb-4">Forms</h2>

      <div className="row g-4">
        {/* Inputs with validation */}
        <div className="col-lg-6">
          <h5>Inputs &amp; Validation</h5>
          <form className={validated ? 'was-validated' : ''} noValidate onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailInput" className="form-label">Email</label>
              <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" required />
              <div className="invalid-feedback">Please provide a valid email.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="passwordInput" className="form-label">Password</label>
              <input type="password" className="form-control" id="passwordInput" required minLength={8} />
              <div className="invalid-feedback">At least 8 characters required.</div>
            </div>

            <div className="mb-3">
              <label htmlFor="selectInput" className="form-label">Select</label>
              <select className="form-select" id="selectInput" defaultValue="">
                <option value="" disabled>Choose…</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="textareaInput" className="form-label">Textarea</label>
              <textarea className="form-control" id="textareaInput" rows={3} placeholder="Message…" />
            </div>

            <button type="submit" className="btn btn-primary">Submit with validation</button>
          </form>
        </div>

        {/* Checks, radios, switches, floating labels */}
        <div className="col-lg-6">
          <h5>Checks &amp; Radios</h5>
          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="chk1" defaultChecked />
              <label className="form-check-label" htmlFor="chk1">Default checkbox</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="chk2" />
              <label className="form-check-label" htmlFor="chk2">Another checkbox</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="chk3" disabled />
              <label className="form-check-label" htmlFor="chk3">Disabled</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radios" id="r1" defaultChecked />
              <label className="form-check-label" htmlFor="r1">First radio</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="radios" id="r2" />
              <label className="form-check-label" htmlFor="r2">Second radio</label>
            </div>
          </div>

          <div className="mb-3">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="sw1" defaultChecked />
              <label className="form-check-label" htmlFor="sw1">Toggle switch</label>
            </div>
          </div>

          <h5>Floating Labels</h5>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatName" placeholder="Name" />
            <label htmlFor="floatName">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatEmail" placeholder="Email" />
            <label htmlFor="floatEmail">Email address</label>
          </div>

          <h5>Range &amp; Input Group</h5>
          <div className="mb-3">
            <label htmlFor="rangeInput" className="form-label">Range</label>
            <input type="range" className="form-range" id="rangeInput" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input type="text" className="form-control" placeholder="Username" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input type="text" className="form-control" placeholder="Amount" />
            <span className="input-group-text">.00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
