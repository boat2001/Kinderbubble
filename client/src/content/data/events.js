import { assertUniqueSlugs } from './validate.js';

/**
 * EVENTS CONTENT
 * ==============
 * Each entry below becomes its own page at  /event-details/<slug>  and a card on
 * the /events list. To add an event, copy the template and drop it anywhere in
 * the array (top = shown first on the list).
 *
 * Template — copy from here:
 *
 *   {
 *     slug: 'unique-name-with-dashes',   // becomes the URL; must be unique
 *     title: 'Event title',
 *     label: 'Annual',                   // date badge: first word = big line, rest = small line
 *     excerpt: 'One line shown on the events list card.',
 *     image: '/assets/images/.../photo.jpeg',   // file under client/public/assets/images
 *     body: [
 *       'First paragraph of the story.',
 *       'Second paragraph.',
 *     ],
 *     highlights: [                      // bullets under "How the event went"
 *       'A highlight.',
 *       'Another highlight.',
 *     ],
 *     gallery: [                         // [imagePath, caption] pairs under "Related images"
 *       ['/assets/images/.../photo-a.jpeg', 'Caption A'],
 *       ['/assets/images/.../photo-b.jpeg', 'Caption B'],
 *     ],
 *   },
 */
export const eventsData = assertUniqueSlugs([
  {
    slug: 'anniversary-celebration',
    title: 'Anniversary celebration',
    label: 'Annual',
    excerpt: 'A grand school programme celebrating KBIS growth, culture, performances, family participation, and the school community.',
    image: '/assets/images/extra-curricular/students-on-stage-at-event.jpeg',
    body: [
      'This event brought the KBIS community together for a joyful celebration of school growth, learner confidence, family support, and the culture that makes school life memorable. Children participated through performances, group presentations, music, movement, and shared moments that reflected their classroom learning and school spirit.',
      'The programme was not just a date on the calendar. It became a record of how learners express confidence, how families support school life, and how staff guide children through preparation, performance, teamwork, and celebration.',
    ],
    highlights: [
      'Learners had opportunities to perform, present, and take part in group activities.',
      'Families and staff shared in the celebration, creating a warm community atmosphere.',
      'Photos and highlights from the day help preserve the story for parents and the wider school community.',
    ],
    gallery: [
      ['/assets/images/extra-curricular/students-on-stage-at-event.jpeg', 'Stage moments'],
      ['/assets/images/extra-curricular/parents-and-children-at-event.jpeg', 'Family participation'],
      ['/assets/images/extra-curricular/students-under-event-tent.jpeg', 'School community'],
    ],
  },
  {
    slug: 'graduation-moving-up-ceremony',
    title: 'Graduation and moving-up ceremony',
    label: 'End term',
    excerpt: 'A milestone celebration where learners were recognised for growth, confidence, and readiness for the next stage.',
    image: '/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg',
    body: [
      'The graduation and moving-up ceremony marked a proud milestone for learners stepping into the next stage of their school journey. Children were recognised for their growth, confidence, and the steady progress they made across the year.',
      'Families gathered to celebrate certificates, songs, and presentations, while teachers reflected on how far each child had come — from first routines to reading, counting, speaking, and leading with assurance.',
    ],
    highlights: [
      'Learners received certificates and recognition for effort, character, and academic growth.',
      'Children performed songs, recited, and presented in front of proud families and staff.',
      'The ceremony celebrated readiness for the next class while honouring the year\'s memories.',
    ],
    gallery: [
      ['/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg', 'Certificates'],
      ['/assets/images/extra-curricular/students-on-stage-at-event.jpeg', 'On stage'],
      ['/assets/images/extra-curricular/students-under-event-tent.jpeg', 'Celebration'],
    ],
  },
  {
    slug: 'educational-trips',
    title: 'Educational trips',
    label: 'Trips',
    excerpt: 'Theme-based outings connected classroom learning to real places, with learners exploring, asking questions, and returning with stories to share.',
    image: '/assets/images/extra-curricular/school-excursion-group-photo.jpeg',
    body: [
      'Educational trips connected classroom themes to real places, giving learners the chance to explore, ask questions, and experience learning beyond the school gate.',
      'Each outing was planned around lesson themes, with careful safety planning and parent communication before departure. Children returned with stories, observations, and fresh curiosity to bring back into class.',
    ],
    highlights: [
      'Trips were organised around term themes and lesson plans for meaningful, connected learning.',
      'Safety planning and parent communication were completed before every departure.',
      'Children explored national landmarks, nature, and community spaces with guided activities.',
    ],
    gallery: [
      ['/assets/images/extra-curricular/school-excursion-group-photo.jpeg', 'Group photo'],
      ['/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg', 'At the monument'],
      ['/assets/images/extra-curricular/students-on-bus-smiling.jpeg', 'On the road'],
    ],
  },
  {
    slug: 'career-and-culture-day',
    title: 'Career and culture day',
    label: 'School life',
    excerpt: 'Children dressed, presented, and explored real-world roles through guided play, family support, and joyful classroom activities.',
    image: '/assets/images/extra-curricular/career-day-children-in-costumes.jpeg',
    body: [
      'Career and culture day invited children to dress, present, and explore real-world roles through guided play, family support, and joyful classroom activities.',
      'From little chefs to future professionals, learners discovered the value of different jobs and cultures, building confidence as they spoke about who they want to become.',
    ],
    highlights: [
      'Children dressed as their dream careers and presented to classmates and families.',
      'Guided play and activities helped learners explore real-world roles and responsibilities.',
      'Families joined the celebration, making the day warm, memorable, and encouraging.',
    ],
    gallery: [
      ['/assets/images/extra-curricular/career-day-children-in-costumes.jpeg', 'Career costumes'],
      ['/assets/images/extra-curricular/career-day-chef-costumes-group.jpeg', 'Little chefs'],
      ['/assets/images/extra-curricular/parents-and-children-at-event.jpeg', 'Family support'],
    ],
  },
  {
    slug: 'independence-and-national-moments',
    title: 'Independence and national moments',
    label: 'Culture',
    excerpt: 'Learners celebrated Ghanaian identity through flags, presentations, group moments, and guided conversations about citizenship.',
    image: '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg',
    body: [
      'Independence and national moments gave learners the chance to celebrate Ghanaian identity through flags, presentations, and guided conversations about citizenship.',
      'Children took part in group moments that built pride, belonging, and an early understanding of their country\'s history and values.',
    ],
    highlights: [
      'Learners waved flags and joined presentations celebrating Ghanaian heritage.',
      'Guided conversations introduced citizenship, history, and national pride in age-right ways.',
      'Group moments built belonging, confidence, and a sense of shared identity.',
    ],
    gallery: [
      ['/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg', 'Flags under the tent'],
      ['/assets/images/extra-curricular/students-group-at-independence-square.jpeg', 'At Independence Square'],
      ['/assets/images/extra-curricular/students-with-officer-on-excursion.jpeg', 'National event'],
    ],
  },
], 'events');
