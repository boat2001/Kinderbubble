import aboutHtml from './pages/about.html?raw';
import academicsHtml from './pages/academics.html?raw';
import privacyHtml from './pages/privacy.html?raw';
import termsHtml from './pages/terms-of-service.html?raw';
import notFoundHtml from './pages/404.html?raw';
import {
  getIndexHtml,
  getAdmissionsHtml,
  getCampusHtml,
  getContactHtml,
  getEventsHtml,
  getNewsHtml,
  getFacultyHtml,
  getStudentsLifeHtml,
  getNewsDetailsHtml,
  getEventDetailsHtml,
} from './slimSiteHtml.js';
import { extraPageBuilders } from './extraPages.js';
import { extraRoutes } from './extraRoutes.js';

const extraPages = extraRoutes.map(({ key }) => {
  const built = extraPageBuilders[key]();
  return { name: key, ...built };
});

export const pageContent = [
  {
    name: 'index',
    title: 'Kinder Bubble International School · Accra',
    bodyClass: 'index-page',
    mainHtml: getIndexHtml(),
  },
  { name: 'about', title: 'About · Kinder Bubble International School', bodyClass: 'about-page', mainHtml: aboutHtml },
  { name: 'academics', title: 'Academics · Kinder Bubble International School', bodyClass: 'academics-page', mainHtml: academicsHtml },
  { name: 'admissions', title: 'Admissions · Kinder Bubble International School', bodyClass: 'admissions-page', mainHtml: getAdmissionsHtml() },
  { name: 'campus-facilities', title: 'Campus & facilities · Kinder Bubble International School', bodyClass: 'campus-facilities-page', mainHtml: getCampusHtml() },
  { name: 'contact', title: 'Contact · Kinder Bubble International School', bodyClass: 'contact-page', mainHtml: getContactHtml() },
  { name: 'event-details', title: 'Event details · Kinder Bubble International School', bodyClass: 'event-details-page', mainHtml: getEventDetailsHtml() },
  { name: 'events', title: 'Events · Kinder Bubble International School', bodyClass: 'events-page', mainHtml: getEventsHtml() },
  { name: 'faculty-staff', title: 'Our team · Kinder Bubble International School', bodyClass: 'faculty-staff-page', mainHtml: getFacultyHtml() },
  { name: 'news-details', title: 'News details · Kinder Bubble International School', bodyClass: 'news-details-page', mainHtml: getNewsDetailsHtml() },
  { name: 'news', title: 'News · Kinder Bubble International School', bodyClass: 'news-page', mainHtml: getNewsHtml() },
  { name: 'privacy', title: 'Privacy · Kinder Bubble International School', bodyClass: 'privacy-page', mainHtml: privacyHtml },
  { name: 'students-life', title: 'Student life · Kinder Bubble International School', bodyClass: 'students-life-page', mainHtml: getStudentsLifeHtml() },
  { name: 'terms-of-service', title: 'Terms of service · Kinder Bubble International School', bodyClass: 'terms-of-service-page', mainHtml: termsHtml },
  {
    name: '404',
    title: '404 · Kinder Bubble International School',
    bodyClass: 'page-404',
    mainHtml: notFoundHtml,
  },
  ...extraPages,
];
