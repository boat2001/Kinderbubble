import { schoolData as s } from './schoolData.js';
import { kbIcon } from './kbIcons.js';
import { getIndexLayoutHtml } from './indexLayout.js';

export function getIndexHtml() {
  return getIndexLayoutHtml(s);
}

export function getAdmissionsHtml() {
  const progOptions = s.programs.map((p) => `<option>${p}</option>`).join('');
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Admissions</h1>
        <nav class="breadcrumbs">
          <ol>
            <li><a href="/">Home</a></li>
            <li class="current">Admissions</li>
          </ol>
        </nav>
      </div>
    </div>
    <section id="admissions" class="admissions section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-admissions-links" data-aos="fade-up" data-aos-delay="120">
          <a href="/parents/admission-form">
            <i class="bi bi-file-earmark-text"></i>
            <span>
              <strong>Application form</strong>
              <small>Start with the application pack</small>
            </span>
          </a>
          <a href="/parents/make-payment">
            <i class="bi bi-credit-card"></i>
            <span>
              <strong>Make payment</strong>
              <small>Review fee and payment guidance</small>
            </span>
          </a>
          <a href="/academics/programmes">
            <i class="bi bi-grid-3x3-gap"></i>
            <span>
              <strong>Programmes</strong>
              <small>See age bands and placement options</small>
            </span>
          </a>
          <a href="/academics/curriculum">
            <i class="bi bi-book"></i>
            <span>
              <strong>Curriculum</strong>
              <small>Explore the learning approach</small>
            </span>
          </a>
        </div>

        <div class="row gy-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="application-steps">
              <h3 class="section-subtitle">How to apply</h3>
              <div class="steps-wrapper">
                <div class="step-item">
                  <div class="step-number">01</div>
                  <div class="step-content">
                    <h4>Enquire</h4>
                    <p>Call <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a> or email <a href="mailto:${s.officeEmail}">${s.officeEmail}</a> with your child’s age and preferred start window.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">02</div>
                  <div class="step-content">
                    <h4>Visit</h4>
                    <p>Walk the classrooms, meet leadership, and see indoor and outdoor learning spaces in action.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">03</div>
                  <div class="step-content">
                    <h4>Apply</h4>
                    <p>Complete the application pack and share any learning or health notes that help us support your child from day one.</p>
                  </div>
                </div>
                <div class="step-item">
                  <div class="step-number">04</div>
                  <div class="step-content">
                    <h4>Begin</h4>
                    <p>Receive your start date, class placement, and orientation details — then join the KBIS family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="requirements-card">
              <h3 class="section-subtitle">What we typically need</h3>
              <ul class="requirements-list">
                <li><i class="bi bi-check-circle"></i><span>Completed application form</span></li>
                <li><i class="bi bi-check-circle"></i><span>Proof of age (birth certificate or equivalent)</span></li>
                <li><i class="bi bi-check-circle"></i><span>Most recent school reports, if transferring</span></li>
                <li><i class="bi bi-check-circle"></i><span>Health, allergy, and dietary information</span></li>
                <li><i class="bi bi-check-circle"></i><span>Emergency contacts and authorised pick-up list</span></li>
                <li><i class="bi bi-check-circle"></i><span>Any specialist reports that help us plan support</span></li>
              </ul>
              <div class="special-note">
                <i class="bi bi-info-circle"></i>
                <p>Exact requirements can vary by age band. Admissions will confirm what applies to your child before you submit.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 gy-4">
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="tuition-card">
              <h3 class="section-subtitle">Programmes &amp; fees</h3>
              <div class="tuition-table">
                <table class="table">
                  <thead>
                    <tr>
                      <th>Programme</th>
                      <th>Fees</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${s.programs
                      .map(
                        (p) => `
                    <tr>
                      <td>${p}</td>
                      <td>On request</td>
                      <td>Office shares current schedule</td>
                    </tr>`
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
              <div class="financial-aid">
                <h4>Ask about payment plans</h4>
                <p>We are happy to walk through fee structure, sibling policies, and what is included in a typical week on campus.</p>
                <a href="/contact" class="btn btn-aid">Contact the office</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="contact-form-card">
              <h3 class="section-subtitle">Request information</h3>
              <form action="#" class="php-email-form" data-form-type="admissions-request">
                <div class="row g-3">
                  <div class="col-12">
                    <input type="text" name="name" class="form-control" placeholder="Name*" required="">
                  </div>
                  <div class="col-md-6">
                    <input type="email" name="email" class="form-control" placeholder="Email address*" required="">
                  </div>
                  <div class="col-md-6">
                    <input type="tel" name="phone" class="form-control" placeholder="Phone number">
                  </div>
                  <div class="col-12">
                    <select name="subject" class="form-select" required="">
                      <option selected="" disabled="">Programme of interest*</option>
                      ${progOptions}
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea name="message" class="form-control" rows="7" placeholder="Questions or comments"></textarea>
                  </div>
                  <div class="col-12">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit" class="btn btn-request">Request information</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12" data-aos="fade-up" data-aos-delay="100">
            <div class="deadlines-card">
              <h3 class="section-subtitle">How timing works</h3>
              <div class="deadlines-grid">
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="200">
                  <div class="deadline-date">Rolling</div>
                  <h4>Entry year-round</h4>
                  <p>${s.highlights[1]} Natural entry points across creche, nursery, kindergarten, reception, and primary.</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="300">
                  <div class="deadline-date">Before start</div>
                  <h4>Forms &amp; health</h4>
                  <p>Complete enrolment paperwork and share medical or dietary needs so we are ready on day one.</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="400">
                  <div class="deadline-date">Any week</div>
                  <h4>Campus tours</h4>
                  <p>Book a visit that fits your schedule — ${s.hours.toLowerCase()}</p>
                </div>
                <div class="deadline-item" data-aos="zoom-in" data-aos-delay="500">
                  <div class="deadline-date">Ongoing</div>
                  <h4>Family partnership</h4>
                  <p>Clear communication throughout the year so you always know how your child is growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5 campus-visit">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="visit-image">
              <img src="/assets/images/extra-curricular/birthday-party-classroom-hero.jpeg" class="img-fluid" alt="Learners at KBIS" loading="lazy">
              <div class="image-caption">See classrooms and play spaces in person</div>
            </div>
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="200">
            <div class="visit-content">
              <h3>Schedule a campus visit</h3>
              <p>${s.legalName} welcomes families who want to feel the rhythm of the day — bilingual exposure, Cambridge-inspired planning, and ${s.highlights[0].toLowerCase()} Meet admissions, peek into learning studios, and ask candid questions.</p>
              <ul class="visit-options">
                <li><i class="bi bi-calendar-check"></i> Weekday tours by appointment</li>
                <li><i class="bi bi-people"></i> Conversation with admissions about placement</li>
                <li><i class="bi bi-building"></i> Indoor and outdoor learning environments</li>
                <li><i class="bi bi-mortarboard"></i> Meet leadership when available</li>
              </ul>
              <a href="/contact" class="btn btn-schedule">Plan your visit</a>
              <div class="virtual-option">
                <span>Prefer to start remotely?</span>
                <a href="tel:${s.phoneTel}" class="virtual-link">Call the office <i class="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getCampusHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Campus &amp; facilities</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Campus</li></ol></nav>
      </div>
    </div>
    <section id="campus-facilities" class="campus-facilities section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="hero-intro">
          <div class="row g-0 align-items-center">
            <div class="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div class="content-wrapper">
                <div class="badge-highlight">Spintex Road, Accra</div>
                <h1>Spaces built for young learners</h1>
                <p class="lead-text">${s.addressLine1}, ${s.addressLine2}. Our campus pairs bright classrooms with safe outdoor play — all designed around how children ${s.ages} actually learn and move.</p>
                <div class="feature-highlights">
                  <div class="highlight-item">
                    <i class="bi ${kbIcon.programmeBands}"></i>
                    <div>
                      <span class="number">5</span>
                      <span class="label">Programme bands</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi ${kbIcon.fullDay}"></i>
                    <div>
                      <span class="number">12h</span>
                      <span class="label">Care window</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi ${kbIcon.singleCampus}"></i>
                    <div>
                      <span class="number">1</span>
                      <span class="label">Caring campus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div class="hero-visual">
                <div class="image-stack">
                  <img src="/assets/images/learning/girl-presenting-in-class-gallery.jpeg" alt="KBIS campus" class="img-fluid primary-img" loading="lazy">
                  <div class="floating-card">
                    <i class="bi bi-mortarboard"></i>
                    <span>${s.curriculum}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="facilities-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="category-card academic" data-aos="zoom-in" data-aos-delay="100">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${kbIcon.learningStudios}"></i></div>
              <h3>Learning studios</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" alt="Classrooms" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Age-appropriate layouts and rich materials</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Literacy, numeracy, and inquiry corners</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Small-group teaching where it matters</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/academics" class="explore-btn">Academics <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="category-card sports" data-aos="zoom-in" data-aos-delay="200">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${kbIcon.playMovement}"></i></div>
              <h3>Play &amp; movement</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg" alt="Outdoor play" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>${s.highlights[0]}</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Daily gross-motor opportunities</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Supervised routines families can trust</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/students-life" class="explore-btn">Student life <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="category-card residence" data-aos="zoom-in" data-aos-delay="300">
            <div class="card-header">
              <div class="icon-wrapper"><i class="bi ${kbIcon.wellbeingCommunity}"></i></div>
              <h3>Wellbeing &amp; community</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/images/learning/outdoor-presentation-kbis-08.jpeg" alt="Community" class="img-fluid" loading="lazy">
              </div>
              <div class="facility-list">
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>${s.highlights[2]}</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Reception and family touchpoints</span></div>
                <div class="facility-item"><i class="bi bi-check2-circle"></i><span>Clear communication with home</span></div>
              </div>
            </div>
            <div class="card-footer">
              <a href="/contact" class="explore-btn">Contact <i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getContactHtml() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(s.mapQuery)}&z=17&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.mapQuery)}`;
  const faqs = [
    ['What languages do you teach?', 'We teach in English and French, with bilingual lessons that help children build confidence in both languages.'],
    ['How do you encourage interactive play?', 'Teachers model sharing, turn-taking, gentle hands, and kind language so cooperative play becomes natural.'],
    ['How do you handle separation and transition?', 'We begin with short separation times, build trust gradually, and create transition plans that fit each child.'],
    ['When and where should I drop my child off?', 'Children may be dropped off from 7:30 a.m. Supervision is provided on the school compound every morning.'],
    ['What are afternoon pick-up procedures?', 'Children are supervised near the pick-up area and released through the school routine. Authorised pick-up details should be kept current.'],
    ['What happens if my child gets sick or hurt?', 'Your child is evaluated and treated immediately. Parents are contacted right away for serious injury, illness, or when a child needs to go home.'],
    ['What curriculum do you use?', 'KBIS uses Cambridge-aligned early learning and primary strategies, with phonics, literacy, handwriting, everyday maths, and bilingual exposure.'],
    ['Do children nap?', 'Younger children and children staying for extended afternoon care have rest time after lunch, often with a story or quiet music.'],
  ];

  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Contact</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Contact</li></ol></nav>
      </div>
    </div>
    <section id="contact" class="contact section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-contact-hero row g-4 align-items-stretch mb-4">
          <div class="col-12">
            <div class="kb-contact-intro h-100">
              <p class="kb-kicker">Visit KBIS</p>
              <h2>Find us at Community 18, Spintex Road.</h2>
              <p>Use the map pointer for ${s.addressLine1}, ${s.addressLine2}. For tours, admissions, forms, or feedback, contact the office and we will route your message correctly.</p>
              <div class="kb-contact-actions">
                <a href="tel:${s.phoneTel}" class="btn btn-primary">${s.phoneDisplay}</a>
                <a href="mailto:${s.officeEmail}" class="btn btn-outline-primary">${s.officeEmail}</a>
              </div>
            </div>
          </div>
        </div>

        <div class="contact-main-wrapper">
          <div class="contact-content">
            <div class="contact-cards-container" data-aos="fade-up" data-aos-delay="300">
              <div class="contact-card" data-href="${mapLink}"><div class="icon-box"><i class="bi bi-geo-alt"></i></div><div class="contact-text"><h4>Address</h4><p>${s.addressLine1}<br>${s.addressLine2}</p></div></div>
              <div class="contact-card" data-href="mailto:${s.officeEmail}"><div class="icon-box"><i class="bi bi-envelope"></i></div><div class="contact-text"><h4>Email</h4><p><a href="mailto:${s.officeEmail}">${s.officeEmail}</a></p></div></div>
              <div class="contact-card" data-href="tel:${s.phoneTel}"><div class="icon-box"><i class="bi bi-telephone"></i></div><div class="contact-text"><h4>Phone</h4><p><a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p></div></div>
              <div class="contact-card"><div class="icon-box"><i class="bi bi-clock"></i></div><div class="contact-text"><h4>Hours</h4><p>${s.hours}</p></div></div>
            </div>
            <div class="kb-contact-map-panel" data-aos="fade-up" data-aos-delay="350">
              <div class="kb-contact-map-copy">
                <p class="kb-kicker">Location</p>
                <h3>${s.addressLine1}</h3>
                <p>${s.addressLine2}. Open the map for directions, route planning, and the exact school pointer.</p>
                <a href="${mapLink}" class="btn btn-primary" target="_blank" rel="noopener">Open in Google Maps</a>
              </div>
              <div class="map-wrapper kb-live-map">
                <iframe title="Kinder Bubble International School on Google Maps" src="${mapSrc}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div class="contact-form-container" data-aos="fade-up" data-aos-delay="400">
              <h3>Feedback and enquiries</h3>
              <p>Tell us exactly what you need. Choose a subject, include your child's age or class if relevant, and give enough detail for the right person to respond.</p>
              <form action="#" method="post" class="php-email-form" data-form-type="contact-feedback">
                <div class="row">
                  <div class="col-md-6 form-group"><input type="text" name="name" class="form-control" id="name" placeholder="Your name" required=""></div>
                  <div class="col-md-6 form-group mt-3 mt-md-0"><input type="email" class="form-control" name="email" id="email" placeholder="Your email" required=""></div>
                </div>
                <div class="row">
                  <div class="col-md-6 form-group mt-3"><input type="tel" class="form-control" name="phone" id="phone" placeholder="Phone number"></div>
                  <div class="col-md-6 form-group mt-3">
                    <select class="form-select" name="subject" id="subject" required="">
                      <option selected="" disabled="">What is this about?</option>
                      <option>Admissions and fees</option>
                      <option>Plan a visit</option>
                      <option>Feedback for school leadership</option>
                      <option>Medical, allergy, or pick-up update</option>
                      <option>Partnership or event enquiry</option>
                    </select>
                  </div>
                </div>
                <div class="form-group mt-3"><textarea class="form-control" name="message" rows="7" placeholder="Please give as much detail as you can" required=""></textarea></div>
                <div class="my-3"><div class="loading">Loading</div><div class="error-message"></div><div class="sent-message">Your message has been sent. Thank you!</div></div>
                <div class="form-submit"><button type="submit">Send message</button></div>
                <p class="small text-muted mt-3 mb-0">Prefer to reach out directly? <a href="mailto:${s.officeEmail}">${s.officeEmail}</a> &middot; <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p>
              </form>
            </div>
          </div>
        </div>

        <div class="kb-contact-faq mt-5" data-aos="fade-up">
          <div class="section-title"><h2>FAQs</h2><p>Questions families ask most often before visiting or enrolling.</p></div>
          <div class="accordion kb-faq-accordion" id="contactFaq">
            ${faqs.map(([q, a], index) => `
              <div class="accordion-item">
                <h3 class="accordion-header" id="faqHead${index}">
                  <button class="accordion-button ${index === 0 ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#faqPanel${index}" aria-expanded="${index === 0 ? 'true' : 'false'}" aria-controls="faqPanel${index}">${q}</button>
                </h3>
                <div id="faqPanel${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" aria-labelledby="faqHead${index}" data-bs-parent="#contactFaq">
                  <div class="accordion-body">${a}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getEventsHtml() {
  const events = [
    ['Anniversary celebration', 'Annual', 'A grand school programme celebrating KBIS growth, culture, performances, family participation, and the school community.', '/assets/images/extra-curricular/students-on-stage-at-event.jpeg'],
    ['Graduation and moving-up ceremony', 'End term', 'A milestone celebration where learners were recognised for growth, confidence, and readiness for the next stage.', '/assets/images/extra-curricular/career-day-costume-group-certificates.jpeg'],
    ['Educational trips', 'Trips', 'Theme-based outings connected classroom learning to real places, with learners exploring, asking questions, and returning with stories to share.', '/assets/images/extra-curricular/school-excursion-group-photo.jpeg'],
    ['Career and culture day', 'School life', 'Children dressed, presented, and explored real-world roles through guided play, family support, and joyful classroom activities.', '/assets/images/extra-curricular/career-day-children-in-costumes.jpeg'],
    ['Independence and national moments', 'Culture', 'Learners celebrated Ghanaian identity through flags, presentations, group moments, and guided conversations about citizenship.', '/assets/images/extra-curricular/students-with-ghana-flags-under-tent.jpeg'],
  ];

  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Events</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Events</li></ol></nav>
      </div>
    </div>
    <section id="events-extended" class="events-extended section kb-events-page">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-events-hero row g-4 align-items-stretch mb-5">
          <div class="col-lg-7">
            <div class="kb-page-hero-copy h-100">
              <p class="kb-kicker">Grand programmes</p>
              <h2>Events we have lived, captured, and remembered as a school.</h2>
              <p>Events at KBIS are records of grand activities the school community has gone through: anniversaries, graduations, educational trips, culture days, career days, and celebrations of learning.</p>
            </div>
          </div>
          <div class="col-lg-5"><div class="kb-page-hero-image"><img src="/assets/images/extra-curricular/parents-and-children-at-event.jpeg" alt="" loading="lazy"></div></div>
        </div>
        <div class="row g-4">
          <div class="col-lg-8">
            <div class="events-list kb-event-list">
              ${events.map(([title, label, desc, image], index) => `
                <article class="event-item" data-aos="fade-up" data-aos-delay="${index * 80}" data-href="/event-details">
                  <div class="kb-event-thumb"><img src="${image}" alt="" loading="lazy"></div>
                  <div class="event-date"><span class="day">${label.split(' ')[0]}</span><span class="month">${label.split(' ').slice(1).join(' ') || 'KBIS'}</span></div>
                  <div class="event-content">
                    <h3 class="event-title">${title}</h3>
                    <div class="event-meta"><span><i class="bi bi-images"></i> Photos and highlights</span><span><i class="bi bi-journal-text"></i> Event story</span></div>
                    <p class="event-description">${desc}</p>
                    <a href="/event-details" class="btn-event-details">View details <i class="bi bi-arrow-right"></i></a>
                  </div>
                </article>`).join('')}
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="events-sidebar kb-sticky-sidebar">
              <div class="sidebar-item categories" data-aos="fade-up">
                <h4>Event archive</h4>
                <p class="small text-muted mb-3">Browse highlights from school programmes, trips, celebrations, performances, and learning showcases that have already taken place.</p>
                <a href="/resources/gallery" class="btn btn-primary btn-sm w-100">Open gallery</a>
              </div>
              <div class="sidebar-item upcoming-events" data-aos="fade-up" data-aos-delay="100">
                <h4>Featured album</h4>
                <div class="featured-event"><img src="/assets/images/extra-curricular/students-with-ghana-flags-at-monument.jpeg" alt="" class="img-fluid" loading="lazy"><div class="featured-event-details"><h5>Trips and national moments</h5><a href="/resources/gallery" class="btn-sm btn-register">View photos</a></div></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getNewsHtml() {
  const updates = [
    ['12', 'Jun', 'Partnership with Global School Alliance', 'School news', 'Events', 'KBIS has benefited from GSA support and a sister-school partnership with Skidby Church of England Primary School in Yorkshire, England.', '/assets/images/extra-curricular/students-group-at-independence-square.jpeg', '/news/partnerships', '214'],
    ['06', 'May', 'Bilingual curriculum focus', 'Academics', 'Learning', 'KBIS follows the Cambridge International Curriculum with English-French bilingual exposure and age-right classroom routines.', '/assets/images/learning/children-reading-together.jpeg', '/academics/languages', '186'],
    ['29', 'Apr', 'Health, allergy, and pick-up forms', 'Parents', 'Notices', 'Families can access application, medical, and authorised pick-up forms from the parents and policies pages.', '/assets/images/learning/children-holding-green-apple.jpeg', '/parents/admission-form', '152'],
    ['18', 'Mar', 'Educational trips by term theme', 'Events', 'Campus', 'Trips are planned around term themes and lesson plans, with parent communication and safety planning before departure.', '/assets/images/extra-curricular/school-excursion-students-walking.jpeg', '/events', '128'],
    ['14', 'Feb', 'Classroom routines that help children settle', 'School news', 'Wellbeing', 'Daily routines help children feel confident, understand expectations, and move calmly between learning, meals, rest, and play.', '/assets/images/students/children-seated-in-class.jpeg', '/parents/student-handbook', '119'],
    ['24', 'Jan', 'Learning through play and discovery', 'Academics', 'Programmes', 'From early years to primary, children learn through guided practice, creative projects, outdoor movement, and classroom conversation.', '/assets/images/learning/children-handling-class-activity.jpeg', '/academics/programmes', '143'],
  ];

  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">News</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">News</li></ol></nav>
      </div>
    </div>
    <section id="news-hero" class="news-hero section kb-news-page">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="kb-news-grid">
          ${updates.map(([day, month, title, category, type, text, image, href, views], index) => `
            <div data-aos="fade-up" data-aos-delay="${100 + index * 70}">
              <article class="kb-news-card" data-href="${href}">
                <a class="kb-news-card-image" href="${href}" aria-label="${title}">
                  <img src="${image}" alt="" loading="lazy">
                  <span class="kb-news-date"><strong>${day}</strong><small>${month}</small></span>
                </a>
                <div class="kb-news-card-body">
                  <div class="kb-news-meta">
                    <span>${category}</span>
                    <b>${type}</b>
                    <em><i class="bi bi-share"></i></em>
                    <em><i class="bi bi-eye"></i>${views}</em>
                  </div>
                  <h2><a href="${href}">${title}</a></h2>
                  <p>${text}</p>
                  <a class="kb-news-read-more" href="${href}">Read more</a>
                </div>
              </article>
            </div>`).join('')}
        </div>
        <div class="kb-news-note mt-5" data-aos="fade-up">
          <div><h3>What belongs in news?</h3><p>Operational updates, curriculum notes, partnerships, policy reminders, new forms, changes in school routines, and family notices.</p></div>
          <div><h3>What belongs in events?</h3><p>Grand programmes like anniversaries, graduations, open mornings, educational trips, culture days, and celebrations of learning.</p></div>
        </div>
      </div>
    </section>
  `;
}

export function getFacultyHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Our team</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Our team</li></ol></nav>
      </div>
    </div>
    <section id="faculty--staff" class="faculty--staff section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row mb-5">
          <div class="col-lg-10 mx-auto">
            <div class="p-4 p-lg-5 rounded-4 kb-team-intro-panel" data-aos="fade-up">
              <p class="text-uppercase small fw-semibold kb-team-intro-kicker mb-2">Our team</p>
              <h2 class="h4 mb-3">Educators you meet in person</h2>
              <p class="text-muted mb-0">KBIS introduces classroom leads and specialists when you visit — so conversations stay personal and focused on your child. Explore academics for our approach, then book a tour through admissions or contact.</p>
              <div class="d-flex flex-wrap gap-2 mt-4">
                <a href="/academics" class="btn btn-outline-primary btn-sm">Academics</a>
                <a href="/admissions" class="btn btn-primary btn-sm">Plan a visit</a>
              </div>
            </div>
          </div>
        </div>
        <div class="faculty-grid">
          <div class="row g-4 justify-content-center">
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/learning/outdoor-presentation-kbis-08.jpeg" class="img-fluid" alt="${s.principal}" loading="lazy">
                  <div class="social-links">
                    <a href="mailto:${s.officeEmail}" aria-label="Email"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>${s.principal}</h3>
                  <p class="position">Principal</p>
                  <div class="department">${s.legalName}</div>
                  <div class="research-tags"><span>Leadership</span><span>Early years &amp; primary</span><span>Family partnership</span></div>
                  <a href="/about" class="profile-link">Our story</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg" class="img-fluid" alt="Teaching team" loading="lazy">
                  <div class="social-links">
                    <a href="/contact" aria-label="Contact"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>Teaching &amp; learning team</h3>
                  <p class="position">Classroom educators</p>
                  <div class="department">${s.curriculum}</div>
                  <div class="research-tags"><span>Cambridge pathway</span><span>Bilingual exposure</span><span>Child-centred practice</span></div>
                  <a href="/academics" class="profile-link">Academics</a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="faculty-card">
                <div class="faculty-image">
                  <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" class="img-fluid" alt="Support staff" loading="lazy">
                  <div class="social-links">
                    <a href="/contact" aria-label="Contact"><i class="bi bi-envelope"></i></a>
                  </div>
                </div>
                <div class="faculty-info">
                  <h3>Care &amp; operations</h3>
                  <p class="position">Support &amp; safety</p>
                  <div class="department">${s.hours}</div>
                  <div class="research-tags"><span>${s.highlights[2]}</span><span>Routines</span><span>Reception</span></div>
                  <a href="/contact" class="profile-link">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

const athleticsSwiperConfig = JSON.stringify({
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
  breakpoints: { 768: { slidesPerView: 2 }, 992: { slidesPerView: 3 } },
});

export function getStudentsLifeHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Student life</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Student life</li></ol></nav>
      </div>
    </div>
    <section id="students-life" class="students-life section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="200">
            <img src="/assets/images/learning/girl-presenting-in-class-gallery.jpeg" class="img-fluid rounded" alt="Student life" loading="lazy">
          </div>
          <div class="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div class="student-life-intro">
              <h3>A calm, joyful rhythm</h3>
              <p>Days at KBIS balance focused learning blocks with art, music, physical play, and time outdoors. Children practice sharing, problem-solving, and trying again when something is tricky — skills that matter far beyond the classroom.</p>
              <p>${s.curriculum}. ${s.highlights[0]}</p>
              <div class="mt-4">
                <a href="/campus-facilities" class="btn btn-outline-primary">Explore campus</a>
              </div>
            </div>
          </div>
        </div>

        <div class="student-organizations mt-5 pt-4" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Clubs &amp; experiences</h3>
          <div class="row g-4">
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div class="organization-card">
                <div class="icon-box"><i class="bi bi-music-note-beamed"></i></div>
                <h5>Music &amp; creativity</h5>
                <p>Songs, movement, and early performance confidence woven into the week — not as pressure, but as joy.</p>
                <span class="badge">All ages</span>
              </div>
            </div>
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <div class="organization-card">
                <div class="icon-box"><i class="bi ${kbIcon.languageCulture}"></i></div>
                <h5>Language &amp; culture</h5>
                <p>English and French exposure through stories, routines, and classroom language that matches how young minds learn.</p>
                <span class="badge">Daily rhythm</span>
              </div>
            </div>
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div class="organization-card">
                <div class="icon-box"><i class="bi ${kbIcon.inquiryDiscovery}"></i></div>
                <h5>Discovery &amp; inquiry</h5>
                <p>Hands-on science, numeracy games, and literacy corners that invite curiosity at every stage.</p>
                <span class="badge">Creche – primary</span>
              </div>
            </div>
          </div>
        </div>

        <div class="athletics-programs mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Movement &amp; play</h3>
          <div class="athletics-slider swiper init-swiper" data-aos="fade-up" data-aos-delay="300">
            <script type="application/json" class="swiper-config">${athleticsSwiperConfig}</script>
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/extra-curricular/power-rangers-performance-kbis-05.jpeg" class="img-fluid" loading="lazy" alt="Outdoor play">
                  <div class="athletics-content"><h5>Outdoor play</h5><p>${s.highlights[0]}</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/facilities/blue-stairwell-hero.jpeg" class="img-fluid" loading="lazy" alt="Structured play">
                  <div class="athletics-content"><h5>Structured play</h5><p>Gross-motor challenge balanced with calm transitions back to learning.</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/images/students/children-seated-in-class-gallery.jpeg" class="img-fluid" loading="lazy" alt="Collaboration">
                  <div class="athletics-content"><h5>Team games</h5><p>Cooperation, turn-taking, and healthy competition at age-appropriate levels.</p></div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>

        <div class="campus-facilities mt-5 pt-3" data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-center mb-4">Spaces children use every day</h3>
          <div class="row g-4">
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div class="facility-card">
                <img src="/assets/images/students/formal-uniform-students-kbis-01.jpeg" class="img-fluid" alt="Classrooms" loading="lazy">
                <div class="facility-info"><h5>Learning studios</h5><p>Bright, age-right layouts for literacy, numeracy, and inquiry.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div class="facility-card">
                <img src="/assets/images/students/smiling-girl-orange-uniform-kbis-02.jpeg" class="img-fluid" alt="Early years" loading="lazy">
                <div class="facility-info"><h5>Early years suites</h5><p>Secure, nurturing spaces for our youngest learners.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div class="facility-card">
                <img src="/assets/images/extra-curricular/birthday-party-classroom-kbis-06.jpeg" class="img-fluid" alt="Community" loading="lazy">
                <div class="facility-info"><h5>Community moments</h5><p>Celebrations and showcases built around encouragement.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div class="facility-card">
                <img src="/assets/images/students/smiling-boy-in-class-kbis-07.jpeg" class="img-fluid" alt="Outdoor" loading="lazy">
                <div class="facility-info"><h5>Outdoor learning</h5><p>Fresh air and movement as part of the regular timetable.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


export function getNewsDetailsHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">News article</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li><a href="/news">News</a></li><li class="current">Article</li></ol></nav>
      </div>
    </div>
    <section id="blog-details" class="blog-details section">
      <div class="container" data-aos="fade-up">
        <article class="article">
          <div class="article-header">
            <div class="meta-categories" data-aos="fade-up">
              <a href="/news" class="category">Campus</a>
              <a href="/admissions" class="category">Admissions</a>
            </div>
            <h1 class="title" data-aos="fade-up" data-aos-delay="100">Rolling admissions &amp; what to expect on a visit</h1>
            <div class="article-meta" data-aos="fade-up" data-aos-delay="200">
              <div class="author">
                <img src="/assets/images/others/school-logo.png" alt="" class="author-img" loading="lazy">
                <div class="author-info"><h4>KBIS office</h4><span>Admissions</span></div>
              </div>
              <div class="post-info">
                <span><i class="bi bi-calendar4-week"></i> Accra</span>
                <span><i class="bi bi-clock"></i> ${s.hours}</span>
                <span><i class="bi bi-geo-alt"></i> ${s.addressLine2}</span>
              </div>
            </div>
          </div>
          <div class="article-featured-image" data-aos="zoom-in">
            <img src="/assets/images/students/girl-in-orange-uniform-kbis-03.jpeg" alt="" class="img-fluid" loading="lazy">
          </div>
          <div class="article-wrapper">
            <aside class="table-of-contents" data-aos="fade-left">
              <h3>On this page</h3>
              <nav>
                <ul>
                  <li><a href="#intro" class="active">Overview</a></li>
                  <li><a href="#visit">Visiting</a></li>
                  <li><a href="#next">Next steps</a></li>
                </ul>
              </nav>
            </aside>
            <div class="article-content">
              <div class="content-section" id="intro" data-aos="fade-up">
                <p class="lead">${s.highlights[1]} Families often begin with a phone call or email, then schedule a walk-through that fits the school week.</p>
                <p>${s.legalName} serves children ${s.ages} with ${s.curriculum.toLowerCase()}. ${s.highlights[0]}</p>
              </div>
              <div class="content-section" id="visit" data-aos="fade-up">
                <h2>Your campus visit</h2>
                <p>Meet admissions, see indoor and outdoor spaces, and ask about placement for your child’s age band. There is no high-pressure assessment — we focus on readiness and fit.</p>
              </div>
              <div class="content-section" id="next" data-aos="fade-up">
                <h2>Next steps</h2>
                <p>When you are ready, we share the application pack and timeline. <a href="/contact">Contact the office</a> or call <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a>.</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  `;
}

export function getEventDetailsHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Event details</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li><a href="/events">Events</a></li><li class="current">Details</li></ol></nav>
      </div>
    </div>
    <section id="event" class="event section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-8">
            <div class="event-image mb-4" data-aos="fade-up">
              <img src="/assets/images/extra-curricular/students-on-stage-at-event.jpeg" alt="" class="img-fluid rounded" loading="lazy">
            </div>
            <div class="event-meta mb-4" data-aos="fade-up" data-aos-delay="100">
              <div class="row g-3">
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-calendar-date"></i><span>School programme</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-camera"></i><span>Photos available</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-geo-alt"></i><span>${s.addressLine2}</span></div></div>
              </div>
            </div>
            <div class="event-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Anniversary celebration</h2>
              <p>This event brought the KBIS community together for a joyful celebration of school growth, learner confidence, family support, and the culture that makes school life memorable. Children participated through performances, group presentations, music, movement, and shared moments that reflected their classroom learning and school spirit.</p>
              <p>The programme was not just a date on the calendar. It became a record of how learners express confidence, how families support school life, and how staff guide children through preparation, performance, teamwork, and celebration.</p>
              <h3 class="mt-4">How the event went</h3>
              <ul class="event-highlights">
                <li><i class="bi bi-check-circle"></i><span>Learners had opportunities to perform, present, and take part in group activities.</span></li>
                <li><i class="bi bi-check-circle"></i><span>Families and staff shared in the celebration, creating a warm community atmosphere.</span></li>
                <li><i class="bi bi-check-circle"></i><span>Photos and highlights from the day help preserve the story for parents and the wider school community.</span></li>
              </ul>
              <h3 class="mt-4">Related images</h3>
              <div class="kb-event-photo-links">
                <a href="/resources/gallery"><img src="/assets/images/extra-curricular/students-on-stage-at-event.jpeg" alt="" loading="lazy"><span>Stage moments</span></a>
                <a href="/resources/gallery"><img src="/assets/images/extra-curricular/parents-and-children-at-event.jpeg" alt="" loading="lazy"><span>Family participation</span></a>
                <a href="/resources/gallery"><img src="/assets/images/extra-curricular/students-under-event-tent.jpeg" alt="" loading="lazy"><span>School community</span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="event-sidebar">
              <div class="sidebar-widget registration-form" data-aos="fade-left" data-aos-delay="200">
                <h3>Event archive</h3>
                <p>This page records highlights from a completed KBIS event. Use the gallery to see more photos connected to school activities, trips, performances, and celebrations.</p>
                <a href="/resources/gallery" class="btn btn-register w-100">Open gallery</a>
              </div>
              <div class="sidebar-widget organizer-info" data-aos="fade-left" data-aos-delay="300">
                <h3>Recorded by</h3>
                <div class="organizer-details">
                  <div class="organizer-image"><img src="/assets/images/others/school-logo.png" class="img-fluid rounded" alt="KBIS" loading="lazy"></div>
                  <div class="organizer-content">
                    <h4>${s.shortName}</h4>
                    <p class="organizer-position">School community</p>
                    <p>For event photo or information requests:</p>
                    <div class="organizer-contact">
                      <p><i class="bi bi-envelope"></i> <a href="mailto:${s.officeEmail}">${s.officeEmail}</a></p>
                      <p><i class="bi bi-telephone"></i> <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget related-events" data-aos="fade-left" data-aos-delay="400">
                <h3>More event stories</h3>
                <div class="related-event-item">
                  <div class="related-event-date"><span class="day">01</span><span class="month">Trip</span></div>
                  <div class="related-event-info"><h4><a href="/events">Educational trips</a></h4><p><i class="bi bi-images"></i> Photos and highlights</p></div>
                </div>
                <div class="related-event-item">
                  <div class="related-event-date"><span class="day">02</span><span class="month">Grad</span></div>
                  <div class="related-event-info"><h4><a href="/events">Graduation ceremony</a></h4><p><i class="bi bi-images"></i> Ceremony moments</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}





