/**
 * Semantic Bootstrap Icons for KBIS — use `bi ${kbIcon.key}` in markup.
 * @see https://icons.getbootstrap.com/
 */
export const kbIcon = {
  programmeBands: 'bi-layers-fill',
  languages: 'bi-translate',
  fullDay: 'bi-clock-fill',
  campusLocation: 'bi-geo-alt-fill',
  singleCampus: 'bi-building-fill',
  nurturingCare: 'bi-balloon-heart-fill',
  bilingual: 'bi-translate',
  movementPlay: 'bi-tree-fill',
  discovery: 'bi-lightbulb-fill',
  smallGroups: 'bi-people-fill',
  schoolReadiness: 'bi-mortarboard-fill',
  routines: 'bi-shield-check',
  globalOutlook: 'bi-globe-europe-africa',
  foundations: 'bi-journal-text',
  programsByAge: 'bi-layers-fill',
  indoorOutdoorPlay: 'bi-tree-fill',
  safety: 'bi-shield-check',
  accredited: 'bi-patch-check-fill',
  admissionsRolling: 'bi-calendar-event',
  planVisit: 'bi-calendar-check',
  applicationForm: 'bi-file-earmark-text-fill',
  medicalForm: 'bi-file-medical-fill',
  pickUpAuth: 'bi-person-badge-fill',
  brochure: 'bi-journal-richtext',
  healthPolicy: 'bi-heart-pulse-fill',
  privacy: 'bi-shield-check',
  terms: 'bi-file-text',
  musicCreativity: 'bi-music-note-beamed',
  languageCulture: 'bi-translate',
  inquiryDiscovery: 'bi-lightbulb-fill',
  learningStudios: 'bi-book-fill',
  playMovement: 'bi-tree-fill',
  wellbeingCommunity: 'bi-people-fill',
  familyPartnership: 'bi-chat-heart-fill',
};

/** @param {keyof typeof kbIcon} name */
export function bi(name) {
  return `bi ${kbIcon[name]}`;
}
