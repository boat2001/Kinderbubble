import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { pageContent } from './content/pageContent';
import { schoolData } from './content/schoolData';
import { initFormHandlers, initTemplateEffects } from './lib/templateEffects';
import AmbientDecor, { getAmbientVariant } from './components/AmbientDecor';
import HomeHero from './components/HomeHero';
import NavMenu from './components/NavMenu';
import { extraRoutes } from './content/extraRoutes';

const routeMap = [
  { path: '/', key: 'index', label: 'Home' },
  { path: '/about', key: 'about', label: 'About us' },
  { path: '/academics', key: 'academics', label: 'Academics' },
  { path: '/admissions', key: 'admissions', label: 'Admission' },
  { path: '/faculty-staff', key: 'faculty-staff', label: 'Our team' },
  { path: '/campus-facilities', key: 'campus-facilities', label: 'Campus & facilities' },
  { path: '/students-life', key: 'students-life', label: 'Student life' },
  { path: '/news', key: 'news', label: 'News' },
  { path: '/events', key: 'events', label: 'Events' },
  { path: '/contact', key: 'contact', label: 'Contact' },
  { path: '/news-details', key: 'news-details', label: 'News details' },
  { path: '/event-details', key: 'event-details', label: 'Event details' },
  { path: '/privacy', key: 'privacy', label: 'Privacy' },
  { path: '/terms-of-service', key: 'terms-of-service', label: 'Terms of service' },
  { path: '/404', key: '404', label: '404' },
  ...extraRoutes,
];

const contentByKey = Object.fromEntries(pageContent.map((item) => [item.name, item]));

/** Strip static template hero; replaced by <HomeHero /> on the home page. */
function stripIndexHero(html) {
  return html.replace(/\s*<!-- Hero Section -->[\s\S]*?<!-- \/Hero Section -->\s*/, '\n');
}

function PageRenderer({ pageKey }) {
  const page = contentByKey[pageKey] || contentByKey['404'];

  const mainHtml = useMemo(() => {
    let html = page?.mainHtml || '';
    if (pageKey === 'index') html = stripIndexHero(html);
    return html;
  }, [page, pageKey]);

  useEffect(() => {
    const baseClass = page?.bodyClass || 'index-page';
    document.body.className = baseClass;
    document.title = page?.title || 'KinderBubble International School';
  }, [page]);

  return (
    <main className="main">
      {pageKey === 'index' ? <HomeHero /> : null}
      <div className="kb-page-canvas">
        <AmbientDecor variant={getAmbientVariant(pageKey)} mode="page" />
        <div className="kb-page-canvas-inner" dangerouslySetInnerHTML={{ __html: mainHtml }} />
      </div>
    </main>
  );
}

const footerHiddenPaths = new Set(['/404', '/news-details', '/event-details']);

const footerLegalPaths = new Set(['/privacy', '/terms-of-service']);

/** Footer nav: left column "Explore", right column "Check out" */
const FOOTER_EXPLORE_COLUMN_ORDER = [
  '/',
  '/about',
  '/academics/curriculum',
  '/academics/programmes',
  '/student-life/extra-curricular',
];
const FOOTER_CHECKOUT_COLUMN_ORDER = [
  '/parents/plan-a-visit',
  '/resources/gallery',
  '/resources/policies',
  '/events',
  '/contact',
];

function Layout({ children }) {
  const footerYear = new Date().getFullYear();

  const { footerExploreColumnLinks, footerCheckoutColumnLinks } = useMemo(() => {
    const links = routeMap.filter((item) => !footerHiddenPaths.has(item.path));
    const navLinks = links.filter((item) => !footerLegalPaths.has(item.path));
    const byPath = Object.fromEntries(navLinks.map((item) => [item.path, item]));
    return {
      footerExploreColumnLinks: FOOTER_EXPLORE_COLUMN_ORDER.map((p) => byPath[p]).filter(Boolean),
      footerCheckoutColumnLinks: FOOTER_CHECKOUT_COLUMN_ORDER.map((p) => byPath[p]).filter(Boolean),
    };
  }, []);

  return (
    <>
      <header id="header" className="header kb-header d-flex align-items-center sticky-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-end">
          <NavLink to="/" className="logo kb-header-logo d-flex align-items-center me-auto">
            <img
              src={schoolData.logoSrc}
              alt="Kinder Bubble International School"
              className="kb-logo-img"
              width={180}
              height={180}
            />
            <span className="kb-logo-text ms-2 d-inline-flex flex-column">
              <span className="sitename">{schoolData.shortName}</span>
              <small>International School</small>
            </span>
          </NavLink>
          <NavMenu />
        </div>
      </header>

      {children}

      <footer id="footer" className="footer kb-footer light-background position-relative">
        <div className="kb-footer-glow" aria-hidden="true" />
        <div className="container footer-top kb-footer-top">
          <div className="row kb-footer-top-row gy-4 gx-3 gx-lg-4 align-items-start">
            <div className="col-12 col-lg-4 kb-footer-brand">
              <NavLink to="/" className="kb-footer-brand-lockup d-inline-flex align-items-center text-decoration-none">
                <img
                  src={schoolData.logoSrc}
                  alt=""
                  className="kb-footer-logo-img"
                  width={120}
                  height={120}
                />
                <span className="kb-footer-wordmark ms-2 d-flex flex-column text-start">
                  <span className="kb-footer-name">{schoolData.shortName}</span>
                  <span className="kb-footer-tag">{schoolData.tagline}</span>
                </span>
              </NavLink>
              <p className="kb-footer-brand-tagline mt-3 mb-0">
                Where every child is known, nurtured, and challenged to grow.
              </p>
              <ul className="kb-footer-contact list-unstyled mt-3 mb-0 small">
                <li className="d-flex gap-2 mb-2">
                  <i className="bi bi-geo-alt flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    {schoolData.addressLine1}
                    <br />
                    {schoolData.addressLine2}
                  </span>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <a href={`tel:${schoolData.phoneTel}`} className="kb-footer-link">
                    {schoolData.phoneDisplay}
                  </a>
                </li>
                <li className="d-flex gap-2 align-items-center">
                  <i className="bi bi-envelope" aria-hidden="true" />
                  <a href={`mailto:${schoolData.officeEmail}`} className="kb-footer-link">
                    {schoolData.officeEmail}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-3 kb-footer-cta">
              <div className="kb-footer-visit-panel">
                <h4 className="kb-footer-heading">Visit our campus</h4>
                <p className="kb-footer-hours small mb-3">{schoolData.hours}</p>
                <NavLink to="/admissions" className="kb-footer-btn-primary w-100 mb-2 d-inline-block text-center text-decoration-none">
                  Admissions
                </NavLink>
                <NavLink to="/contact" className="kb-footer-btn-outline w-100 d-inline-block text-center text-decoration-none">
                  Contact us
                </NavLink>
              </div>
            </div>
            <div className="col-12 col-lg-5 kb-footer-explore">
              <div className="row kb-footer-explore-inner gx-2 gx-md-3 gx-lg-3 gy-0">
                <div className="col-6 kb-footer-explore-col">
                  <h4 className="kb-footer-heading">Explore</h4>
                  <ul className="kb-footer-nav-stack list-unstyled mb-0">
                    {footerExploreColumnLinks.map((link) => (
                      <li key={link.path}>
                        <NavLink to={link.path} end={link.path === '/'} className="kb-footer-nav-link">
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-6 kb-footer-checkout-col">
                  <h4 className="kb-footer-heading">Check out</h4>
                  <ul className="kb-footer-nav-stack list-unstyled mb-0">
                    {footerCheckoutColumnLinks.map((link) => (
                      <li key={link.path}>
                        <NavLink to={link.path} end={link.path === '/'} className="kb-footer-nav-link">
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kb-footer-bottom">
          <div className="container py-3 d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-between gap-2 kb-footer-bottom-inner">
            <p className="mb-0 small kb-footer-copy">
              © {footerYear} {schoolData.legalName}. All rights reserved.
            </p>
            <nav className="d-flex flex-wrap gap-3 small kb-footer-legal-nav" aria-label="Legal">
              <NavLink to="/privacy" className="kb-footer-legal-link">
                Privacy
              </NavLink>
              <NavLink to="/terms-of-service" className="kb-footer-legal-link">
                Terms of service
              </NavLink>
            </nav>
          </div>
        </div>
      </footer>

      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <div id="preloader"></div>
    </>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  useEffect(() => {
    initTemplateEffects();
    initFormHandlers();
  }, [location.pathname]);

  return (
    <Layout>
      <Routes>
        {routeMap.map((route) => (
          <Route key={route.path} path={route.path} element={<PageRenderer pageKey={route.key} />} />
        ))}
        <Route path="*" element={<PageRenderer pageKey="404" />} />
      </Routes>
    </Layout>
  );
}
