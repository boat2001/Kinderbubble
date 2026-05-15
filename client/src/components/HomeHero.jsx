import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { schoolData } from '../content/schoolData';

/** Headlines are similar total length for even rhythm when typing */
const SLIDES = [
  {
    id: 'play',
    prefix: 'Where young minds ',
    highlight: 'bubble',
    suffix: ' with curiosity, & play with purpose.',
    blurb:
      'Structured and free play in bright, safe spaces — because joyful children learn best when they feel at home.',
    imageSrc: '/assets/img/kbis/hero-play.jpeg',
    imageAlt: 'Children learning and playing at KBIS',
    badge: 'Play with purpose',
  },
  {
    id: 'learn',
    prefix: '',
    highlight: 'Cambridge-inspired',
    suffix: ' learning in English and French everyday.',
    blurb: schoolData.curriculum + ', with room for creativity, movement, and everyday discovery.',
    imageSrc: '/assets/img/kbis/hero-learn.jpeg',
    imageAlt: 'Classrooms and discovery at KBIS',
    badge: 'Bilingual exposure',
  },
  {
    id: 'ages',
    prefix: 'Nurturing every stage from ',
    highlight: 'six months to ten years',
    suffix: ' here in Accra.',
    blurb:
      'From creche through primary, one caring team walks with your child as they grow in confidence and character.',
    imageSrc: '/assets/img/kbis/hero-grow.jpeg',
    imageAlt: 'Primary learners building confidence at KBIS',
    badge: 'One campus family',
  },
];

const TYPE_CHAR_MS = 76;
const HOLD_MS = 3100;
const HERO_TRANSITIONS = ['fade', 'zoom', 'slide-left', 'slide-up'];

const HERO_TITLE_LH = 1.2;
const HERO_TITLE_MAX_LINES = 3;
const HERO_TITLE_MIN_PX = 12;
const HERO_TITLE_MAX_PX = 64;

function slideTotal(slide) {
  return slide.prefix.length + slide.highlight.length + slide.suffix.length;
}

function slideFullLine(slide) {
  return `${slide.prefix}${slide.highlight}${slide.suffix}`;
}

function visibleParts(typed, slide) {
  const { prefix, highlight, suffix } = slide;
  const a = prefix.length;
  const b = a + highlight.length;
  if (typed <= a) {
    return { p: prefix.slice(0, typed), h: '', s: '' };
  }
  if (typed <= b) {
    return { p: prefix, h: highlight.slice(0, typed - a), s: '' };
  }
  return { p: prefix, h: highlight, s: suffix.slice(0, typed - b) };
}

/**
 * Largest font-size (px) so `text` wraps within `maxLines` at `widthPx`, using
 * typography copied from `sampleTitleEl`.
 */
function maxFontPxForLines(measureEl, sampleTitleEl, text, widthPx, maxLines, lineHeightUnitless) {
  const cs = getComputedStyle(sampleTitleEl);
  measureEl.style.boxSizing = 'border-box';
  measureEl.style.width = `${widthPx}px`;
  measureEl.style.fontFamily = cs.fontFamily;
  measureEl.style.fontWeight = cs.fontWeight;
  measureEl.style.fontStyle = cs.fontStyle;
  measureEl.style.letterSpacing = cs.letterSpacing;
  measureEl.style.lineHeight = String(lineHeightUnitless);
  measureEl.style.wordBreak = 'break-word';
  measureEl.style.overflowWrap = 'anywhere';
  measureEl.textContent = text;

  const fits = (fontPx) => {
    measureEl.style.fontSize = `${fontPx}px`;
    const lhRaw = getComputedStyle(measureEl).lineHeight;
    let lh = parseFloat(lhRaw);
    if (Number.isNaN(lh) || lhRaw === 'normal') {
      lh = fontPx * lineHeightUnitless;
    }
    return measureEl.scrollHeight <= lh * maxLines + 1.5;
  };

  if (!fits(HERO_TITLE_MIN_PX)) return HERO_TITLE_MIN_PX;
  if (fits(HERO_TITLE_MAX_PX)) return HERO_TITLE_MAX_PX;

  let lo = HERO_TITLE_MIN_PX;
  let hi = HERO_TITLE_MAX_PX;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (fits(mid)) lo = mid;
    else hi = mid;
  }
  return lo;
}

function useHeroTitleThreeLineFit(titleRef, measureRef) {
  useLayoutEffect(() => {
    const titleEl = titleRef.current;
    const measureEl = measureRef.current;
    if (!titleEl || !measureEl) return;

    let cancelled = false;

    const run = () => {
      if (cancelled) return;
      const cs = getComputedStyle(titleEl);
      const padX = (parseFloat(cs.paddingLeft) || 0) + (parseFloat(cs.paddingRight) || 0);
      const w = Math.max(0, titleEl.clientWidth - padX);
      if (w < 48) return;

      const lines = SLIDES.map((s) => slideFullLine(s));
      let minPx = HERO_TITLE_MAX_PX;
      for (const line of lines) {
        minPx = Math.min(
          minPx,
          maxFontPxForLines(measureEl, titleEl, line, w, HERO_TITLE_MAX_LINES, HERO_TITLE_LH)
        );
      }

      titleEl.style.setProperty('--kb-hero-title-fs', `${minPx}px`);
      titleEl.style.lineHeight = String(HERO_TITLE_LH);
    };

    const schedule = () => {
      requestAnimationFrame(() => {
        if (!cancelled) run();
      });
    };

    schedule();
    const fontsP = typeof document !== 'undefined' && document.fonts?.ready ? document.fonts.ready : null;
    if (fontsP && typeof fontsP.then === 'function') {
      void fontsP.then(() => {
        if (!cancelled) schedule();
      });
    }

    const ro = new ResizeObserver(() => schedule());
    ro.observe(titleEl);
    window.addEventListener('resize', schedule);
    return () => {
      cancelled = true;
      ro.disconnect();
      window.removeEventListener('resize', schedule);
    };
  }, []);
}

export default function HomeHero() {
  const titleRef = useRef(null);
  const titleMeasureRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState(0);
  const [transition, setTransition] = useState(HERO_TRANSITIONS[0]);

  useHeroTitleThreeLineFit(titleRef, titleMeasureRef);

  const slide = SLIDES[index];
  const total = slideTotal(slide);
  const { p, h, s } = useMemo(() => visibleParts(typed, slide), [typed, index]);

  useEffect(() => {
    if (window.AOS) {
      if (typeof window.AOS.refreshHard === 'function') window.AOS.refreshHard();
      else window.AOS.refresh();
    }
  }, [index]);

  /** Typewriter + advance slide after hold */
  useEffect(() => {
    const slideNow = SLIDES[index];
    const len = slideTotal(slideNow);
    const reduced =
      typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setTyped(len);
      const hold = window.setTimeout(() => {
        setIndex((i) => (i + 1) % SLIDES.length);
      }, 6500);
      return () => window.clearTimeout(hold);
    }

    setTyped(0);
    let n = 0;
    let cancelled = false;
    let timeoutId;

    const step = () => {
      if (cancelled) return;
      n += 1;
      if (n <= len) {
        setTyped(n);
        timeoutId = window.setTimeout(step, TYPE_CHAR_MS);
      } else {
        timeoutId = window.setTimeout(() => {
          if (!cancelled) goToSlide((index + 1) % SLIDES.length);
        }, HOLD_MS);
      }
    };

    timeoutId = window.setTimeout(step, TYPE_CHAR_MS);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [index]);

  const dots = useMemo(
    () =>
      SLIDES.map((item, i) => (
        <button
          key={item.id}
          type="button"
          className={`kb-hero-dot${i === index ? ' is-active' : ''}`}
          aria-label={`Show slide ${i + 1}`}
          aria-current={i === index ? 'true' : undefined}
          onClick={() => goToSlide(i)}
        />
      )),
    [index]
  );

  const fullLine = slideFullLine(slide);
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const showCaret = !prefersReducedMotion && typed < total;

  const pickNextTransition = (current) => {
    const candidates = HERO_TRANSITIONS.filter((item) => item !== current);
    return candidates[Math.floor(Math.random() * candidates.length)] || HERO_TRANSITIONS[0];
  };

  const goToSlide = (nextIndex) => {
    if (!prefersReducedMotion) setTransition((prev) => pickNextTransition(prev));
    setIndex(nextIndex);
  };

  const heroMedia = (
    <div className={`kb-hero-media-frame kb-hero-img-stack kb-transition-${transition}`}>
      {SLIDES.map((s, i) => (
        <img
          key={s.id}
          src={s.imageSrc}
          alt={s.imageAlt}
          className={`img-fluid main-image kb-hero-stack-img${i === index ? ' is-active' : ''}`}
          width={900}
          height={720}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
      <div className="kb-hero-badge-wrap" aria-live="polite">
        <div className="badge-accredited">
          <i className="bi bi-stars" aria-hidden="true"></i>
          <span key={slide.badge}>{slide.badge}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero" className="hero section kb-hero">
      <div className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content position-relative" data-aos="fade-right" data-aos-delay="100">
              <p className="kb-hero-schoolname">{`${schoolData.legalName} (KBIS)`}</p>
              <div ref={titleMeasureRef} className="kb-hero-title-measure" aria-hidden="true" />
              <h1 ref={titleRef} className="kb-hero-title" aria-label={fullLine}>
                <span className="kb-hero-title-static">{p}</span>
                <span className="kb-hero-title-swap" key={slide.id}>
                  {h}
                </span>
                <span className="kb-hero-title-static">{s}</span>
                {showCaret ? <span className="kb-hero-caret" aria-hidden="true" /> : null}
              </h1>
              <div className="hero-media d-lg-none" data-aos="zoom-in" data-aos-delay="200">
                {heroMedia}
              </div>
              <p className="kb-hero-lead" key={slide.id}>
                {slide.blurb}
              </p>
              <div className="action-buttons">
                <NavLink to="/admissions" className="btn-primary">
                  Plan a visit
                </NavLink>
                <NavLink to="/contact" className="btn-secondary">
                  Talk to admissions
                </NavLink>
              </div>
              <div className="kb-hero-dots" role="tablist" aria-label="Hero highlights">
                {dots}
              </div>
            </div>
            <div className="col-lg-6 hero-media d-none d-lg-block" data-aos="zoom-in" data-aos-delay="200">
              {heroMedia}
            </div>
          </div>
        </div>
      </div>

      <div className="feature-cards-wrapper" data-aos="fade-up" data-aos-delay="300">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-balloon-heart-fill"></i>
                </div>
                <div className="feature-content">
                  <h3>Programs by age</h3>
                  <p>
                    <strong>{schoolData.ages}</strong> — creche, nursery, kindergarten, reception, and primary.
                    <NavLink to="/admissions" className="kb-feature-more">
                      View admissions
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-tree-fill"></i>
                </div>
                <div className="feature-content">
                  <h3>Indoor &amp; outdoor play</h3>
                  <p>{schoolData.highlights[0]} — ideal for growing bodies and imaginations.</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <div className="feature-content">
                  <h3>Safety first</h3>
                  <p>{schoolData.highlights[2]} so families can focus on learning milestones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="upcoming-event" data-aos="fade-up" data-aos-delay="400">
        <div className="container">
          <div className="event-content">
            <div className="event-date">
              <span className="day">●</span>
              <span className="month">NOW</span>
            </div>
            <div className="event-info">
              <h3>Rolling admissions &amp; campus tours</h3>
              <p>
                {schoolData.highlights[1]}. Reach us at {schoolData.phoneDisplay} — we would love to meet your
                family.
              </p>
            </div>
            <div className="event-action">
              <NavLink to="/admissions" className="btn-event">
                Admissions
              </NavLink>
              <span className="countdown">{schoolData.hours}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
