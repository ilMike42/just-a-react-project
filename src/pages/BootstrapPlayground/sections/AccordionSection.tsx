export default function AccordionSection() {
  return (
    <section id="accordion" className="mb-5">
      <h2 className="mb-4">Accordion</h2>

      <div className="accordion" id="demoAccordion">
        {[
          { id: 'One', show: true, body: 'This is the first item\u2019s accordion body. It is shown by default.' },
          { id: 'Two', show: false, body: 'This is the second item\u2019s accordion body. It is hidden by default.' },
          { id: 'Three', show: false, body: 'This is the third item\u2019s accordion body. It is hidden by default.' },
        ].map(({ id, show, body }) => (
          <div key={id} className="accordion-item">
            <h2 className="accordion-header">
              <button
                className={`accordion-button${show ? '' : ' collapsed'}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${id}`}
                aria-expanded={show}
                aria-controls={`collapse${id}`}
              >
                Accordion Item #{id}
              </button>
            </h2>
            <div
              id={`collapse${id}`}
              className={`accordion-collapse collapse${show ? ' show' : ''}`}
              data-bs-parent="#demoAccordion"
            >
              <div className="accordion-body">
                <strong>{body}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
