/** Primary header navigation (desktop + mobile). */
export const mainNav = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Mission & Vision', path: '/about/mission-vision' },
      { label: 'Board of Directors', path: '/about/board-of-directors' },
      { label: 'Management', path: '/about/management' },
      { label: 'Principal', path: '/about/principal' },
      {
        label: 'Staff',
        children: [
          { label: 'Teaching Staff', path: '/about/staff/teaching' },
          { label: 'Support Staff', path: '/about/staff/support' },
        ],
      },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Admission', path: '/admissions' },
      { label: 'Curriculum', path: '/academics/curriculum' },
      { label: 'Programmes', path: '/academics/programmes' },
      { label: 'Languages', path: '/academics/languages' },
      { label: 'Academic Calendar', path: '/academics/academic-calendar' },
    ],
  },
  {
    label: 'Student Life',
    children: [
      { label: 'SRC', path: '/student-life/src' },
      { label: 'Houses', path: '/student-life/houses' },
      { label: 'Extra-Curricular', path: '/student-life/extra-curricular' },
    ],
  },
  {
    label: 'Parents',
    children: [
      { label: 'Admission Form', path: '/parents/admission-form' },
      { label: 'Plan a Visit', path: '/parents/plan-a-visit' },
      { label: 'Make Payment', path: '/parents/make-payment' },
      { label: 'Student Handbook', path: '/parents/student-handbook' },
    ],
  },
  {
    label: 'Resources',
    children: [
      { label: 'Gallery', path: '/resources/gallery' },
      { label: 'Policies', path: '/resources/policies' },
    ],
  },
  {
    label: 'News',
    children: [
      { label: 'News', path: '/news' },
      { label: 'Events', path: '/events' },
      { label: 'Partnerships', path: '/news/partnerships' },
    ],
  },
];

/** Flatten nav for route labels (path → label). */
export function flattenNavPaths(items = mainNav, out = {}) {
  for (const item of items) {
    if (item.path) out[item.path] = item.label;
    if (item.children) flattenNavPaths(item.children, out);
  }
  return out;
}
