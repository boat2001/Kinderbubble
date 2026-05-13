/**
 * Home page sections below <HomeHero /> — College template layout with KBIS copy & images.
 */
export function getIndexLayoutHtml(s) {
  const programRows = [
    {
      title: s.programs[0],
      blurb: 'Warm routines, sensory-rich play, and caring adults who partner closely with families from the very first day.',
      meta0: 'Early years',
      meta1: '6 mo – 2 yr',
      img: '/assets/img/kbis/kbis-02.jpeg',
      alt: 'Creche and youngest learners at KBIS',
    },
    {
      title: s.programs[1],
      blurb: 'Curiosity-led learning, early literacy and numeracy, and plenty of movement — indoors and out.',
      meta0: 'Nursery',
      meta1: '2 – 3 yr',
      img: '/assets/img/kbis/kbis-01.jpeg',
      alt: 'Nursery learners at KBIS',
    },
    {
      title: s.programs[2],
      blurb: 'Structured play, social skills, and gentle preparation for the rhythms of primary.',
      meta0: 'Kindergarten',
      meta1: '3 – 4 yr',
      img: '/assets/img/kbis/kbis-03.jpeg',
      alt: 'Kindergarten at KBIS',
    },
    {
      title: s.programs[3],
      blurb: 'A bridge year focused on confidence, independence, and foundational skills across subjects.',
      meta0: 'Reception',
      meta1: 'Age 4',
      img: '/assets/img/kbis/kbis-04.jpeg',
      alt: 'Reception learners at KBIS',
    },
  ];

  const programsGrid = programRows
    .map(
      (row, i) => `
                <div class="col-12" data-aos="fade-left" data-aos-delay="${200 + i * 100}">
                  <a href="/academics" class="kb-prog-row-link d-block text-decoration-none">
                  <div class="program-item">
                    <div class="item-icon">
                      <img src="${row.img}" alt="${row.alt}" class="img-fluid" loading="lazy">
                    </div>
                    <div class="item-content">
                      <h4>${row.title}</h4>
                      <p>${row.blurb}</p>
                      <div class="meta-info">
                        <span>${row.meta0}</span>
                        <span>${row.meta1}</span>
                      </div>
                    </div>
                    <div class="item-arrow">
                      <i class="bi bi-arrow-right"></i>
                    </div>
                  </div>
                  </a>
                </div>`
    )
    .join('');

  return `
    <section id="featured-programs" class="featured-programs section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Programs &amp; pathway</h2>
        <p>${s.curriculum} — structured play, strong academics, and a bilingual thread across the day.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-5">
          <div class="col-lg-6" data-aos="fade-right" data-aos-delay="100">
            <div class="program-banner">
              <div class="banner-image">
                <img src="/assets/img/kbis/kbis-09.jpeg" alt="Children and families on the KBIS campus" class="img-fluid" loading="lazy">
                <div class="banner-badge">
                  <span class="badge-text">${s.ages}</span>
                </div>
              </div>
              <div class="banner-info">
                <div class="program-header">
                  <h3>One campus, every stage</h3>
                  <div class="program-stats">
                    <span><i class="bi bi-sunrise-fill"></i> ${s.hours.split('·')[0].trim()}</span>
                    <span><i class="bi bi-translate"></i> English &amp; French exposure</span>
                  </div>
                </div>
                <p>${s.highlights.join(' ')}</p>
                <div class="program-details">
                  <div class="detail-item">
                    <i class="bi bi-geo-alt"></i>
                    <span>${s.addressLine2}</span>
                  </div>
                  <div class="detail-item">
                    <i class="bi bi-telephone"></i>
                    <span>${s.phoneDisplay}</span>
                  </div>
                </div>
                <a href="/academics" class="discover-btn">Explore academics</a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="programs-grid">
              <div class="row g-3">
                ${programsGrid}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="students-life-block" class="students-life-block section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Student life</h2>
        <p>Movement, creativity, and friendship — a full day designed for how young children actually grow.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row align-items-center g-5 mb-5">
          <div class="col-lg-5" data-aos="fade-right" data-aos-delay="200">
            <div class="hero-image-wrapper">
              <img src="/assets/img/kbis/gallery-02.jpeg" alt="Student life at KBIS" class="img-fluid main-image" loading="lazy">
              <div class="floating-card" data-aos="zoom-in" data-aos-delay="400">
                <div class="card-icon">
                  <i class="bi bi-balloon-heart-fill"></i>
                </div>
                <div class="card-content">
                  <span class="card-number">${s.ages}</span>
                  <span class="card-label">On one caring campus</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7" data-aos="fade-left" data-aos-delay="300">
            <div class="content-wrapper">
              <div class="section-badge" data-aos="fade-up" data-aos-delay="350">
                <span>Everyday rhythm</span>
              </div>
              <h2 data-aos="fade-up" data-aos-delay="400">Play with purpose, learning with joy</h2>
              <p class="lead-text" data-aos="fade-up" data-aos-delay="450">${s.highlights[0]} Teachers weave language, numeracy, science, and the arts into routines children understand.</p>
              <div class="info-grid" data-aos="fade-up" data-aos-delay="500">
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-calendar-event"></i>
                  </div>
                  <div class="info-text">
                    <strong>Rolling admissions</strong>
                    <span>${s.highlights[1]}</span>
                  </div>
                </div>
                <div class="info-item">
                  <div class="info-icon">
                    <i class="bi bi-shield-check"></i>
                  </div>
                  <div class="info-text">
                    <strong>Safety first</strong>
                    <span>${s.highlights[2]}</span>
                  </div>
                </div>
              </div>
              <div class="cta-section" data-aos="fade-up" data-aos-delay="600">
                <a href="/students-life" class="btn-primary">See student life</a>
                <a href="/admissions" class="btn-link">
                  <i class="bi bi-calendar-check"></i>
                  <span>Plan a visit</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="activities-showcase">
          <div class="row g-4">
            <div class="col-lg-8" data-aos="fade-right" data-aos-delay="200">
              <div class="featured-activity">
                <div class="activity-media">
                  <img src="/assets/img/kbis/hero-play.jpeg" alt="Play and discovery" class="img-fluid" loading="lazy">
                  <div class="activity-overlay">
                    <div class="overlay-content">
                      <h4>Indoor &amp; outdoor play</h4>
                      <p>${s.highlights[0]}</p>
                      <a href="/campus-facilities" class="overlay-btn" aria-label="Campus">
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-left" data-aos-delay="300">
              <div class="activities-list">
                <div class="activity-item" data-aos="slide-up" data-aos-delay="350">
                  <div class="activity-thumb">
                    <img src="/assets/img/kbis/kbis-05.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Movement &amp; motor skills</h6>
                    <p>Daily opportunities to run, climb, and build strong bodies.</p>
                  </div>
                </div>
                <div class="activity-item" data-aos="slide-up" data-aos-delay="400">
                  <div class="activity-thumb">
                    <img src="/assets/img/kbis/kbis-06.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Bilingual exposure</h6>
                    <p>Songs, stories, and classroom language in English and French.</p>
                  </div>
                </div>
                <div class="activity-item" data-aos="slide-up" data-aos-delay="450">
                  <div class="activity-thumb">
                    <img src="/assets/img/kbis/kbis-07.jpeg" alt="" class="img-fluid" loading="lazy">
                  </div>
                  <div class="activity-info">
                    <h6>Family partnership</h6>
                    <p>Clear communication so you always know how your child is growing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="stats" class="stats section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <div class="intro-content" data-aos="fade-up" data-aos-delay="200">
              <h2 class="section-heading">Numbers that reflect our focus</h2>
              <p class="section-description">${s.legalName} serves young learners with intentional ratios, long hours for working families, and a bilingual thread across the programme.</p>
            </div>
          </div>
        </div>
        <div class="row g-4 mt-4">
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-aos="flip-left" data-aos-delay="300">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi bi-grid-1x2-fill"></i></div>
                <div class="metric-value"><span>5</span></div>
              </div>
              <div class="metric-info">
                <h4>Programme bands</h4>
                <p>Creche through primary on one timeline</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-aos="flip-left" data-aos-delay="400">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi bi-translate"></i></div>
                <div class="metric-value"><span>2</span></div>
              </div>
              <div class="metric-info">
                <h4>Languages in rhythm</h4>
                <p>English and French woven through the day</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-aos="flip-left" data-aos-delay="500">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi bi-sunrise-fill"></i></div>
                <div class="metric-value"><span>12h</span></div>
              </div>
              <div class="metric-info">
                <h4>Full day on campus</h4>
                <p>${s.hours}</p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="metric-card" data-aos="flip-left" data-aos-delay="600">
              <div class="metric-header">
                <div class="metric-icon-wrapper"><i class="bi bi-heart-pulse-fill"></i></div>
                <div class="metric-value"><span>1</span></div>
              </div>
              <div class="metric-info">
                <h4>One Spintex campus</h4>
                <p>${s.addressLine1}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="recent-news" class="recent-news section">
      <div class="container section-title" data-aos="fade-up">
        <h2>From the campus</h2>
        <p>Updates families care about — admissions, learning, and wellbeing.</p>
      </div>
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4">
          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="100">
            <article class="post-item d-flex">
              <div class="post-img">
                <img src="/assets/img/kbis/kbis-03.jpeg" alt="" class="img-fluid" loading="lazy">
              </div>
              <div class="post-content flex-grow-1">
                <a href="/news" class="category">Admissions</a>
                <h2 class="post-title"><a href="/admissions">Rolling admissions &amp; campus tours</a></h2>
                <p class="post-description">${s.highlights[1]} Reach out to plan a walk-through of classrooms and play spaces.</p>
                <div class="post-meta">
                  <div class="post-author">
                    <img src="/assets/img/kbis/logo.png" alt="" class="img-fluid">
                    <span class="author-name">KBIS office</span>
                  </div>
                  <span class="post-date">Accra</span>
                </div>
              </div>
            </article>
          </div>
          <div class="col-xl-6" data-aos="fade-up" data-aos-delay="200">
            <article class="post-item d-flex">
              <div class="post-img">
                <img src="/assets/img/kbis/kbis-10.jpeg" alt="" class="img-fluid" loading="lazy">
              </div>
              <div class="post-content flex-grow-1">
                <a href="/news" class="category">Learning</a>
                <h2 class="post-title"><a href="/academics">Cambridge-inspired learning &amp; bilingual rhythm</a></h2>
                <p class="post-description">${s.curriculum}</p>
                <div class="post-meta">
                  <div class="post-author">
                    <img src="/assets/img/kbis/logo.png" alt="" class="img-fluid">
                    <span class="author-name">Academics team</span>
                  </div>
                  <span class="post-date">KBIS</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `;
}
