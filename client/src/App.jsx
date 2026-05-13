import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { pageContent } from './content/pageContent';
import { schoolData } from './content/schoolData';
import { initFormHandlers, initTemplateEffects } from './lib/templateEffects';
import HomeHero from './components/HomeHero';

const routeMap = [
  { path: '/', key: 'index', label: 'Home' },
  { path: '/about', key: 'about', label: 'About' },
  { path: '/academics', key: 'academics', label: 'Academics' },
  { path: '/admissions', key: 'admissions', label: 'Admissions' },
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
      <div dangerouslySetInnerHTML={{ __html: mainHtml }} />
    </main>
  );
}

const footerHiddenPaths = new Set(['/404', '/news-details', '/event-details']);

const footerLegalPaths = new Set(['/privacy', '/terms-of-service']);

function Layout({ children }) {
  const footerLinks = routeMap.filter((item) => !footerHiddenPaths.has(item.path));
  const footerExploreLinks = footerLinks.filter((item) => !footerLegalPaths.has(item.path));
  const footerYear = new Date().getFullYear();

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
          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/about">Our story</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faculty-staff">Our team</NavLink>
                  </li>
                  <li>
                    <NavLink to="/campus-facilities">Campus &amp; facilities</NavLink>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>Learning</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/academics">Academics &amp; curriculum</NavLink>
                  </li>
                  <li>
                    <NavLink to="/students-life">Student life</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/admissions">Admissions</NavLink>
              </li>
              <li className="dropdown">
                <a href="#">
                  <span>News &amp; events</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </a>
                <ul>
                  <li>
                    <NavLink to="/news">News</NavLink>
                  </li>
                  <li>
                    <NavLink to="/events">Events</NavLink>
                  </li>
                </ul>
              </li>
              <li className="kb-nav-cta">
                <NavLink to="/contact">
                  <i className="bi bi-envelope-paper-heart"></i> Enquire
                </NavLink>
              </li>
            </ul>
            <NavLink
              to="/contact"
              className="kb-header-enquire-icon d-xl-none"
              aria-label="Enquire"
              title="Enquire"
            >
              <i className="bi bi-envelope-paper-heart" aria-hidden="true" />
            </NavLink>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>

      {children}

      <footer id="footer" className="footer kb-footer light-background position-relative">
        <div className="kb-footer-glow" aria-hidden="true" />
        <div className="container footer-top kb-footer-top">
          <div className="row g-4 g-lg-5 align-items-start">
            <div className="col-lg-4 col-md-6 kb-footer-brand">
              <NavLink to="/" className="kb-footer-brand-lockup d-inline-flex align-items-center text-decoration-none">
                <img
                  src={schoolData.logoSrc}
                  alt=""
                  className="kb-footer-logo-img"
                  width={120}
                  height={120}
                />
                <span className="kb-footer-wordmark ms-2 d-none d-sm-flex flex-column">
                  <span className="kb-footer-name">{schoolData.shortName}</span>
                  <span className="kb-footer-tag">{schoolData.tagline}</span>
                </span>
              </NavLink>
              <p className="kb-footer-legal-name mt-3 mb-0">{schoolData.legalName}</p>
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
              </ul>
            </div>
            <div className="col-lg-5 col-md-6 kb-footer-explore">
              <h4 className="kb-footer-heading">Explore</h4>
              <ul className="kb-footer-nav-columns list-unstyled mb-0">
                {footerExploreLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path} end={link.path === '/'} className="kb-footer-nav-link">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-3 col-md-12 kb-footer-cta">
              <h4 className="kb-footer-heading">Visit</h4>
              <p className="kb-footer-hours small mb-3">{schoolData.hours}</p>
              <NavLink to="/admissions" className="kb-footer-btn-primary w-100 mb-2 d-inline-block text-center text-decoration-none">
                Admissions
              </NavLink>
              <NavLink to="/contact" className="kb-footer-btn-outline w-100 d-inline-block text-center text-decoration-none">
                Contact us
              </NavLink>
            </div>
          </div>
        </div>
        <div className="kb-footer-bottom">
          <div className="container py-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
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
