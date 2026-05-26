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

const FOOTER_QUICK_LINKS = [
  { path: '/about', label: 'About Us' },
  { path: '/admissions', label: 'Admissions' },
  { path: '/academics/programmes', label: 'Academic Programmes' },
  { path: '/resources/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact Us' },
];

const FOOTER_LATEST_NEWS = [
  {
    title: 'Global School Alliance partnership',
    path: '/news/partnerships',
    image: '/assets/images/others/global-school-alliance-certificate.png',
  },
  {
    title: 'Educational trips by term theme',
    path: '/events',
    image: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg',
  },
];

function Layout({ children }) {
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
          <NavMenu />
        </div>
      </header>

      {children}

      <footer id="footer" className="footer kb-footer light-background position-relative">
        <div className="kb-footer-glow" aria-hidden="true" />
        <div className="container footer-top kb-footer-top">
          <div className="kb-footer-top-row">
            <section className="kb-footer-brand" aria-label="School summary">
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
              <p className="kb-footer-brand-tagline">
                KBIS nurtures children from creche through primary with character, confidence, and bilingual learning.
              </p>
              <div className="kb-footer-social" aria-label="School contact shortcuts">
                <a href={`tel:${schoolData.phoneTel}`} aria-label="Call KBIS">
                  <i className="bi bi-telephone-fill" aria-hidden="true" />
                </a>
                <a href={`mailto:${schoolData.officeEmail}`} aria-label="Email KBIS">
                  <i className="bi bi-envelope-fill" aria-hidden="true" />
                </a>
                <NavLink to="/contact" aria-label="Visit contact page">
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                </NavLink>
              </div>
            </section>

            <section className="kb-footer-contact-col" aria-label="Contacts">
              <h4 className="kb-footer-heading">Contacts</h4>
              <ul className="kb-footer-contact list-unstyled">
                <li>
                  <i className="bi bi-geo-alt-fill" aria-hidden="true" />
                  <span>
                    {schoolData.addressLine1}
                    <br />
                    {schoolData.addressLine2}
                  </span>
                </li>
                <li>
                  <i className="bi bi-send-fill" aria-hidden="true" />
                  <a href={`mailto:${schoolData.officeEmail}`} className="kb-footer-link">
                    {schoolData.officeEmail}
                  </a>
                </li>
                <li>
                  <i className="bi bi-telephone-fill" aria-hidden="true" />
                  <a href={`tel:${schoolData.phoneTel}`} className="kb-footer-link">
                    {schoolData.phoneDisplay}
                  </a>
                </li>
              </ul>
            </section>

            <section className="kb-footer-quick-col" aria-label="Quick links">
              <h4 className="kb-footer-heading">Quick Links</h4>
              <ul className="kb-footer-nav-stack list-unstyled">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link.path}>
                    <NavLink to={link.path} className="kb-footer-nav-link">
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </section>

            <section className="kb-footer-news-col" aria-label="Latest news">
              <h4 className="kb-footer-heading">Latest News</h4>
              <div className="kb-footer-news-list">
                {FOOTER_LATEST_NEWS.map((item) => (
                  <NavLink to={item.path} className="kb-footer-news-item" key={item.title}>
                    <img src={item.image} alt="" loading="lazy" />
                    <span>{item.title}</span>
                  </NavLink>
                ))}
              </div>
            </section>
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
