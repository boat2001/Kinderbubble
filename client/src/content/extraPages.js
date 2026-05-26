import { schoolData as s } from './schoolData.js';
import { kbIcon } from './kbIcons.js';
import { getPoliciesPageHtml } from './simplePageHtml.js';

const img = {
  mission: '/assets/images/learning/students-at-classroom-desks.jpeg',
  board: '/assets/images/others/nana-asamoah-boadu.jpg',
  director: '/assets/images/students/two-students-in-formal-uniforms.jpeg',
  principal: '/assets/images/others/staff-member-at-desk.jpg',
  teaching: '/assets/images/learning/teacher-guided-table-activity.jpeg',
  support: '/assets/images/students/children-seated-blue-classroom.jpeg',
  curriculum: '/assets/images/learning/students-smiling-at-computers.jpeg',
  programmes: '/assets/images/students/three-children-smiling-uniforms.jpeg',
  languages: '/assets/images/learning/children-reading-together.jpeg',
  calendar: '/assets/images/extra-curricular/students-under-event-tent.jpeg',
  src: '/assets/images/students/girl-in-formal-uniform-under-tent.jpeg',
  houses: '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg',
  extra: '/assets/images/extra-curricular/karate-class-on-lawn.jpeg',
  form: '/assets/images/learning/student-writing-in-notebook.jpeg',
  visit: '/assets/images/facilities/purple-classroom-panorama.jpg',
  payment: '/assets/images/facilities/school-building-aerial-view.jpeg',
  handbook: '/assets/images/learning/child-presenting-poster.jpeg',
  gallery: '/assets/images/extra-curricular/school-excursion-group-photo.jpeg',
  partnership: '/assets/images/others/global-school-alliance-certificate.png',
};

const pdfLinkAttrs = (href) => (/\.pdf(\?|#|$)/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '');

const docs = [
  {
    title: 'Application form',
    href: '/assets/docs/KBIS-Application-form.docx',
    text: 'Child details, guardian contacts, previous childcare information, language, religion, and admission criteria.',
    icon: kbIcon.applicationForm,
  },
  {
    title: 'Medical and allergy form',
    href: '/assets/docs/Kinder-Bubble-Medical.docx',
    text: 'Medical conditions, allergies, dietary restrictions, emergency care plan, and parent agreement.',
    icon: kbIcon.medicalForm,
  },
  {
    title: 'After-school pick-up authorisation',
    href: '/assets/docs/After-School-Pick-up-Authorisation-Forms.docx',
    text: 'Authorised pick-up names, phone numbers, ID reminder, and parent confirmation process.',
    icon: kbIcon.pickUpAuth,
  },
  {
    title: 'Mini brochure',
    href: '/assets/docs/mini-brochure.pdf',
    text: 'Mission, vision, bilingual studies, extra-curricular activities, feeding, trips, fees, and payment guide.',
    icon: kbIcon.brochure,
  },
];

const boardMembers = [
  [
    'Nana Asamoah Boadu',
    'Sole shareholder and board member; experienced finance and enterprise leader. He supports the school with disciplined stewardship, long-term planning, and a clear commitment to building an institution that serves families with consistency and care. His guidance helps keep the school focused on responsible growth, sound investment in facilities, and dependable systems behind the classroom experience. Through his oversight, KBIS continues to strengthen the foundations that allow teachers, families, and children to thrive together.',
    '/assets/images/others/nana-asamoah-boadu.jpg',
  ],
  [
    'Dr. Ernest Ofori Sarpong',
    'Industrialist, entrepreneur, and board leader with broad business experience. His perspective strengthens governance, strategic growth, and practical decision-making as KBIS continues to expand its learning environment and community impact. He brings an enterprise-minded approach to planning, accountability, and institutional excellence. His contribution supports a school culture that values ambition, service, and the confidence to prepare young learners for a wider world.',
    '/assets/images/others/dr-ernest-ofori-sarpong.jpeg',
  ],
  [
    'Prof. Joseph Osafo',
    'Clinical and health psychology professor, consultant, and child development advocate. He brings insight into wellbeing, family support, and the emotional foundations children need to feel safe, confident, and ready to learn. His experience helps the board consider the whole child, from classroom confidence and peer relationships to resilience, care, and healthy routines. This perspective strengthens KBIS as a nurturing environment where academic progress is supported by emotional security and thoughtful pastoral care.',
    '/assets/images/others/prof-joseph-osafo.jpeg',
  ],
  [
    'Rev. Alexander Asirifi',
    'Minister, finance graduate, and education-supporting community leader. His contribution reinforces character formation, ethical leadership, and the school\'s desire to nurture children with both academic strength and sound values. He supports the board with a steady focus on service, integrity, and the kind of community life that helps children feel known and guided. His leadership encourages KBIS to keep values, responsibility, and care at the centre of every decision made for learners and families.',
    '/assets/images/others/rev-alexander-asirifi.jpeg',
  ],
  // ['Ms. Yvonne Asamoah Boadu', 'Administrative manager and secretary to the board.', '/assets/images/others/ms-yvonne-asamoah-boadu.jpeg'],
];

const teachers = [
  ['Mr. Lamine', 'Classroom lead', '/assets/images/learning/teacher-with-small-class.jpeg'],
  ['Ms. Clemence', 'Early years teacher', '/assets/images/learning/teacher-guided-table-activity.jpeg'],
  ['Ms. Sheila', 'Foundation support', '/assets/images/learning/teacher-helping-children-at-table.jpg'],
  ['Mr. Enoch', 'Primary support', '/assets/images/extra-curricular/school-excursion-students-with-teacher.jpeg'],
  ['Ms. Hannah', 'Nursery teacher', '/assets/images/extra-curricular/teacher-assisting-playground-children.jpeg'],
  ['Ms. Lizzy', 'Learning assistant', '/assets/images/others/staff-member-at-desk.jpg'],
  ['Ms. Mabel', 'Classroom support', '/assets/images/extra-curricular/teacher-with-costumed-child.jpeg'],
  ['Ms. Yvette', 'Bilingual learning', '/assets/images/learning/teacher-guided-table-activity.jpeg'],
  ['Ms. Priscilla', 'Early years support', '/assets/images/learning/teacher-helping-children-at-table.jpg'],
  ['Ms. Mercy', 'Care and routines', '/assets/images/extra-curricular/teacher-serving-career-day-food.jpeg'],
  ['Ms. Beatrice', 'Classroom assistant', '/assets/images/learning/teacher-with-small-class.jpeg'],
];

const academicTerms = [
  {
    title: 'Term one',
    period: 'September - December',
    items: [
      ['September', 'Opening routines, settling-in, baseline learning checks, and Kwame Nkrumah Memorial Day.'],
      ['October', 'Class routines, family communication, project work, and early term progress reviews.'],
      ['November', 'Core learning consolidation, themed activities, and preparation for end-of-term sharing.'],
      ['December', 'Farmers Day, end-of-term activities, Christmas break, and Boxing Day.'],
    ],
  },
  {
    title: 'Term two',
    period: 'January - April',
    items: [
      ['January', 'New Year, Constitution Day, term restart, and refreshed learning targets.'],
      ['February', 'Class projects, bilingual learning rhythm, and parent check-ins where needed.'],
      ['March', 'Independence Day, cultural learning moments, and mid-term assessment routines.'],
      ['April', 'Easter break, end-of-term review, and family updates before the next term.'],
    ],
  },
  {
    title: 'Term three',
    period: 'May - August',
    items: [
      ['May', 'Workers Day, final term planning, educational trips, and practical learning themes.'],
      ['June', 'Portfolio work, classroom showcases, sports and creative activities.'],
      ['July', 'Graduation preparation, moving-up conversations, and end-of-year celebrations.'],
      ['August', 'Founders Day, school break, admissions conversations, and preparation for September.'],
    ],
  },
];

const srcExecutives = [
  {
    role: 'SRC President',
    focus: 'Student voice',
    image: '/assets/images/students/girl-in-formal-uniform-under-tent.jpeg',
    text: 'Helps classmates practise speaking clearly, listening respectfully, and sharing age-appropriate ideas with teachers during school activities.',
  },
  {
    role: 'Vice President',
    focus: 'Team support',
    image: '/assets/images/students/three-children-smiling-uniforms.jpeg',
    text: 'Supports the president during class moments, group routines, and simple leadership duties that build confidence and responsibility.',
  },
  {
    role: 'Secretary',
    focus: 'Class reminders',
    image: '/assets/images/learning/girl-presenting-in-class-gallery.jpeg',
    text: 'Encourages careful communication, helps remember classroom responsibilities, and models organised habits for younger learners.',
  },
  {
    role: 'Organising Lead',
    focus: 'Activities',
    image: '/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg',
    text: 'Helps children participate positively in games, celebrations, assemblies, and guided school-life activities.',
  },
];

const schoolHouses = [
  {
    name: 'Red House',
    value: 'Courage',
    image: '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg',
    text: 'Learners practise confidence, healthy effort, and the courage to try again during friendly house activities.',
    accent: 'coral',
  },
  {
    name: 'Blue House',
    value: 'Wisdom',
    image: '/assets/images/students/students-in-blue-uniforms-outdoor.jpg',
    text: 'Learners build focus, curiosity, and thoughtful participation through classroom and school-wide challenges.',
    accent: 'teal',
  },
  {
    name: 'Green House',
    value: 'Service',
    image: '/assets/images/learning/children-holding-green-apple.jpeg',
    text: 'Learners are encouraged to help, share, take turns, and notice the needs of others in daily routines.',
    accent: 'green',
  },
  {
    name: 'Gold House',
    value: 'Excellence',
    image: '/assets/images/extra-curricular/students-under-event-tent.jpeg',
    text: 'Learners celebrate steady progress, good effort, and pride in doing small things well every day.',
    accent: 'gold',
  },
];

const galleryAlbums = [
  {
    title: 'Classroom Learning',
    topic: 'Daily academics',
    description: 'Children reading, presenting, writing, using computers, and learning through guided classroom routines.',
    cover: '/assets/images/learning/girl-presenting-in-class-gallery.jpeg',
    images: [
      ['/assets/images/learning/girl-presenting-in-class-gallery.jpeg', 'Student presentation', 'A learner building confidence through class presentation.'],
      ['/assets/images/learning/students-in-computer-lab.jpeg', 'Computer lab learning', 'Students exploring technology as part of everyday learning.'],
      ['/assets/images/learning/student-writing-in-notebook.jpeg', 'Writing practice', 'Focused handwriting and classwork routines.'],
      ['/assets/images/learning/children-reading-together.jpeg', 'Reading together', 'Group reading moments that support language and confidence.'],
      ['/assets/images/learning/teacher-guided-table-activity.jpeg', 'Guided table activity', 'Teacher-led small group learning.'],
      ['/assets/images/learning/child-presenting-poster.jpeg', 'Poster presentation', 'Practical work shared with classmates.'],
    ],
  },
  {
    title: 'Student Life',
    topic: 'Portraits and school day',
    description: 'Smiles, uniforms, friendships, play, and everyday moments that show the children at the heart of KBIS.',
    cover: '/assets/images/students/three-children-smiling-uniforms.jpeg',
    images: [
      ['/assets/images/students/three-children-smiling-uniforms.jpeg', 'Smiling learners', 'Children in uniform enjoying the school day.'],
      ['/assets/images/students/formal-uniform-students-kbis-01.jpeg', 'Formal uniform students', 'Learners dressed neatly for school activities.'],
      ['/assets/images/students/children-seated-in-class-gallery.jpeg', 'Classroom collaboration', 'Children seated together during a learning moment.'],
      ['/assets/images/students/smiling-child-on-turf.jpeg', 'Outdoor smile', 'A joyful moment on the school turf.'],
      ['/assets/images/students/girl-in-orange-uniform-portrait.jpeg', 'Student portrait', 'A warm portrait from daily school life.'],
      ['/assets/images/students/boy-smiling-under-tent-closeup.jpeg', 'Smiling under tent', 'A close-up school event portrait.'],
    ],
  },
  {
    title: 'Trips and National Moments',
    topic: 'Excursions',
    description: 'Educational trips, Independence Square visits, bus moments, and national learning experiences beyond campus.',
    cover: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg',
    images: [
      ['/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', 'Ghana flags at monument', 'Learners celebrating national identity during an excursion.'],
      ['/assets/images/extra-curricular/students-group-at-independence-square.jpeg', 'Independence Square group', 'Students learning through a national landmark visit.'],
      ['/assets/images/extra-curricular/students-line-at-independence-square.jpeg', 'Excursion lineup', 'Learners lined up during an educational trip.'],
      ['/assets/images/extra-curricular/school-excursion-group-photo.jpeg', 'Excursion group photo', 'A group memory from a school trip.'],
      ['/assets/images/extra-curricular/students-on-bus-smiling.jpeg', 'Bus smiles', 'Children enjoying the journey together.'],
      ['/assets/images/extra-curricular/students-with-officer-on-excursion.jpeg', 'Learning from officers', 'Students meeting community helpers during a trip.'],
    ],
  },
  {
    title: 'Celebrations and Events',
    topic: 'School programmes',
    description: 'Birthdays, performances, career day, family gatherings, and the celebrations that make school memorable.',
    cover: '/assets/images/extra-curricular/parents-and-children-at-event.jpeg',
    images: [
      ['/assets/images/extra-curricular/parents-and-children-at-event.jpeg', 'Parents and children', 'Families joining school celebrations.'],
      ['/assets/images/extra-curricular/students-on-stage-at-event.jpeg', 'Students on stage', 'Learners performing during a school programme.'],
      ['/assets/images/extra-curricular/birthday-party-students.jpeg', 'Birthday party', 'Classroom celebration with friends.'],
      ['/assets/images/extra-curricular/career-day-children-in-costumes.jpeg', 'Career day costumes', 'Children exploring future roles through dress-up and play.'],
      ['/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg', 'Costume performance', 'A lively performance moment during school events.'],
      ['/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg', 'Career day certificates', 'A group moment from career day activities.'],
    ],
  },
  {
    title: 'Play and Extra Curricular',
    topic: 'Movement and confidence',
    description: 'Outdoor play, karate, bicycles, playground discovery, and energetic moments that support whole-child growth.',
    cover: '/assets/images/extra-curricular/children-playing-with-ball.jpeg',
    images: [
      ['/assets/images/extra-curricular/children-playing-with-ball.jpeg', 'Ball play', 'Children enjoying outdoor movement and teamwork.'],
      ['/assets/images/extra-curricular/karate-class-on-lawn.jpeg', 'Karate class', 'Discipline, movement, and focus through karate.'],
      ['/assets/images/extra-curricular/children-with-bicycles-on-playground.jpeg', 'Bicycle play', 'Active play on the school playground.'],
      ['/assets/images/extra-curricular/child-riding-bike-on-playground.jpeg', 'Riding on playground', 'A child enjoying supervised outdoor play.'],
      ['/assets/images/extra-curricular/girl-in-karate-uniform.jpeg', 'Karate uniform', 'Confidence-building extra-curricular activity.'],
      ['/assets/images/extra-curricular/playground-child-on-swing.jpg', 'Playground swing', 'Free play in a safe outdoor space.'],
    ],
  },
  {
    title: 'Campus Spaces',
    topic: 'Facilities',
    description: 'Classrooms, corridors, playrooms, computer spaces, and the colourful environment children use every day.',
    cover: '/assets/images/facilities/purple-classroom-panorama.jpg',
    images: [
      ['/assets/images/facilities/purple-classroom-panorama.jpg', 'Purple classroom panorama', 'A broad view of one of the colourful classrooms.'],
      ['/assets/images/facilities/purple-classroom.jpeg', 'Purple classroom', 'A bright classroom arranged for young learners.'],
      ['/assets/images/facilities/empty-pink-classroom.jpeg', 'Pink classroom', 'A clean and welcoming classroom space.'],
      ['/assets/images/facilities/computer-room-tables.jpg', 'Computer room', 'Technology space for guided digital learning.'],
      ['/assets/images/facilities/colorful-school-corridor.jpg', 'Colourful corridor', 'A bright movement space within the school.'],
      ['/assets/images/facilities/blue-stairwell.jpeg', 'Blue stairwell', 'Safe, colourful circulation around campus.'],
    ],
  },
];

const pageTitle = (title, parent, href = '/') => `
  <div class="page-title light-background">
    <div class="container d-lg-flex justify-content-between align-items-center">
      <h1 class="mb-2 mb-lg-0">${title}</h1>
      <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li>${parent ? `<li><a href="${href}">${parent}</a></li>` : ''}<li class="current">${title}</li></ol></nav>
    </div>
  </div>`;

const docCards = () => `
  <div class="row g-3">
    ${docs
      .map(
        (doc) => `
        <div class="col-md-6">
          <a class="kb-resource-card d-flex gap-3 text-decoration-none" href="${doc.href}"${pdfLinkAttrs(doc.href)}>
            <span class="kb-resource-icon"><i class="bi ${doc.icon}"></i></span>
            <span>
              <strong>${doc.title}</strong>
              <small>${doc.text}</small>
            </span>
          </a>
        </div>`
      )
      .join('')}
  </div>`;

const featureCards = (items) => `
  <div class="row g-4 kb-feature-card-grid">
    ${items
      .map(
        (item, index) => `
        <div class="col-md-6 col-xl-4" data-aos="fade-up" data-aos-delay="${100 + index * 80}">
          <article class="kb-rich-card h-100" data-href="${item.href}">
            <img src="${item.image}" alt="" loading="lazy">
            <div class="kb-rich-card-body">
              <span>${item.kicker}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
              <a href="${item.href}">Explore <i class="bi bi-arrow-right"></i></a>
            </div>
          </article>
        </div>`
      )
      .join('')}
  </div>`;

const shell = ({ title, parent, parentHref, heroImage, kicker, heading, lead, body, heroClass = '' }) => `
  ${pageTitle(title, parent, parentHref)}
  <section class="section kb-designed-page">
    <div class="container" data-aos="fade-up">
      <div class="kb-page-hero ${heroClass} row g-4 align-items-stretch">
        <div class="col-lg-7">
          <div class="kb-page-hero-copy">
            <p class="kb-kicker">${kicker}</p>
            <h2>${heading}</h2>
            <p>${lead}</p>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="kb-page-hero-image">
            <img src="${heroImage}" alt="" loading="lazy">
          </div>
        </div>
      </div>
      ${body}
    </div>
  </section>`;

export const extraPageBuilders = {
  'about-mission-vision': () => ({
    title: 'Mission & vision - Kinder Bubble International School',
    bodyClass: 'about-mission-vision-page',
    mainHtml: shell({
      title: 'Mission & vision',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.mission,
      kicker: s.motto,
      heading: 'A caring school shaped by character, academics, and confidence.',
      lead: 'KBIS exists to prepare future innovators through a balanced blend of character formation, academic habits, bilingual learning, and joyful early childhood care.',
      body: `
        <div class="kb-mv-focus kb-mv-pair">
          <article class="kb-mv-card kb-mv-card--mission">
            <p class="kb-mv-label">Mission</p>
            <p class="kb-mv-text">To offer holistic, all-rounded early childhood education and lay the foundation for knowledge seekers, independent thinkers, self-confident, well-rounded, and God-fearing character.</p>
          </article>
          <article class="kb-mv-card kb-mv-card--vision">
            <p class="kb-mv-label">Vision</p>
            <p class="kb-mv-text">To establish a school focused on producing future innovators whose education blends character and academics for life-long outcomes.</p>
          </article>
        </div>
        ${featureCards([
          { kicker: 'Culture', title: s.slogan, text: 'A school identity rooted in heritage, leadership, and high expectations for young learners.', image: '/assets/images/students/students-in-blue-uniforms-outdoor.jpg', href: '/about' },
          { kicker: 'Learning', title: 'Character plus academics', text: 'Daily routines connect kindness, independence, creativity, numeracy, literacy, and bilingual expression.', image: '/assets/images/learning/children-handling-class-activity.jpeg', href: '/academics/curriculum' },
          { kicker: 'Family', title: 'One child at a time', text: 'Parents, teachers, and leaders work as a close circle around each child.', image: '/assets/images/extra-curricular/parents-and-children-at-event.jpeg', href: '/parents/plan-a-visit' },
        ])}`,
    }),
  }),

  'about-board-of-directors': () => ({
    title: 'Board of directors - Kinder Bubble International School',
    bodyClass: 'about-board-page',
    mainHtml: shell({
      title: 'Board of directors',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.board,
      kicker: 'Governance',
      heading: 'Experienced leaders supporting the school mission.',
      lead: 'The board provides oversight, enterprise experience, and community leadership so KBIS can grow with discipline and care.',
      heroClass: 'kb-board-hero',
      body: `
        <div class="row g-4 mt-4 kb-board-grid">
          ${boardMembers
            .map(
              (member) => `
              <div class="col-12">
                <article class="kb-profile-card h-100" data-href="/about/board-of-directors">
                  <img src="${member[2]}" alt="${member[0]}" loading="lazy">
                  <div><h3>${member[0]}</h3><p>${member[1]}</p></div>
                </article>
              </div>`
            )
            .join('')}
        </div>`,
    }),
  }),

  'about-management': () => ({
    title: 'Management - Kinder Bubble International School',
    bodyClass: 'about-management-page',
    mainHtml: shell({
      title: 'Management',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.director,
      kicker: 'Leadership',
      heading: 'Management that keeps learning, safety, and communication moving.',
      lead: 'The school director, principal, administration, and classroom leads coordinate the everyday work families feel: safe arrival, strong routines, and steady feedback.',
      body: featureCards([
        { kicker: 'Director', title: 'Raphael Asamoah Boadu', text: 'Since 2021, leadership has focused on a thriving learning environment, engaged community, and forward-looking teaching methods.', image: '/assets/images/students/two-students-in-formal-uniforms.jpeg', href: '/about/management' },
        { kicker: 'Principal', title: s.principal, text: 'A child-centred educator supporting classroom practice, parent partnership, and learner confidence.', image: '/assets/images/others/staff-member-at-desk.jpg', href: '/about/principal' },
        { kicker: 'Office', title: 'Admissions and administration', text: 'The office helps families with visits, forms, fees, medical information, and authorised pick-up records.', image: '/assets/images/others/ms-yvonne-asamoah-boadu.jpeg', href: '/contact' },
      ]),
    }),
  }),

  'about-principal': () => ({
    title: 'Principal - Kinder Bubble International School',
    bodyClass: 'about-principal-page',
    mainHtml: `
      ${pageTitle('Principal', 'About', '/about')}
      <section class="section kb-principal-profile">
        <div class="container" data-aos="fade-up">
          <div class="kb-principal-profile-shell">
            <div class="kb-principal-photo-wrap">
              <img src="${img.principal}" alt="${s.principal}" loading="lazy">
              <span><i class="bi bi-circle-fill"></i>${s.principal}</span>
            </div>
            <article class="kb-principal-panel" aria-labelledby="principal-profile-heading">
              <p class="kb-principal-badge"><i class="bi bi-circle-fill"></i> Principal's profile</p>
              <h2 id="principal-profile-heading">Ms. Delphina Naa Lomoley <span>Lomotey</span></h2>
              <p class="kb-principal-intro">A visionary educator with more than 26 years of experience in education, home management, personal development, counselling, and support for children with special educational needs.</p>
              <div class="kb-principal-credentials">
                <p><i class="bi bi-check-lg"></i><strong>Child-centred school leadership</strong></p>
                <p><i class="bi bi-check-lg"></i><strong>Parent partnership and learner confidence</strong></p>
                <p><i class="bi bi-check-lg"></i><strong>Special educational needs support</strong></p>
              </div>
              <p class="kb-principal-signature">Ms. Delphina Naa Lomoley Lomotey</p>
            </article>
          </div>
          <article class="kb-principal-detail-card" data-aos="fade-up" data-aos-delay="120">
            <span class="kb-principal-dropcap">A</span>
            <p>s Principal of Kinder Bubble International School, <strong>${s.principal}</strong> brings a gentle, steady presence to the daily life of the school. She helps children feel known, safe, and confident while guiding teachers to make learning active, caring, and purposeful. Families value her warm communication, her attention to each child&apos;s progress, and her commitment to a school culture where kindness, discipline, creativity, and strong foundations grow together.</p>
            <span class="kb-principal-detail-icon"><i class="bi bi-mortarboard-fill"></i></span>
          </article>
        </div>
      </section>`,
  }),

  'about-staff-teaching': () => ({
    title: 'Teaching staff - Kinder Bubble International School',
    bodyClass: 'about-staff-teaching-page',
    mainHtml: shell({
      title: 'Teaching staff',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.teaching,
      kicker: 'Teachers',
      heading: 'Professional teachers who love teaching children daily.',
      lead: 'Our classroom team supports bilingual learning, early literacy, numeracy, inquiry, creativity, and calm transitions through the day.',
      body: `
        <div class="kb-teacher-grid mt-4">
          ${teachers
            .map(
              ([name, role, image], index) => `
              <article class="kb-teacher-card" data-aos="fade-up" data-aos-delay="${80 + index * 35}">
                <img src="${image}" alt="${name}" loading="lazy">
                <div>
                  <span>${role}</span>
                  <h3>${name}</h3>
                  <p>Part of the KBIS classroom team supporting steady routines, active learning, and warm care for children each day.</p>
                </div>
              </article>`
            )
            .join('')}
        </div>
        ${featureCards([
          { kicker: 'Classroom', title: 'Small group teaching', text: 'Whole class, ability groups, mixed ability groups, and paired work are used during the week.', image: '/assets/images/learning/teacher-with-small-class.jpeg', href: '/academics/curriculum' },
          { kicker: 'Languages', title: 'English and French', text: 'Daily lessons and language exposure are tailored to each child according to age and ability.', image: '/assets/images/learning/children-reading-together.jpeg', href: '/academics/languages' },
          { kicker: 'Family', title: 'Continuity of care', text: 'Permanent educators help children know the adults around them and feel settled.', image: '/assets/images/students/children-at-classroom-table.jpg', href: '/contact' },
        ])}`,
    }),
  }),

  'about-staff-support': () => ({
    title: 'Support staff - Kinder Bubble International School',
    bodyClass: 'about-staff-support-page',
    mainHtml: shell({
      title: 'Support staff',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.support,
      kicker: 'Care and operations',
      heading: 'The practical team behind safe, smooth school days.',
      lead: 'Support staff help with reception, health routines, meals, cleaning, authorised pick-up, and family communication.',
      body: featureCards([
        { kicker: 'Health', title: 'Medical awareness', text: 'Allergies, dietary restrictions, and emergency plans are documented and shared with relevant staff.', image: '/assets/images/learning/children-holding-green-apple.jpeg', href: '/parents/admission-form' },
        { kicker: 'Pick-up', title: 'Authorised collection', text: 'Families can complete pick-up authorisation so the school knows exactly who may collect a child.', image: '/assets/images/extra-curricular/students-lined-up-outdoors.jpeg', href: '/parents/student-handbook' },
        { kicker: 'Meals', title: 'Feeding routines', text: 'Breakfast, lunch, snacks, and family restrictions are handled with careful hygiene routines.', image: '/assets/images/extra-curricular/staff-serving-food-at-event.jpeg', href: '/resources/policies' },
      ]),
    }),
  }),

  'academics-curriculum': () => ({
    title: 'Curriculum - Kinder Bubble International School',
    bodyClass: 'academics-curriculum-page',
    mainHtml: shell({
      title: 'Curriculum',
      parent: 'Academics',
      parentHref: '/academics',
      heroImage: img.curriculum,
      kicker: 'Cambridge + bilingual',
      heading: 'Structured learning with equal respect for language, character, and creativity.',
      lead: 'KBIS follows the Cambridge International Curriculum and bilingual English-French studies, with teaching planned for children from early years through primary.',
      body: `
        <section class="kb-learning-detail kb-learning-detail--curriculum" data-aos="fade-up" data-aos-delay="120">
          <div>
            <p class="kb-kicker">Curriculum details</p>
            <h3>What learning looks like at KBIS</h3>
            <p>Children learn through a balanced rhythm of direct teaching, guided practice, discovery, play, and reflection. The Cambridge-aligned approach gives teachers a clear structure, while classroom routines keep learning warm, practical, and age-right.</p>
          </div>
          <div class="kb-learning-detail-grid">
            <article><i class="bi bi-pencil-square"></i><strong>Foundational skills</strong><span>Phonics, handwriting, reading, early writing, everyday maths, and problem solving are practised in small, manageable steps.</span></article>
            <article><i class="bi bi-lightbulb"></i><strong>Active discovery</strong><span>Science, creativity, technology, projects, and outdoor learning help children test ideas and explain what they notice.</span></article>
            <article><i class="bi bi-heart"></i><strong>Character habits</strong><span>Confidence, kindness, independence, courtesy, and responsibility are built into the school day, not treated as extras.</span></article>
          </div>
        </section>
        ${featureCards([
          { kicker: 'Core', title: 'Literacy and numeracy', text: 'Children build phonics, handwriting, everyday maths, and confidence through multi-sensory strategies.', image: '/assets/images/learning/student-writing-in-notebook.jpeg', href: '/academics/programmes' },
          { kicker: 'Inquiry', title: 'Science and discovery', text: 'Learning is practical, visual, and active so children can test ideas with their hands.', image: '/assets/images/learning/child-presenting-poster.jpeg', href: '/academics/programmes' },
          { kicker: 'Character', title: 'Confidence and kindness', text: 'The timetable supports independence, turn-taking, communication, and self-control.', image: '/assets/images/students/smiling-boy-at-desk.jpeg', href: '/students-life' },
        ])}`,
    }),
  }),

  'academics-programmes': () => ({
    title: 'Programmes - Kinder Bubble International School',
    bodyClass: 'academics-programmes-page',
    mainHtml: shell({
      title: 'Programmes',
      parent: 'Academics',
      parentHref: '/academics',
      heroImage: img.programmes,
      kicker: '6 months to 10 years',
      heading: 'One campus pathway from creche through primary.',
      lead: 'Families can keep a consistent school community while children move through age-right stages of care, play, and academics.',
      body: `
        <div class="row g-3 mt-4 kb-programme-strip">
          ${[
            ['Creche', '6 mo - 2 yrs'],
            ['Nursery', '2 - 3 yrs'],
            ['Kindergarten', '3 - 4 yrs'],
            ['Reception', '4 yrs'],
            ['Primary', '5 - 10 yrs'],
          ]
            .map(
              ([name, age], index) => `<div class="col-md-6 col-xl"><a href="/admissions" class="kb-programme-pill"><span>0${index + 1}</span><strong>${name}</strong><small>${age}</small></a></div>`
            )
            .join('')}
        </div>
        ${featureCards([
          { kicker: 'Youngest', title: 'Creche and nursery', text: 'Warm routines, sensory-rich play, early communication, and strong family partnership.', image: '/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg', href: '/admissions' },
          { kicker: 'Foundation', title: 'Kindergarten and reception', text: 'Structured play, social confidence, early literacy, numeracy, and independence.', image: '/assets/images/students/girl-in-orange-uniform-kbis-03.jpeg', href: '/admissions' },
          { kicker: 'Primary', title: 'Primary years', text: 'Literacy depth, numeracy fluency, projects, bilingual confidence, and pastoral support.', image: '/assets/images/learning/students-in-computer-lab.jpeg', href: '/admissions' },
        ])}`,
    }),
  }),

  'academics-languages': () => ({
    title: 'Languages - Kinder Bubble International School',
    bodyClass: 'academics-languages-page',
    mainHtml: shell({
      title: 'Languages',
      parent: 'Academics',
      parentHref: '/academics',
      heroImage: img.languages,
      kicker: 'English + French',
      heading: 'Bilingual education starts naturally when children are young.',
      lead: 'French is introduced as a second language because early childhood and primary years are powerful windows for language acquisition.',
      body: `
        <section class="kb-learning-detail kb-learning-detail--languages" data-aos="fade-up" data-aos-delay="120">
          <div>
            <p class="kb-kicker">Language details</p>
            <h3>How English and French become part of the day</h3>
            <p>Language learning is kept natural and confidence-building. Children hear, repeat, sing, respond, label objects, tell simple stories, and use new words during familiar classroom routines before moving into more structured reading and writing.</p>
          </div>
          <div class="kb-learning-detail-grid">
            <article><i class="bi bi-chat-dots"></i><strong>Everyday speaking</strong><span>Greetings, classroom instructions, songs, stories, and short conversations help children use language without fear.</span></article>
            <article><i class="bi bi-book"></i><strong>Reading readiness</strong><span>Sounds, vocabulary, picture books, rhymes, and early comprehension support both English confidence and French exposure.</span></article>
            <article><i class="bi bi-globe2"></i><strong>Wider world</strong><span>Bilingual exposure helps learners appreciate culture, communicate broadly, and prepare for future international opportunities.</span></article>
          </div>
        </section>
        ${featureCards([
          { kicker: 'Balance', title: 'English-French rhythm', text: 'The brochure describes a balanced bilingual model with Anglophone and Francophone teaching support.', image: '/assets/images/learning/teacher-guided-table-activity.jpeg', href: '/academics/curriculum' },
          { kicker: 'Culture', title: 'Global readiness', text: 'French opens doors to wider international communication and cultural understanding.', image: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', href: '/news/partnerships' },
          { kicker: 'Everyday', title: 'Songs, stories, routines', text: 'Language exposure is built into activities children already enjoy.', image: '/assets/images/learning/girl-presenting-in-class.jpeg', href: '/students-life' },
        ])}`,
    }),
  }),

  'academics-academic-calendar': () => ({
    title: 'Academic calendar - Kinder Bubble International School',
    bodyClass: 'academics-calendar-page',
    mainHtml: shell({
      title: 'Academic calendar',
      parent: 'Academics',
      parentHref: '/academics',
      heroImage: img.calendar,
      kicker: 'Planning',
      heading: 'Term rhythm, public holidays, school events, and family updates.',
      lead: 'The school calendar includes term work, public holidays, educational trips, parent meetings, celebrations of learning, and open campus moments.',
      body: `
        <div class="kb-term-timeline mt-4">
          ${academicTerms
            .map(
              (term, termIndex) => `
              <section class="kb-term-panel" data-aos="fade-up" data-aos-delay="${100 + termIndex * 80}">
                <div class="kb-term-head">
                  <span>0${termIndex + 1}</span>
                  <div>
                    <h3>${term.title}</h3>
                    <p>${term.period}</p>
                  </div>
                </div>
                <div class="kb-term-items">
                  ${term.items
                    .map(
                      ([month, text]) => `
                      <article class="kb-term-item">
                        <strong>${month}</strong>
                        <p>${text}</p>
                      </article>`
                    )
                    .join('')}
                </div>
              </section>`
            )
            .join('')}
        </div>
        ${featureCards([
          { kicker: 'Admissions', title: 'Rolling entry', text: 'Families can ask about available places throughout the year.', image: '/assets/images/students/smiling-boy-in-class-hero.jpeg', href: '/admissions' },
          { kicker: 'Trips', title: 'Educational visits', text: 'Trips are organised around themes and lesson plans for each academic term.', image: '/assets/images/extra-curricular/school-excursion-students-walking.jpeg', href: '/events' },
          { kicker: 'Events', title: 'Grand programmes', text: 'Annual celebrations, graduations, anniversaries, and showcases are planned with family communication.', image: '/assets/images/extra-curricular/students-on-stage-at-event.jpeg', href: '/events' },
        ])}`,
    }),
  }),

  'student-life-src': () => ({
    title: 'SRC - Kinder Bubble International School',
    bodyClass: 'student-life-src-page',
    mainHtml: shell({
      title: 'SRC',
      parent: 'Student life',
      parentHref: '/students-life',
      heroImage: img.src,
      kicker: 'Student voice',
      heading: 'Age-appropriate leadership, responsibility, and confidence.',
      lead: 'For young learners, leadership starts with small habits: helping, listening, speaking kindly, and taking turns.',
      body: `
        <section class="kb-src-executives mt-4" aria-label="SRC executive profiles">
          ${srcExecutives
            .map(
              (leader, index) => `
              <article class="kb-src-card" data-aos="fade-up" data-aos-delay="${80 + index * 45}">
                <div class="kb-src-photo">
                  <img src="${leader.image}" alt="${leader.role}" loading="lazy">
                </div>
                <div class="kb-src-copy">
                  <span>${leader.focus}</span>
                  <h3>${leader.role}</h3>
                  <p>${leader.text}</p>
                </div>
              </article>`
            )
            .join('')}
        </section>
        <section class="kb-src-detail-panel" data-aos="fade-up">
          <div class="kb-src-detail-copy">
            <p class="kb-kicker">What the SRC does</p>
            <h3>Small leadership roles that build confidence, service, and school pride.</h3>
            <p>The SRC gives children a guided way to practise responsibility in everyday school life. At KBIS, student leadership is age-appropriate: learners help share ideas, support class routines, welcome participation, and model respectful behaviour during assemblies, events, and classroom activities.</p>
            <p>These roles benefit the school by strengthening communication between learners and teachers, encouraging positive habits, and making children feel that their voices matter. They also benefit students by building confidence, empathy, teamwork, public speaking, and the habit of serving others with kindness.</p>
          </div>
          <div class="kb-src-detail-points">
            <div><span>01</span><strong>Voice</strong><small>Children practise sharing ideas respectfully.</small></div>
            <div><span>02</span><strong>Service</strong><small>Leaders help with routines, events, and class support.</small></div>
            <div><span>03</span><strong>Confidence</strong><small>Simple responsibilities help learners speak and participate.</small></div>
          </div>
        </section>
        ${featureCards([
          { kicker: 'Voice', title: 'Classroom feedback', text: 'Children learn to share ideas, ask questions, and listen to classmates.', image: '/assets/images/learning/girl-presenting-in-class-gallery.jpeg', href: '/students-life' },
          { kicker: 'Service', title: 'Helping routines', text: 'Class jobs and shared responsibilities build ownership.', image: '/assets/images/students/children-sitting-on-floor.jpeg', href: '/student-life/houses' },
          { kicker: 'Confidence', title: 'Presentation moments', text: 'Show-and-tell and class sharing help children practise speaking.', image: '/assets/images/learning/child-presenting-poster.jpeg', href: '/events' },
        ])}`,
    }),
  }),

  'student-life-houses': () => ({
    title: 'Houses - Kinder Bubble International School',
    bodyClass: 'student-life-houses-page',
    mainHtml: shell({
      title: 'Houses',
      parent: 'Student life',
      parentHref: '/students-life',
      heroImage: img.houses,
      kicker: 'Belonging',
      heading: 'Friendly house spirit that builds teamwork and pride.',
      lead: 'House activities give children a sense of identity, encouragement, and shared celebration without overwhelming them.',
      body: `
        <section class="kb-house-board mt-4" aria-label="School houses">
          ${schoolHouses
            .map(
              (house, index) => `
              <article class="kb-house-card kb-house-card--${house.accent}" data-aos="fade-up" data-aos-delay="${80 + index * 45}">
                <img src="${house.image}" alt="${house.name}" loading="lazy">
                <div class="kb-house-band">
                  <span>${house.value}</span>
                  <h3>${house.name}</h3>
                  <p>${house.text}</p>
                </div>
              </article>`
            )
            .join('')}
        </section>
        ${featureCards([
          { kicker: 'Teamwork', title: 'Games and challenges', text: 'Children practise cooperation and turn-taking through guided activities.', image: '/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg', href: '/student-life/extra-curricular' },
          { kicker: 'Pride', title: 'Culture and identity', text: 'School spirit connects children to Ghanaian heritage and global citizenship.', image: '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg', href: '/news/partnerships' },
          { kicker: 'Events', title: 'Celebration days', text: 'House spirit becomes visible during major school programmes and showcases.', image: '/assets/images/extra-curricular/students-under-event-tent.jpeg', href: '/events' },
        ])}`,
    }),
  }),

  'student-life-extra-curricular': () => ({
    title: 'Extra curricula - Kinder Bubble International School',
    bodyClass: 'student-life-extra-page',
    mainHtml: shell({
      title: 'Extra curricula',
      parent: 'Student life',
      parentHref: '/students-life',
      heroImage: img.extra,
      kicker: 'Beyond class',
      heading: 'Activities that make learning physical, social, creative, and memorable.',
      lead: 'The school brochure lists taekwondo, ballet, football, cadet, and arts club as extra-curricular options, with sign-up details confirmed by administration.',
      body: featureCards([
        { kicker: 'Sport', title: 'Taekwondo and football', text: 'Movement activities build strength, discipline, coordination, and confidence.', image: '/assets/images/extra-curricular/coach-assisting-karate-child.jpeg', href: '/parents/plan-a-visit' },
        { kicker: 'Arts', title: 'Ballet and arts club', text: 'Creative activities help children express themselves and enjoy performance.', image: '/assets/images/extra-curricular/career-day-chef-costumes-group.jpeg', href: '/resources/gallery' },
        { kicker: 'Trips', title: 'Educational outings', text: 'Trips to places like museums, farms, and zoos connect themes to real-world experience.', image: '/assets/images/extra-curricular/school-excursion-group-photo.jpeg', href: '/events' },
      ]),
    }),
  }),

  'parents-admission-form': () => ({
    title: 'Admission form - Kinder Bubble International School',
    bodyClass: 'parents-admission-form-page',
    mainHtml: shell({
      title: 'Admission form',
      parent: 'Parents',
      parentHref: '/admissions',
      heroImage: img.form,
      kicker: 'Apply',
      heading: 'Everything parents need to start an application.',
      lead: 'The application pack asks for child details, guardian contacts, proof of address, proof of age, previous school information, language spoken at home, religion, and health notes.',
      body: `
        <div class="kb-doc-panel mt-4"><h3>Academic forms</h3>${docCards()}</div>
        ${featureCards([
          { kicker: 'Step 1', title: 'Book a tour', text: 'Prospective parents meet admissions and walk the school before completing the process.', image: '/assets/images/facilities/purple-classroom.jpeg', href: '/parents/plan-a-visit' },
          { kicker: 'Step 2', title: 'Submit documents', text: 'Proof of address, birth certificate or passport, medical information, and emergency contacts help us prepare.', image: '/assets/images/learning/student-writing-in-notebook.jpeg', href: '/admissions' },
          { kicker: 'Step 3', title: 'Confirm placement', text: 'Once a place is offered, families complete records and agree start details with the office.', image: '/assets/images/students/smiling-child-on-turf.jpeg', href: '/contact' },
        ])}`,
    }),
  }),

  'parents-plan-a-visit': () => ({
    title: 'Plan a visit - Kinder Bubble International School',
    bodyClass: 'parents-plan-a-visit-page',
    mainHtml: shell({
      title: 'Plan a visit',
      parent: 'Parents',
      parentHref: '/admissions',
      heroImage: img.visit,
      kicker: 'Campus tour',
      heading: 'See the classrooms, playgrounds, and routines in person.',
      lead: `Visit ${s.addressLine1}, ${s.addressLine2}. Tours help families understand placement, daily schedules, bilingual learning, safety routines, and fees.`,
      body: featureCards([
        { kicker: 'See', title: 'Learning spaces', text: 'Walk bright classrooms, early years rooms, computer spaces, and shared areas.', image: '/assets/images/facilities/empty-pink-classroom.jpeg', href: '/campus-facilities' },
        { kicker: 'Ask', title: 'Admissions questions', text: 'Discuss programme fit, paperwork, fees, and start windows with the office.', image: '/assets/images/others/staff-member-at-desk.jpg', href: '/contact' },
        { kicker: 'Feel', title: 'School rhythm', text: 'See how children move between learning, meals, play, and calm transitions.', image: '/assets/images/students/children-seated-in-class.jpeg', href: '/students-life' },
      ]),
    }),
  }),

  'parents-make-payment': () => ({
    title: 'Make payment - Kinder Bubble International School',
    bodyClass: 'parents-make-payment-page',
    mainHtml: shell({
      title: 'Make payment',
      parent: 'Parents',
      parentHref: '/admissions',
      heroImage: img.payment,
      kicker: 'Fees',
      heading: 'Payment guidance for school fees and related costs.',
      lead: 'The mini brochure notes that fees include tuition, stationery, and lunch, with breakfast and snacks available upon request. Families should confirm current fees with administration before payment.',
      body: `
        <div class="kb-payment-panel mt-4">
          <div><strong>Mobile money</strong><span>Short code *772*30# on all networks. Merchant code: 605001.</span></div>
          <div><strong>Bank</strong><span>Kinder Bubble International School Limited, Prudential Bank Ltd, Bawleshie Branch, Account Number 0342000710013.</span></div>
        </div>
        <p class="small text-muted mt-3">For safety, always confirm current payment details directly with the school office before sending funds.</p>
        ${docCards()}`,
    }),
  }),

  'parents-student-handbook': () => ({
    title: 'Student handbook - Kinder Bubble International School',
    bodyClass: 'parents-student-handbook-page',
    mainHtml: shell({
      title: 'Student handbook',
      parent: 'Parents',
      parentHref: '/admissions',
      heroImage: img.handbook,
      kicker: 'Family guide',
      heading: 'Daily routines, attendance, wellbeing, and parent partnership.',
      lead: 'The handbook welcomes students into a culture of academic excellence and gives families clear expectations for attendance, absence notes, early release, communication, and responsibilities.',
      body: featureCards([
        { kicker: 'Attendance', title: 'Be present and on time', text: 'Parents report absences before 8:00 a.m.; tardiness affects learning for the whole class.', image: '/assets/images/students/students-in-red-and-blue-uniforms.jpeg', href: '/resources/policies' },
        { kicker: 'Daily rhythm', title: 'Circle, choice, story, snack, play', text: 'The day balances group time, child choice, cleanup, stories, snack, quiet time, and physical activity.', image: '/assets/images/learning/floor-mat-group-learning.jpeg', href: '/students-life' },
        { kicker: 'Safety', title: 'Medical and pick-up records', text: 'Families should keep allergies, dietary restrictions, emergency contacts, and authorised pick-up lists current.', image: '/assets/images/extra-curricular/students-lined-up-outdoors.jpeg', href: '/parents/admission-form' },
      ]),
    }),
  }),

  'resources-gallery': () => ({
    title: 'Gallery - Kinder Bubble International School',
    bodyClass: 'resources-gallery-page',
    mainHtml: `
      ${pageTitle('Gallery', 'Resources', '/resources/gallery')}
      <section class="section kb-album-gallery">
        <div class="container" data-aos="fade-up">
          <div class="kb-gallery-head">
            <p class="kb-kicker">Albums</p>
            <h2>Life at KBIS, grouped by themes and school moments.</h2>
          </div>
          <div class="kb-gallery-albums">
            ${galleryAlbums
              .map(
                (album, index) => `
                <button class="kb-gallery-album" type="button" data-album-index="${index}" data-aos="zoom-in" data-aos-delay="${80 + index * 35}">
                  <span class="kb-gallery-album-cover">
                    <span class="kb-gallery-album-stack" aria-hidden="true">
                      <img src="${album.images[1]?.[0] || album.cover}" alt="" loading="lazy">
                      <img src="${album.images[2]?.[0] || album.cover}" alt="" loading="lazy">
                    </span>
                    <img src="${album.cover}" alt="${album.title}" loading="lazy">
                    <small>${album.images.length} photos</small>
                  </span>
                  <span class="kb-gallery-album-copy">
                    <small>${album.topic}</small>
                    <strong>${album.title}</strong>
                    <em>${album.description}</em>
                  </span>
                  <span class="kb-gallery-album-slides" aria-hidden="true">
                    ${album.images
                      .map(
                        ([src, title, caption]) => `
                        <span data-gallery-src="${src}" data-gallery-title="${title}" data-gallery-caption="${caption}"></span>`
                      )
                      .join('')}
                  </span>
                </button>`
              )
              .join('')}
          </div>
          <div class="kb-gallery-viewer" aria-hidden="true">
            <div class="kb-gallery-viewer-panel" role="dialog" aria-modal="true" aria-label="Gallery album viewer">
              <div class="kb-gallery-toolbar">
                <button type="button" class="kb-gallery-back" aria-label="Close gallery"><i class="bi bi-x-lg"></i></button>
                <div>
                  <strong></strong>
                  <span></span>
                </div>
              </div>
              <button type="button" class="kb-gallery-nav kb-gallery-prev" aria-label="Previous photo"><i class="bi bi-chevron-left"></i></button>
              <figure class="kb-gallery-stage">
                <div class="kb-gallery-frame">
                  <img src="" alt="">
                  <figcaption class="kb-gallery-caption"><h3></h3><p></p></figcaption>
                </div>
              </figure>
              <button type="button" class="kb-gallery-nav kb-gallery-next" aria-label="Next photo"><i class="bi bi-chevron-right"></i></button>
              <div class="kb-gallery-thumbrail" aria-label="Album photos"></div>
            </div>
          </div>
        </div>
      </section>`,
  }),

  'resources-policies': () => ({
    title: 'Policies - Kinder Bubble International School',
    bodyClass: 'resources-policies-page',
    mainHtml: getPoliciesPageHtml(),
  }),

  'news-partnerships': () => ({
    title: 'Partnerships - Kinder Bubble International School',
    bodyClass: 'news-partnerships-page',
    mainHtml: shell({
      title: 'Partnerships',
      parent: 'News',
      parentHref: '/news',
      heroImage: img.partnership,
      kicker: 'Global School Alliance',
      heading: 'International connections that widen children\'s view of the world.',
      lead: 'Through the Global School Alliance, KBIS has established a sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.',
      body: `
        <section class="kb-partnership-detail" data-aos="fade-up" data-aos-delay="120">
          <div class="kb-partnership-detail-copy">
            <p class="kb-kicker">Partnership details</p>
            <h3>A bridge between classrooms in Ghana and the United Kingdom.</h3>
            <p>The Global School Alliance partnership gives KBIS a meaningful way to connect pupils and teachers with another school community beyond Ghana. Through Skidby Church of England Primary School in Yorkshire, children can begin to see that learning, friendship, culture, and curiosity reach far beyond their own classroom.</p>
            <p>For teachers, the partnership creates room for professional exchange, shared classroom ideas, project inspiration, and conversations about how children learn in different settings. For pupils, it supports confidence, global awareness, communication, and respect for other cultures.</p>
          </div>
          <div class="kb-partnership-points">
            <article><i class="bi bi-globe2"></i><strong>Global awareness</strong><span>Children learn that their ideas, stories, and school experiences can connect with learners in another country.</span></article>
            <article><i class="bi bi-people"></i><strong>Teacher collaboration</strong><span>Educators can share classroom practice, project themes, and professional reflections across the sister-school link.</span></article>
            <article><i class="bi bi-chat-heart"></i><strong>Cultural exchange</strong><span>Activities can include shared messages, learning showcases, celebrations, and age-appropriate collaborative projects.</span></article>
          </div>
        </section>
        ${featureCards([
          { kicker: 'Global', title: 'Global School Alliance', text: 'A network helping educators connect, collaborate on projects, and develop transformational international partnerships.', image: '/assets/images/others/global-school-alliance-certificate.png', href: '/news/partnerships' },
          { kicker: 'Sister school', title: 'Skidby Church of England Primary School', text: 'The partnership creates opportunities for cultural exchange, student interaction, and teacher collaboration.', image: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', href: '/news' },
          { kicker: 'Next', title: 'Upcoming partnership updates', text: 'Families will receive details as exchange activities and collaborative projects are scheduled.', image: '/assets/images/extra-curricular/students-group-at-independence-square.jpeg', href: '/events' },
        ])}`,
    }),
  }),
};
