import { assertUniqueSlugs } from './validate.js';

/**
 * NEWS CONTENT
 * ============
 * Each entry below becomes its own article at  /news-details/<slug>  and a card on
 * the /news list. To add an article, copy the template and drop it at the TOP of
 * the array (the list shows newest first, in array order).
 *
 * Template — copy from here:
 *
 *   {
 *     slug: 'unique-name-with-dashes',   // becomes the URL; must be unique
 *     day: '15', month: 'Jul',           // date badge on the news card
 *     title: 'Article title',
 *     category: 'School news',            // first chip
 *     type: 'Notices',                    // second chip
 *     excerpt: 'One line shown on the news list card.',
 *     image: '/assets/images/.../photo.jpeg',   // file under client/public/assets/images
 *     link: '/admissions',                // optional related page used by in-article links
 *     linkLabel: 'admissions page',       // label for that link (used in body text you write)
 *     views: '0',
 *     sections: [                         // article body + "On this page" table of contents
 *       { id: 'overview', navLabel: 'Overview', paragraphs: [
 *         'First paragraph (auto-styled as the lead).',
 *         'Second paragraph.',
 *       ] },
 *       { id: 'details', navLabel: 'Details', heading: 'A heading', paragraphs: [
 *         'Body paragraph. Inline links are fine: <a href="/contact">contact us</a>.',
 *       ] },
 *     ],
 *   },
 *
 * Notes:
 *   - `id` must be unique WITHIN a single article (it is the anchor target).
 *   - `heading` is optional; omit it on the first section (as the examples do).
 */
export const newsData = assertUniqueSlugs([
  {
    slug: 'global-school-alliance-partnership',
    day: '12', month: 'Jun',
    title: 'Partnership with Global School Alliance',
    category: 'School news', type: 'Events',
    excerpt: 'KBIS has benefited from GSA support and a sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.',
    image: '/assets/images/extra-curricular/students-group-at-independence-square.jpeg',
    link: '/news/partnerships', linkLabel: 'partnerships page',
    views: '214',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'KBIS has benefited from Global School Alliance support and a new sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.',
        'This partnership opens the door to cultural exchange, shared projects, and teacher collaboration that widen children\'s view of the world.',
      ] },
      { id: 'partnership', navLabel: 'The partnership', heading: 'What the partnership means', paragraphs: [
        'Through the Global School Alliance, learners and teachers can connect with another school community beyond Ghana, sharing ideas, stories, and curiosity across borders.',
        'For pupils it supports global awareness and communication; for teachers it creates room for professional exchange and project inspiration.',
      ] },
      { id: 'next', navLabel: 'Next steps', heading: 'What happens next', paragraphs: [
        'Families will receive details as exchange activities and collaborative projects are scheduled. Learn more on our <a href="/news/partnerships">partnerships page</a>.',
      ] },
    ],
  },
  {
    slug: 'bilingual-curriculum-focus',
    day: '06', month: 'May',
    title: 'Bilingual curriculum focus',
    category: 'Academics', type: 'Learning',
    excerpt: 'KBIS follows the Cambridge International Curriculum with English-French bilingual exposure and age-right classroom routines.',
    image: '/assets/images/learning/children-reading-together.jpeg',
    link: '/academics/languages', linkLabel: 'languages page',
    views: '186',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'KBIS follows the Cambridge International Curriculum with English–French bilingual exposure and age-right classroom routines.',
        'Language learning is kept natural and confidence-building, woven into the everyday rhythm of the school day.',
      ] },
      { id: 'approach', navLabel: 'The approach', heading: 'How bilingual learning works', paragraphs: [
        'Children hear, repeat, sing, respond, and use new words during familiar routines before moving into structured reading and writing.',
        'French is introduced early because the childhood years are a powerful window for language acquisition.',
      ] },
      { id: 'next', navLabel: 'Explore', heading: 'Explore the approach', paragraphs: [
        'See how English and French become part of the day on our <a href="/academics/languages">languages page</a>.',
      ] },
    ],
  },
  {
    slug: 'health-allergy-pickup-forms',
    day: '29', month: 'Apr',
    title: 'Health, allergy, and pick-up forms',
    category: 'Parents', type: 'Notices',
    excerpt: 'Families can access application, medical, and authorised pick-up forms from the parents and policies pages.',
    image: '/assets/images/learning/children-holding-green-apple.jpeg',
    link: '/parents/admission-form', linkLabel: 'admission form page',
    views: '152',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'Families can now access application, medical, and authorised pick-up forms from the parents and policies pages.',
        'Keeping these records current helps the school care for every child safely and respond quickly when needed.',
      ] },
      { id: 'forms', navLabel: 'The forms', heading: 'Which forms to complete', paragraphs: [
        'The application pack covers child details and guardian contacts, while the medical form records allergies, dietary needs, and emergency care plans.',
        'Authorised pick-up forms let the school know exactly who may collect a child at the end of the day.',
      ] },
      { id: 'next', navLabel: 'Get the forms', heading: 'Get the forms', paragraphs: [
        'Download and complete the forms from the <a href="/parents/admission-form">admission form page</a>.',
      ] },
    ],
  },
  {
    slug: 'educational-trips-by-term-theme',
    day: '18', month: 'Mar',
    title: 'Educational trips by term theme',
    category: 'Events', type: 'Campus',
    excerpt: 'Trips are planned around term themes and lesson plans, with parent communication and safety planning before departure.',
    image: '/assets/images/extra-curricular/school-excursion-students-walking.jpeg',
    link: '/events', linkLabel: 'events page',
    views: '128',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'Educational trips are planned around term themes and lesson plans, with parent communication and safety planning before every departure.',
        'Trips connect classroom learning to real places, giving children memorable, hands-on experiences.',
      ] },
      { id: 'planning', navLabel: 'Planning', heading: 'How trips are planned', paragraphs: [
        'Each outing is tied to a lesson theme so children can connect what they study with what they see.',
        'Safety arrangements and parent updates are completed before the school travels.',
      ] },
      { id: 'next', navLabel: 'See past trips', heading: 'See past trips', paragraphs: [
        'Browse highlights and event stories on our <a href="/events">events page</a>.',
      ] },
    ],
  },
  {
    slug: 'classroom-routines-that-help-children-settle',
    day: '14', month: 'Feb',
    title: 'Classroom routines that help children settle',
    category: 'School news', type: 'Wellbeing',
    excerpt: 'Daily routines help children feel confident, understand expectations, and move calmly between learning, meals, rest, and play.',
    image: '/assets/images/students/children-seated-in-class.jpeg',
    link: '/parents/student-handbook', linkLabel: 'student handbook',
    views: '119',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'Daily routines help children feel confident, understand expectations, and move calmly between learning, meals, rest, and play.',
        'Predictable rhythms give young learners the security they need to settle and thrive.',
      ] },
      { id: 'why', navLabel: 'Why routines matter', heading: 'Why routines matter', paragraphs: [
        'Circle time, choice, story, snack, and quiet time give the day a familiar shape children can rely on.',
        'Clear, gentle expectations help children manage transitions and build independence.',
      ] },
      { id: 'next', navLabel: 'Family guidance', heading: 'Family guidance', paragraphs: [
        'Read more about daily rhythm in the <a href="/parents/student-handbook">student handbook</a>.',
      ] },
    ],
  },
  {
    slug: 'learning-through-play-and-discovery',
    day: '24', month: 'Jan',
    title: 'Learning through play and discovery',
    category: 'Academics', type: 'Programmes',
    excerpt: 'From early years to primary, children learn through guided practice, creative projects, outdoor movement, and classroom conversation.',
    image: '/assets/images/learning/children-handling-class-activity.jpeg',
    link: '/academics/programmes', linkLabel: 'programmes page',
    views: '143',
    sections: [
      { id: 'overview', navLabel: 'Overview', paragraphs: [
        'From early years to primary, children learn through guided practice, creative projects, outdoor movement, and classroom conversation.',
        'Play and discovery sit at the heart of how young children make sense of the world.',
      ] },
      { id: 'play', navLabel: 'Learning that feels like play', heading: 'Learning that feels like play', paragraphs: [
        'Hands-on activities, games, and projects build literacy, numeracy, and curiosity in small, joyful steps.',
        'Teachers guide discovery so children test ideas and explain what they notice.',
      ] },
      { id: 'next', navLabel: 'Explore programmes', heading: 'Explore programmes', paragraphs: [
        'See age bands and learning stages on our <a href="/academics/programmes">programmes page</a>.',
      ] },
    ],
  },
], 'news');
