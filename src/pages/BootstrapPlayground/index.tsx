import ButtonsSection from './sections/ButtonsSection';
import AlertsSection from './sections/AlertsSection';
import BadgesSection from './sections/BadgesSection';
import CardsSection from './sections/CardsSection';
import DropdownsSection from './sections/DropdownsSection';
import FormsSection from './sections/FormsSection';
import TablesSection from './sections/TablesSection';
import TabsSection from './sections/TabsSection';
import AccordionSection from './sections/AccordionSection';
import ListGroupSection from './sections/ListGroupSection';
import ModalSection from './sections/ModalSection';
import OffcanvasSection from './sections/OffcanvasSection';
import ToastsSection from './sections/ToastsSection';
import TooltipsPopoverSection from './sections/TooltipsPopoverSection';
import CarouselSection from './sections/CarouselSection';
import ProgressSection from './sections/ProgressSection';
import SpinnersSection from './sections/SpinnersSection';
import PaginationSection from './sections/PaginationSection';
import BreadcrumbSection from './sections/BreadcrumbSection';

const NAV_ITEMS = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'badges', label: 'Badges' },
  { id: 'cards', label: 'Cards' },
  { id: 'dropdowns', label: 'Dropdowns' },
  { id: 'forms', label: 'Forms' },
  { id: 'tables', label: 'Tables' },
  { id: 'navs-tabs', label: 'Tabs' },
  { id: 'accordion', label: 'Accordion' },
  { id: 'list-group', label: 'List Group' },
  { id: 'modal', label: 'Modal' },
  { id: 'offcanvas', label: 'Offcanvas' },
  { id: 'toasts', label: 'Toasts' },
  { id: 'tooltips', label: 'Tooltips' },
  { id: 'carousel', label: 'Carousel' },
  { id: 'progress', label: 'Progress' },
  { id: 'spinners', label: 'Spinners' },
  { id: 'pagination', label: 'Pagination' },
  { id: 'breadcrumb', label: 'Breadcrumb' },
] as const;

export default function BootstrapPlayground() {
  return (
    <>
      {/* Sticky Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#top">
            Bootstrap Playground
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPlayground"
            aria-controls="navbarPlayground"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarPlayground">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex-wrap">
              {NAV_ITEMS.map(({ id, label }) => (
                <li key={id} className="nav-item">
                  <a className="nav-link" href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div id="top" className="container py-5">
        <div className="row mb-5">
          <div className="col">
            <h1 className="display-4">Bootstrap Playground</h1>
            <p className="lead text-body-secondary">
              A showcase of Bootstrap 5 components using vanilla Bootstrap classes in React.
              Organised with Bootstrap&apos;s grid system. Interactive components use
              per-component ES imports for Vite tree-shaking.
            </p>
            <hr />
          </div>
        </div>

        <ButtonsSection />
        <AlertsSection />
        <BadgesSection />
        <CardsSection />
        <DropdownsSection />
        <FormsSection />
        <TablesSection />
        <TabsSection />
        <AccordionSection />
        <ListGroupSection />
        <ModalSection />
        <OffcanvasSection />
        <ToastsSection />
        <TooltipsPopoverSection />
        <CarouselSection />
        <ProgressSection />
        <SpinnersSection />
        <PaginationSection />
        <BreadcrumbSection />
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-4 mt-5">
        <div className="container text-center">
          <p className="mb-0">
            Bootstrap Playground &mdash; React + Vite + Bootstrap 5
          </p>
        </div>
      </footer>
    </>
  );
}
