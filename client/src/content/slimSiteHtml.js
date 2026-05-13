import { schoolData as s } from './schoolData.js';
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
              <form action="#" class="php-email-form">
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
              <img src="/assets/img/kbis/hero-learn.jpeg" class="img-fluid" alt="Learners at KBIS" loading="lazy">
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
                    <i class="bi bi-grid-1x2-fill"></i>
                    <div>
                      <span class="number">5</span>
                      <span class="label">Programme bands</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi bi-sunrise-fill"></i>
                    <div>
                      <span class="number">12h</span>
                      <span class="label">Care window</span>
                    </div>
                  </div>
                  <div class="highlight-item">
                    <i class="bi bi-shield-check"></i>
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
                  <img src="/assets/img/kbis/gallery-02.jpeg" alt="KBIS campus" class="img-fluid primary-img" loading="lazy">
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
              <div class="icon-wrapper"><i class="bi bi-book"></i></div>
              <h3>Learning studios</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/img/kbis/kbis-01.jpeg" alt="Classrooms" class="img-fluid" loading="lazy">
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
              <div class="icon-wrapper"><i class="bi bi-trophy"></i></div>
              <h3>Play &amp; movement</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/img/kbis/kbis-05.jpeg" alt="Outdoor play" class="img-fluid" loading="lazy">
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
              <div class="icon-wrapper"><i class="bi bi-house-heart"></i></div>
              <h3>Wellbeing &amp; community</h3>
            </div>
            <div class="card-content">
              <div class="facility-image">
                <img src="/assets/img/kbis/kbis-08.jpeg" alt="Community" class="img-fluid" loading="lazy">
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
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Contact</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Contact</li></ol></nav>
      </div>
    </div>
    <section id="contact" class="contact section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="contact-main-wrapper">
          <div class="map-wrapper">
            <iframe title="KBIS on Google Maps" src="https://www.google.com/maps?q=21+Quince+Street+Community+18+Spintex+Road+Accra+Ghana&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="contact-content">
            <div class="contact-cards-container" data-aos="fade-up" data-aos-delay="300">
              <div class="contact-card"><div class="icon-box"><i class="bi bi-geo-alt"></i></div><div class="contact-text"><h4>Address</h4><p>${s.addressLine1}<br>${s.addressLine2}</p></div></div>
              <div class="contact-card"><div class="icon-box"><i class="bi bi-envelope"></i></div><div class="contact-text"><h4>Email</h4><p><a href="mailto:${s.officeEmail}">${s.officeEmail}</a></p></div></div>
              <div class="contact-card"><div class="icon-box"><i class="bi bi-telephone"></i></div><div class="contact-text"><h4>Phone</h4><p><a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p></div></div>
              <div class="contact-card"><div class="icon-box"><i class="bi bi-clock"></i></div><div class="contact-text"><h4>Hours</h4><p>${s.hours}</p></div></div>
            </div>
            <div class="contact-form-container" data-aos="fade-up" data-aos-delay="400">
              <h3>Get in touch</h3>
              <p>Tell us your child’s age and what you need — a visit, fee guidance, or a conversation with admissions. We reply as quickly as we can during the school week.</p>
              <form action="#" method="post" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group"><input type="text" name="name" class="form-control" id="name" placeholder="Your name" required=""></div>
                  <div class="col-md-6 form-group mt-3 mt-md-0"><input type="email" class="form-control" name="email" id="email" placeholder="Your email" required=""></div>
                </div>
                <div class="form-group mt-3"><input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required=""></div>
                <div class="form-group mt-3"><textarea class="form-control" name="message" rows="5" placeholder="Message" required=""></textarea></div>
                <div class="my-3"><div class="loading">Loading</div><div class="error-message"></div><div class="sent-message">Your message has been sent. Thank you!</div></div>
                <div class="form-submit">
                  <button type="submit">Send message</button>
                </div>
                <p class="small text-muted mt-3 mb-0">Prefer to reach out directly? <a href="mailto:${s.officeEmail}">${s.officeEmail}</a> · <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getEventsHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">Events</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">Events</li></ol></nav>
      </div>
    </div>
    <section id="events-extended" class="events-extended section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row">
          <div class="col-lg-8">
            <div class="events-list">
              <div class="event-item" data-aos="fade-up">
                <div class="event-date"><span class="day">Sat</span><span class="month">AM</span></div>
                <div class="event-content">
                  <h3 class="event-title">Open campus mornings</h3>
                  <div class="event-meta">
                    <span><i class="bi bi-clock"></i> Term-time Saturdays · mornings</span>
                    <span><i class="bi bi-geo-alt"></i> ${s.addressLine2}</span>
                  </div>
                  <p class="event-description">Tour learning spaces, meet admissions, and see how bilingual exposure and Cambridge-inspired planning come together for your child’s age group.</p>
                  <a href="/event-details" class="btn-event-details">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
              <div class="event-item" data-aos="fade-up" data-aos-delay="100">
                <div class="event-date"><span class="day">PM</span><span class="month">Eve</span></div>
                <div class="event-content">
                  <h3 class="event-title">Parent partnership evenings</h3>
                  <div class="event-meta">
                    <span><i class="bi bi-clock"></i> Evenings · by invitation</span>
                    <span><i class="bi bi-geo-alt"></i> On campus</span>
                  </div>
                  <p class="event-description">Workshops on learning milestones, wellbeing, and how to support reading and language development at home.</p>
                  <a href="/event-details" class="btn-event-details">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
              <div class="event-item" data-aos="fade-up" data-aos-delay="200">
                <div class="event-date"><span class="day">End</span><span class="month">Term</span></div>
                <div class="event-content">
                  <h3 class="event-title">Celebrations of learning</h3>
                  <div class="event-meta">
                    <span><i class="bi bi-clock"></i> End of term</span>
                    <span><i class="bi bi-geo-alt"></i> Classrooms &amp; shared spaces</span>
                  </div>
                  <p class="event-description">Age-appropriate showcases where children share progress with pride — focused on encouragement, not pressure.</p>
                  <a href="/event-details" class="btn-event-details">Learn more <i class="bi bi-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="events-sidebar">
              <div class="sidebar-item categories" data-aos="fade-up">
                <h4>Plan with us</h4>
                <p class="small text-muted mb-3">Dates shift by term. Call or email and we will confirm the next open morning, parent evening, or showcase for your child’s age group.</p>
                <a href="tel:${s.phoneTel}" class="btn btn-outline-primary btn-sm w-100 mb-2">${s.phoneDisplay}</a>
                <a href="mailto:${s.officeEmail}" class="btn btn-primary btn-sm w-100">Email the office</a>
              </div>
              <div class="sidebar-item categories" data-aos="fade-up" data-aos-delay="100">
                <h4>Categories</h4>
                <ul class="list-unstyled">
                  <li><a href="/events">Admissions &amp; visits</a></li>
                  <li><a href="/events">Family workshops</a></li>
                  <li><a href="/events">Celebrations</a></li>
                </ul>
              </div>
              <div class="sidebar-item upcoming-events" data-aos="fade-up" data-aos-delay="200">
                <h4>Featured</h4>
                <div class="featured-event">
                  <img src="/assets/img/kbis/kbis-09.jpeg" alt="" class="img-fluid" loading="lazy">
                  <div class="featured-event-details">
                    <h5>Open campus morning</h5>
                    <span class="event-date"><i class="bi bi-calendar"></i> Book via office</span>
                    <a href="/contact" class="btn-sm btn-register">Contact us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function getNewsHtml() {
  return `
    <div class="page-title light-background">
      <div class="container d-lg-flex justify-content-between align-items-center">
        <h1 class="mb-2 mb-lg-0">News</h1>
        <nav class="breadcrumbs"><ol><li><a href="/">Home</a></li><li class="current">News</li></ol></nav>
      </div>
    </div>
    <section id="news-hero" class="news-hero section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row g-4">
          <div class="col-lg-8">
            <article class="featured-post position-relative mb-4" data-aos="fade-up">
              <img src="/assets/img/kbis/kbis-03.jpeg" alt="" class="img-fluid" loading="lazy">
              <div class="post-overlay">
                <div class="post-content">
                  <div class="post-meta">
                    <span class="category">Admissions</span>
                    <span class="date">KBIS</span>
                  </div>
                  <h2 class="post-title"><a href="/admissions">Rolling admissions remain open</a></h2>
                  <p class="post-excerpt">${s.highlights[1]} Reach out to plan a tour or ask about placement for your child’s age.</p>
                  <div class="post-author"><span>by</span> <a href="/contact">Admissions office</a></div>
                </div>
              </div>
            </article>
            <div class="row g-4">
              <div class="col-md-6">
                <article class="secondary-post" data-aos="fade-up">
                  <div class="post-image"><img src="/assets/img/kbis/kbis-10.jpeg" alt="" class="img-fluid" loading="lazy"></div>
                  <div class="post-content">
                    <div class="post-meta"><span class="category">Learning</span><span class="date">Campus</span></div>
                    <h3 class="post-title"><a href="/academics">Bilingual rhythm in the classroom</a></h3>
                    <div class="post-author"><span>by</span> <a href="/academics">Academics</a></div>
                  </div>
                </article>
              </div>
              <div class="col-md-6">
                <article class="secondary-post" data-aos="fade-up" data-aos-delay="100">
                  <div class="post-image"><img src="/assets/img/kbis/kbis-06.jpeg" alt="" class="img-fluid" loading="lazy"></div>
                  <div class="post-content">
                    <div class="post-meta"><span class="category">Wellbeing</span><span class="date">KBIS</span></div>
                    <h3 class="post-title"><a href="/contact">${s.highlights[2]}</a></h3>
                    <div class="post-author"><span>by</span> <a href="/contact">Office</a></div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="news-tabs" data-aos="fade-up" data-aos-delay="200">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#top-stories" type="button" role="tab">From campus</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#latest" type="button" role="tab">Quick links</button>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="top-stories" role="tabpanel">
                  <article class="tab-post">
                    <div class="row g-0 align-items-center">
                      <div class="col-4"><img src="/assets/img/kbis/kbis-04.jpeg" alt="" class="img-fluid" loading="lazy"></div>
                      <div class="col-8"><div class="post-content">
                        <span class="category">Visit</span>
                        <h4 class="post-title"><a href="/admissions">Plan a walk-through of classrooms</a></h4>
                        <div class="post-author">by <a href="/contact">Admissions</a></div>
                      </div></div>
                    </div>
                  </article>
                  <article class="tab-post">
                    <div class="row g-0 align-items-center">
                      <div class="col-4"><img src="/assets/img/kbis/kbis-07.jpeg" alt="" class="img-fluid" loading="lazy"></div>
                      <div class="col-8"><div class="post-content">
                        <span class="category">Programme</span>
                        <h4 class="post-title"><a href="/academics">${s.curriculum}</a></h4>
                        <div class="post-author">by <a href="/about">About KBIS</a></div>
                      </div></div>
                    </div>
                  </article>
                </div>
                <div class="tab-pane fade" id="latest" role="tabpanel">
                  <article class="tab-post">
                    <div class="row g-0 align-items-center">
                      <div class="col-4"><img src="/assets/img/kbis/logo.png" alt="" class="img-fluid" loading="lazy"></div>
                      <div class="col-8"><div class="post-content">
                        <span class="category">Contact</span>
                        <h4 class="post-title"><a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></h4>
                        <div class="post-author">by <a href="/contact">Office hours</a></div>
                      </div></div>
                    </div>
                  </article>
                  <article class="tab-post">
                    <div class="row g-0 align-items-center">
                      <div class="col-4"><img src="/assets/img/kbis/gallery-03.jpeg" alt="" class="img-fluid" loading="lazy"></div>
                      <div class="col-8"><div class="post-content">
                        <span class="category">Life</span>
                        <h4 class="post-title"><a href="/students-life">See a typical day</a></h4>
                        <div class="post-author">by <a href="/students-life">Student life</a></div>
                      </div></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
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
                  <img src="/assets/img/kbis/kbis-08.jpeg" class="img-fluid" alt="${s.principal}" loading="lazy">
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
                  <img src="/assets/img/kbis/kbis-02.jpeg" class="img-fluid" alt="Teaching team" loading="lazy">
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
                  <img src="/assets/img/kbis/kbis-01.jpeg" class="img-fluid" alt="Support staff" loading="lazy">
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
            <img src="/assets/img/kbis/gallery-02.jpeg" class="img-fluid rounded" alt="Student life" loading="lazy">
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
                <div class="icon-box"><i class="bi bi-globe-americas"></i></div>
                <h5>Language &amp; culture</h5>
                <p>English and French exposure through stories, routines, and classroom language that matches how young minds learn.</p>
                <span class="badge">Daily rhythm</span>
              </div>
            </div>
            <div class="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div class="organization-card">
                <div class="icon-box"><i class="bi bi-book"></i></div>
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
                  <img src="/assets/img/kbis/kbis-05.jpeg" class="img-fluid" loading="lazy" alt="Outdoor play">
                  <div class="athletics-content"><h5>Outdoor play</h5><p>${s.highlights[0]}</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/img/kbis/hero-play.jpeg" class="img-fluid" loading="lazy" alt="Structured play">
                  <div class="athletics-content"><h5>Structured play</h5><p>Gross-motor challenge balanced with calm transitions back to learning.</p></div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="athletics-card">
                  <img src="/assets/img/kbis/gallery-04.jpeg" class="img-fluid" loading="lazy" alt="Collaboration">
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
                <img src="/assets/img/kbis/kbis-01.jpeg" class="img-fluid" alt="Classrooms" loading="lazy">
                <div class="facility-info"><h5>Learning studios</h5><p>Bright, age-right layouts for literacy, numeracy, and inquiry.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div class="facility-card">
                <img src="/assets/img/kbis/kbis-02.jpeg" class="img-fluid" alt="Early years" loading="lazy">
                <div class="facility-info"><h5>Early years suites</h5><p>Secure, nurturing spaces for our youngest learners.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div class="facility-card">
                <img src="/assets/img/kbis/kbis-06.jpeg" class="img-fluid" alt="Community" loading="lazy">
                <div class="facility-info"><h5>Community moments</h5><p>Celebrations and showcases built around encouragement.</p></div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div class="facility-card">
                <img src="/assets/img/kbis/kbis-07.jpeg" class="img-fluid" alt="Outdoor" loading="lazy">
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
                <img src="/assets/img/kbis/logo.png" alt="" class="author-img" loading="lazy">
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
            <img src="/assets/img/kbis/kbis-03.jpeg" alt="" class="img-fluid" loading="lazy">
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
              <img src="/assets/img/kbis/kbis-10.jpeg" alt="" class="img-fluid rounded" loading="lazy">
            </div>
            <div class="event-meta mb-4" data-aos="fade-up" data-aos-delay="100">
              <div class="row g-3">
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-calendar-date"></i><span>Term-time Saturdays</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-clock"></i><span>Mornings · by appointment</span></div></div>
                <div class="col-md-4"><div class="meta-item"><i class="bi bi-geo-alt"></i><span>${s.addressLine2}</span></div></div>
              </div>
            </div>
            <div class="event-content" data-aos="fade-up" data-aos-delay="200">
              <h2>Open campus morning</h2>
              <p>Tour learning spaces, meet admissions, and see how bilingual exposure and Cambridge-inspired planning come together for your child’s age group.</p>
              <p>For the latest dates or to RSVP, please <a href="/contact">contact the office</a> or call <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a>.</p>
              <h3 class="mt-4">What you’ll see</h3>
              <ul class="event-highlights">
                <li><i class="bi bi-check-circle"></i><span>Classrooms and early-years suites</span></li>
                <li><i class="bi bi-check-circle"></i><span>Indoor and outdoor play areas</span></li>
                <li><i class="bi bi-check-circle"></i><span>Time for questions with admissions</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="event-sidebar">
              <div class="sidebar-widget registration-form" data-aos="fade-left" data-aos-delay="200">
                <h3>RSVP</h3>
                <form action="#">
                  <div class="mb-3"><label for="ev-name" class="form-label">Full name</label><input type="text" class="form-control" id="ev-name" required=""></div>
                  <div class="mb-3"><label for="ev-email" class="form-label">Email</label><input type="email" class="form-control" id="ev-email" required=""></div>
                  <div class="mb-3"><label for="ev-phone" class="form-label">Phone</label><input type="tel" class="form-control" id="ev-phone"></div>
                  <div class="d-grid"><button type="submit" class="btn btn-register">Request a slot</button></div>
                </form>
                <p class="small text-muted mt-3 mb-0">Prefer a conversation first? Use our <a href="/contact">contact form</a> or call <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a> — we will confirm your visit.</p>
              </div>
              <div class="sidebar-widget organizer-info" data-aos="fade-left" data-aos-delay="300">
                <h3>Organized by</h3>
                <div class="organizer-details">
                  <div class="organizer-image"><img src="/assets/img/kbis/logo.png" class="img-fluid rounded" alt="KBIS" loading="lazy"></div>
                  <div class="organizer-content">
                    <h4>${s.shortName}</h4>
                    <p class="organizer-position">Admissions</p>
                    <p>For questions:</p>
                    <div class="organizer-contact">
                      <p><i class="bi bi-envelope"></i> <a href="mailto:${s.officeEmail}">${s.officeEmail}</a></p>
                      <p><i class="bi bi-telephone"></i> <a href="tel:${s.phoneTel}">${s.phoneDisplay}</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget related-events" data-aos="fade-left" data-aos-delay="400">
                <h3>More on campus</h3>
                <div class="related-event-item">
                  <div class="related-event-date"><span class="day">·</span><span class="month">Eve</span></div>
                  <div class="related-event-info"><h4><a href="/events">Parent evenings</a></h4><p><i class="bi bi-geo-alt"></i> On campus</p></div>
                </div>
                <div class="related-event-item">
                  <div class="related-event-date"><span class="day">·</span><span class="month">Term</span></div>
                  <div class="related-event-info"><h4><a href="/events">Celebrations of learning</a></h4><p><i class="bi bi-geo-alt"></i> Classrooms</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
