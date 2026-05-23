import { schoolData as s } from './schoolData.js';
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

const docs = [
  {
    title: 'Application form',
    href: '/assets/docs/KBIS-Application-form.docx',
    text: 'Child details, guardian contacts, previous childcare information, language, religion, and admission criteria.',
    icon: 'bi-file-earmark-text',
  },
  {
    title: 'Medical and allergy form',
    href: '/assets/docs/Kinder-Bubble-Medical.docx',
    text: 'Medical conditions, allergies, dietary restrictions, emergency care plan, and parent agreement.',
    icon: 'bi-heart-pulse',
  },
  {
    title: 'After-school pick-up authorisation',
    href: '/assets/docs/After-School-Pick-up-Authorisation-Forms.docx',
    text: 'Authorised pick-up names, phone numbers, ID reminder, and parent confirmation process.',
    icon: 'bi-person-check',
  },
  {
    title: 'Mini brochure',
    href: '/assets/docs/mini-brochure.pdf',
    text: 'Mission, vision, bilingual studies, extra-curricular activities, feeding, trips, fees, and payment guide.',
    icon: 'bi-journal-richtext',
  },
];

const boardMembers = [
  ['Nana Asamoah Boadu', 'Sole shareholder and board member; experienced finance and enterprise leader.', '/assets/images/others/nana-asamoah-boadu.jpg'],
  ['Dr. Ernest Ofori Sarpong', 'Industrialist, entrepreneur, and board leader with broad business experience.', '/assets/images/others/dr-ernest-ofori-sarpong.jpeg'],
  ['Prof. Joseph Osafo', 'Clinical and health psychology professor, consultant, and child development advocate.', '/assets/images/others/prof-joseph-osafo.jpeg'],
  ['Rev. Alexander Asirifi', 'Minister, finance graduate, and education-supporting community leader.', '/assets/images/others/rev-alexander-asirifi.jpeg'],
  ['Ms. Yvonne Asamoah Boadu', 'Administrative manager and secretary to the board.', '/assets/images/others/ms-yvonne-asamoah-boadu.jpeg'],
];

const teachers = ['Mr. Lamine', 'Ms. Clemence', 'Ms. Sheila', 'Mr. Enoch', 'Ms. Hannah', 'Ms. Lizzy', 'Ms. Mabel', 'Ms. Yvette', 'Ms. Priscilla', 'Ms. Mercy', 'Ms. Beatrice'];

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
          <a class="kb-resource-card d-flex gap-3 text-decoration-none" href="${doc.href}">
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

const shell = ({ title, parent, parentHref, heroImage, kicker, heading, lead, body }) => `
  ${pageTitle(title, parent, parentHref)}
  <section class="section kb-designed-page">
    <div class="container" data-aos="fade-up">
      <div class="kb-page-hero row g-4 align-items-stretch">
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
        <div class="row g-4 mt-4">
          <div class="col-md-6"><div class="kb-statement-card h-100"><h3>Mission</h3><p>To offer holistic, all-rounded early childhood education and lay the foundation for knowledge seekers, independent thinkers, self-confident, well-rounded, and God-fearing character.</p></div></div>
          <div class="col-md-6"><div class="kb-statement-card h-100"><h3>Vision</h3><p>To establish a school focused on producing future innovators whose education blends character and academics for life-long outcomes.</p></div></div>
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
      body: `
        <div class="row g-4 mt-4 kb-board-grid">
          ${boardMembers
            .map(
              (member) => `
              <div class="col-md-6 col-xl-4">
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
    mainHtml: shell({
      title: 'Principal',
      parent: 'About',
      parentHref: '/about',
      heroImage: img.principal,
      kicker: 'Principal',
      heading: s.principal,
      lead: 'A visionary educator with more than 26 years of experience in education, home management, personal development, counselling, and support for children with special educational needs.',
      body: `
        <div class="kb-quote-panel mt-4">
          <p>Welcome to Kinder Bubble International School. We are a vibrant community dedicated to providing a nurturing and stimulating learning environment for our students.</p>
          <strong>${s.principal}</strong>
        </div>
        ${featureCards([
          { kicker: 'Priority', title: 'Respect and kindness', text: 'A school culture where children practise courtesy, patience, and confidence every day.', image: '/assets/images/students/girl-seated-at-class-table.jpeg', href: '/about/mission-vision' },
          { kicker: 'Learning', title: 'Academic excellence', text: 'The principal supports teachers to make foundational learning clear, active, and encouraging.', image: '/assets/images/learning/student-writing-in-notebook.jpeg', href: '/academics' },
          { kicker: 'Next step', title: 'Visit the school', text: 'Meet leadership and see classroom routines in person.', image: '/assets/images/facilities/purple-classroom.jpeg', href: '/parents/plan-a-visit' },
        ])}`,
    }),
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
        <div class="kb-name-cloud mt-4">${teachers.map((name) => `<span>${name}</span>`).join('')}</div>
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
      body: featureCards([
        { kicker: 'Core', title: 'Literacy and numeracy', text: 'Children build phonics, handwriting, everyday maths, and confidence through multi-sensory strategies.', image: '/assets/images/learning/student-writing-in-notebook.jpeg', href: '/academics/programmes' },
        { kicker: 'Inquiry', title: 'Science and discovery', text: 'Learning is practical, visual, and active so children can test ideas with their hands.', image: '/assets/images/learning/child-presenting-poster.jpeg', href: '/academics/programmes' },
        { kicker: 'Character', title: 'Confidence and kindness', text: 'The timetable supports independence, turn-taking, communication, and self-control.', image: '/assets/images/students/smiling-boy-at-desk.jpeg', href: '/students-life' },
      ]),
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
      body: featureCards([
        { kicker: 'Balance', title: 'English-French rhythm', text: 'The brochure describes a balanced bilingual model with Anglophone and Francophone teaching support.', image: '/assets/images/learning/teacher-guided-table-activity.jpeg', href: '/academics/curriculum' },
        { kicker: 'Culture', title: 'Global readiness', text: 'French opens doors to wider international communication and cultural understanding.', image: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', href: '/news/partnerships' },
        { kicker: 'Everyday', title: 'Songs, stories, routines', text: 'Language exposure is built into activities children already enjoy.', image: '/assets/images/learning/girl-presenting-in-class.jpeg', href: '/students-life' },
      ]),
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
        <div class="kb-calendar-grid mt-4">
          ${['Sep - Kwame Nkrumah Memorial Day', 'Dec - Farmers Day, Christmas and Boxing Day', 'Jan - New Year and Constitution Day', 'Mar - Independence Day', 'Apr - Easter break', 'May - Workers Day', 'Aug - Founders Day']
            .map((item) => `<div class="kb-calendar-item">${item}</div>`)
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
      body: featureCards([
        { kicker: 'Voice', title: 'Classroom feedback', text: 'Children learn to share ideas, ask questions, and listen to classmates.', image: '/assets/images/learning/girl-presenting-in-class-gallery.jpeg', href: '/students-life' },
        { kicker: 'Service', title: 'Helping routines', text: 'Class jobs and shared responsibilities build ownership.', image: '/assets/images/students/children-sitting-on-floor.jpeg', href: '/student-life/houses' },
        { kicker: 'Confidence', title: 'Presentation moments', text: 'Show-and-tell and class sharing help children practise speaking.', image: '/assets/images/learning/child-presenting-poster.jpeg', href: '/events' },
      ]),
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
      body: featureCards([
        { kicker: 'Teamwork', title: 'Games and challenges', text: 'Children practise cooperation and turn-taking through guided activities.', image: '/assets/images/extra-curricular/children-with-balloons-on-turf.jpeg', href: '/student-life/extra-curricular' },
        { kicker: 'Pride', title: 'Culture and identity', text: 'School spirit connects children to Ghanaian heritage and global citizenship.', image: '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg', href: '/news/partnerships' },
        { kicker: 'Events', title: 'Celebration days', text: 'House spirit becomes visible during major school programmes and showcases.', image: '/assets/images/extra-curricular/students-under-event-tent.jpeg', href: '/events' },
      ]),
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
      heading: 'Everything families need to start an application.',
      lead: 'The application pack asks for child details, guardian contacts, proof of address, proof of age, previous school information, language spoken at home, religion, and health notes.',
      body: `
        <div class="kb-doc-panel mt-4"><h3>Family forms</h3>${docCards()}</div>
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
            <h2>Life at KBIS, grouped by real school moments.</h2>
            <p>Click any photo to view it larger. Use Back to return to the album grid.</p>
          </div>
          <div class="kb-gallery-mosaic">
            ${[
              ['Classroom learning', 'Children learning through practical classroom routines.', '/assets/images/learning/students-in-computer-lab.jpeg'],
              ['Teacher support', 'Small groups, guided work, and patient instruction.', '/assets/images/learning/teacher-guided-table-activity.jpeg'],
              ['Student smiles', 'Portraits from everyday school life.', '/assets/images/students/three-children-smiling-uniforms.jpeg'],
              ['Outdoor play', 'Movement, friendship, and active discovery.', '/assets/images/extra-curricular/children-playing-with-ball.jpeg'],
              ['Career day', 'Creative role play and confidence-building presentations.', '/assets/images/extra-curricular/career-day-children-in-costumes.jpeg'],
              ['Educational trip', 'Learning beyond the classroom.', '/assets/images/extra-curricular/school-excursion-group-photo.jpeg'],
              ['Campus spaces', 'Bright classrooms and child-friendly facilities.', '/assets/images/facilities/purple-classroom-panorama.jpg'],
              ['School community', 'Parents, children, and teachers sharing school moments.', '/assets/images/extra-curricular/parents-and-children-at-event.jpeg'],
              ['Bilingual rhythm', 'Language, reading, songs, and guided class routines.', '/assets/images/learning/children-reading-together.jpeg'],
              ['Celebrations', 'Birthdays, showcases, and joyful classroom events.', '/assets/images/extra-curricular/birthday-party-students.jpeg'],
              ['Sports and discipline', 'Karate, movement, and controlled physical activity.', '/assets/images/extra-curricular/karate-class-on-lawn.jpeg'],
              ['Facilities', 'Safe, colorful spaces children use every day.', '/assets/images/facilities/blue-stairwell.jpeg'],
            ]
              .map(
                ([title, caption, src], index) => `
                <button class="kb-gallery-photo kb-gallery-photo-${(index % 5) + 1}" type="button" data-gallery-src="${src}" data-gallery-title="${title}" data-gallery-caption="${caption}" data-aos="zoom-in" data-aos-delay="${80 + index * 35}">
                  <img src="${src}" alt="${title}" loading="lazy">
                  <span><strong>${title}</strong><small>${caption}</small></span>
                </button>`
              )
              .join('')}
          </div>
          <div class="kb-gallery-viewer" aria-hidden="true">
            <div class="kb-gallery-viewer-panel" role="dialog" aria-modal="true" aria-label="Gallery image preview">
              <button type="button" class="kb-gallery-back"><i class="bi bi-arrow-left"></i> Back to gallery</button>
              <img src="" alt="">
              <div class="kb-gallery-viewer-copy"><h3></h3><p></p></div>
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
      body: featureCards([
        { kicker: 'Global', title: 'Global School Alliance', text: 'A network helping educators connect, collaborate on projects, and develop transformational international partnerships.', image: '/assets/images/others/global-school-alliance-certificate.png', href: '/news/partnerships' },
        { kicker: 'Sister school', title: 'Skidby Church of England Primary School', text: 'The partnership creates opportunities for cultural exchange, student interaction, and teacher collaboration.', image: '/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', href: '/news' },
        { kicker: 'Next', title: 'Upcoming partnership updates', text: 'Families will receive details as exchange activities and collaborative projects are scheduled.', image: '/assets/images/extra-curricular/students-group-at-independence-square.jpeg', href: '/events' },
      ]),
    }),
  }),
};
