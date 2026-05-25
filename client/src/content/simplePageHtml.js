import { schoolData as s } from './schoolData.js';
import { kbIcon } from './kbIcons.js';

/**
 * Lightweight inner page shell (page title + one content section).
 */
export function getSimplePageHtml({ title, breadcrumb, heading, lead, bodyHtml = '' }) {
  const crumbs = Array.isArray(breadcrumb) ? breadcrumb : [{ label: 'Home', href: '/' }, breadcrumb];
  const crumbItems = crumbs
    .map((c, i) => {
      const isLast = i === crumbs.length - 1;
      if (isLast) return `<li class="current">${c.label}</li>`;
      return `<li><a href="${c.href}">${c.label}</a></li>`;
    })
    .join('');

  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">${title}</h1>
        <nav class="breadcrumbs">
          <ol>${crumbItems}</ol>
        </nav>
      </div>
    </div>
    <section class="section kb-simple-page">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <h2 class="h3 mb-3">${heading}</h2>
            ${lead ? `<p class="lead text-muted mb-4">${lead}</p>` : ''}
            <div class="kb-simple-page-body">${bodyHtml}</div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getPoliciesPageHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Policies</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li><a href="/resources/gallery">Resources</a></li>
            <li class="current">Policies</li>
          </ol>
        </nav>
      </div>
    </div>
    <section class="section kb-policy-page">
      <div class="container" data-aos="fade-up">
        <div class="kb-policy-hero row g-4 align-items-stretch">
          <div class="col-lg-7">
            <div class="kb-page-hero-copy">
              <p class="kb-kicker">Parent guide</p>
              <h2>Clear routines keep children safe, settled, and ready to learn.</h2>
              <p>These policy summaries bring together the parent handbook, admission form, medical form, pick-up authorisation form, and school brochure so families can quickly understand what KBIS expects and what the school commits to.</p>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="kb-page-hero-image">
              <img src="/assets/images/students/children-seated-blue-classroom.jpeg" alt="Children seated safely in class" loading="lazy">
            </div>
          </div>
        </div>

        <div class="kb-policy-alert mt-4" data-aos="fade-up">
          <i class="bi bi-info-circle"></i>
          <p class="mb-0">For any policy question or special circumstance, contact the office at <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a> or <a href="mailto:${s.officeEmail}">${s.officeEmail}</a>.</p>
        </div>

        <div class="row g-4 mt-4 kb-policy-sections">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-calendar-check"></i></div>
              <h3>Attendance and punctuality</h3>
              <p>Regular attendance gives each child the best chance to learn, participate, and keep pace with class routines.</p>
              <ul>
                <li>Parents should report every absence to the school office before 8:00 a.m.</li>
                <li>Students are expected to attend daily, arrive on time, and participate fully.</li>
                <li>Make-up work should be completed within the time advised by the teacher.</li>
                <li>Persistent lateness interrupts learning and may require a parent meeting.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="180">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-door-open"></i></div>
              <h3>Drop-off, pick-up, and early release</h3>
              <p>Children are released only through safe routines and authorised adult collection procedures.</p>
              <ul>
                <li>Morning drop-off starts from 7:30 a.m.; children are supervised on the compound.</li>
                <li>Parents should schedule appointments after 3:15 p.m. where possible.</li>
                <li>Early release requires a parent note or direct communication with the school.</li>
                <li>Authorised pick-up people must be listed, and valid ID copies should be submitted.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="260">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi ${kbIcon.healthPolicy}"></i></div>
              <h3>Health, medical conditions, and allergies</h3>
              <p>Health details must be documented so teachers, kitchen staff, and substitute staff can protect each child.</p>
              <ul>
                <li>Parents should describe medical conditions, allergies, likely reactions, and required staff response.</li>
                <li>Food allergies, dietary restrictions, foods to avoid, and contact restrictions should be recorded clearly.</li>
                <li>Life-threatening allergies or conditions require an emergency health care plan completed by a physician.</li>
                <li>Parents should update the office whenever medical or allergy information changes.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="340">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-cup-hot"></i></div>
              <h3>Meals, snacks, and hygiene</h3>
              <p>KBIS provides balanced meals and follows cleaning and hand-washing routines around food service.</p>
              <ul>
                <li>Meals include appropriate portions of protein, carbohydrate, fruits, and vegetables.</li>
                <li>Children wash hands before meals and go directly to the eating area.</li>
                <li>Tables, preparation surfaces, and food equipment are cleaned before and after food use.</li>
                <li>Religious, cultural, personal, and health-related dietary restrictions are respected.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="420">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-people"></i></div>
              <h3>Parent communication and responsibilities</h3>
              <p>Partnership between parents, guardians, and teachers helps each learner reach their potential.</p>
              <ul>
                <li>Parents should keep emergency contacts and authorised collection details current.</li>
                <li>Families should share learning, health, dietary, and behaviour information that helps staff support the child.</li>
                <li>Parents may contact the office for school notices, class updates, calendars, and admission guidance.</li>
                <li>School policies and records may be reviewed through the office during regular hours.</li>
              </ul>
            </article>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="500">
            <article class="kb-policy-card h-100">
              <div class="kb-policy-icon"><i class="bi bi-cash-coin"></i></div>
              <h3>Fees and payments</h3>
              <p>Families should confirm current fees and payment details directly with the administration before payment.</p>
              <ul>
                <li>The brochure notes that fees include tuition, stationery, and lunch.</li>
                <li>Breakfast and snacks may be available upon request at a termly cost.</li>
                <li>Extra-curricular activities may carry separate fees and require sign-up through administration.</li>
                <li>Payment details should always be verified with the school office before sending funds.</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="kb-policy-downloads mt-5" data-aos="fade-up">
          <div class="section-title">
            <h2>Documents for parents</h2>
            <p>Download the forms below if you need to complete, review, or submit them to the school office.</p>
          </div>
          <div class="row g-3">
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/KBIS-Application-form.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.applicationForm}"></i></span>
                <span><strong>Application form</strong><small>Child details, guardian contacts, prior school details, language, religion, and admission criteria.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/Kinder-Bubble-Medical.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.medicalForm}"></i></span>
                <span><strong>Medical and allergy form</strong><small>Medical condition, allergy, diet, emergency care plan, and parent agreement.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/After-School-Pick-up-Authorisation-Forms.docx" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.pickUpAuth}"></i></span>
                <span><strong>Pick-up authorisation</strong><small>Authorised collection names, phone numbers, valid ID reminder, and parent confirmation.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/assets/docs/mini-brochure.pdf" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.brochure}"></i></span>
                <span><strong>Mini brochure</strong><small>Mission, vision, bilingual studies, extra-curricular activities, feeding, trips, fees, and payment guide.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/privacy" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.privacy}"></i></span>
                <span><strong>Privacy policy</strong><small>Website enquiries, submitted information, and data handling.</small></span>
              </a>
            </div>
            <div class="col-md-6 col-xl-4">
              <a href="/terms-of-service" class="kb-resource-card d-flex gap-3 text-decoration-none">
                <span class="kb-resource-icon"><i class="bi ${kbIcon.terms}"></i></span>
                <span><strong>Terms of service</strong><small>Website use and general service information.</small></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
