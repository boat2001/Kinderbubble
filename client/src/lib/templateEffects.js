function safeCall(check, callback) {
  if (check()) callback();
}

const PDF_HREF = /\.pdf(\?|#|$)/i;
const GALLERY_EFFECTS_CONTROLLER_KEY = '__kbGalleryEffectsController__';

function wirePdfLinks(root = document) {
  root.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href') || '';
    if (!PDF_HREF.test(href)) return;
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

function clearGalleryOpenState() {
  document.body?.classList.remove('kb-gallery-open');
  document.documentElement?.classList.remove('kb-gallery-open');
}

export function initTemplateEffects() {
  const body = document.body;
  const header = document.querySelector('#header');
  const scrollTop = document.querySelector('.scroll-top');
  const preloader = document.querySelector('#preloader');
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  const toggleScrolled = () => {
    if (!header) return;
    if (!header.classList.contains('scroll-up-sticky') && !header.classList.contains('sticky-top') && !header.classList.contains('fixed-top')) {
      return;
    }
    if (window.scrollY > 100) body.classList.add('scrolled');
    else body.classList.remove('scrolled');
  };

  const toggleScrollTop = () => {
    if (!scrollTop) return;
    if (window.scrollY > 100) scrollTop.classList.add('active');
    else scrollTop.classList.remove('active');
  };

  const syncHeaderStack = () => {
    if (!header) return;
    const height = Math.round(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty('--kb-header-stack', `${height}px`);
  };

  const mobileNavToggle = () => {
    const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : 64;
    const safeTop = Math.min(headerBottom + 8, Math.max(72, window.innerHeight - 220));
    document.documentElement.style.setProperty('--kb-mobile-nav-top', `${safeTop}px`);

    body.classList.toggle('mobile-nav-active');
    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.classList.toggle('bi-list');
      mobileNavToggleBtn.classList.toggle('bi-x');
    }
  };

  safeCall(() => window.AOS, () => {
    window.AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
    });
  });

  safeCall(() => window.PureCounter, () => {
    new window.PureCounter();
  });

  safeCall(() => window.Swiper, () => {
    document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
      const configEl = swiperElement.querySelector('.swiper-config');
      if (!configEl) return;
      const config = JSON.parse(configEl.innerHTML.trim());
      new window.Swiper(swiperElement, config);
    });
  });

  safeCall(() => window.GLightbox, () => {
    window.GLightbox({ selector: '.glightbox' });
  });

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.onclick = mobileNavToggle;
  }

  document.querySelectorAll('#navmenu a').forEach((link) => {
    link.onclick = () => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      if (body.classList.contains('mobile-nav-active')) mobileNavToggle();
    };
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((toggle) => {
    const link = toggle.parentNode;
    link.onclick = (event) => {
      event.preventDefault();
      link.classList.toggle('active');
      link.nextElementSibling.classList.toggle('dropdown-active');
      event.stopImmediatePropagation();
    };
  });

  if (scrollTop) {
    scrollTop.onclick = (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  if (preloader) preloader.remove();

  wirePdfLinks();

  document
    .querySelectorAll(
      '.feature-card, .program-item, .facility-card, .organization-card, .athletics-card, .faculty-card, .secondary-post, .tab-post, .event-item, .contact-card, .post-item, .metric-card, .activity-item, .kb-rich-card, .kb-profile-card, .kb-update-card, .kb-album-card'
    )
    .forEach((card) => {
      if (card.hasAttribute('data-href')) return;
      const firstLink = card.querySelector('a[href]');
      const href = firstLink?.getAttribute('href');
      if (href && href !== '#') card.setAttribute('data-href', href);
    });

  document.querySelectorAll('[data-href]').forEach((card) => {
    card.setAttribute('tabindex', card.getAttribute('tabindex') || '0');
    card.setAttribute('role', card.getAttribute('role') || 'link');
    const open = () => {
      const href = card.getAttribute('data-href');
      if (href) window.location.href = href;
    };
    card.onclick = (event) => {
      if (event.target.closest('a, button, input, select, textarea, label')) return;
      open();
    };
    card.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        open();
      }
    };
  });

  clearGalleryOpenState();
  if (window[GALLERY_EFFECTS_CONTROLLER_KEY]) {
    window[GALLERY_EFFECTS_CONTROLLER_KEY].abort();
  }
  window[GALLERY_EFFECTS_CONTROLLER_KEY] = new AbortController();
  const gallerySignal = window[GALLERY_EFFECTS_CONTROLLER_KEY].signal;

  document.querySelectorAll('body > .kb-gallery-viewer').forEach((node) => node.remove());

  document.querySelectorAll('.kb-gallery-albums').forEach((gallery) => {
    const viewer = gallery.parentElement?.querySelector('.kb-gallery-viewer');
    if (!viewer) return;

    document.body.appendChild(viewer);

    const panel = viewer.querySelector('.kb-gallery-viewer-panel');
    panel?.addEventListener('click', (event) => event.stopPropagation(), { signal: gallerySignal });

    const panelImg = viewer.querySelector('.kb-gallery-stage img');
    const title = viewer.querySelector('.kb-gallery-caption h3');
    const caption = viewer.querySelector('.kb-gallery-caption p');
    const back = viewer.querySelector('.kb-gallery-back');
    const prev = viewer.querySelector('.kb-gallery-prev');
    const next = viewer.querySelector('.kb-gallery-next');
    const rail = viewer.querySelector('.kb-gallery-thumbrail');
    const toolbarTitle = viewer.querySelector('.kb-gallery-toolbar strong');
    const toolbarCount = viewer.querySelector('.kb-gallery-toolbar span');
    if (!panelImg || !title || !caption || !back || !prev || !next || !rail || !toolbarTitle || !toolbarCount) return;

    let slides = [];
    let activeIndex = 0;
    let lastOpenButton = null;
    let touchStartX = 0;
    let touchStartY = 0;

    const render = () => {
      const slide = slides[activeIndex];
      if (!slide?.src) return false;
      panelImg.src = slide.src;
      panelImg.alt = slide.title;
      title.textContent = slide.title;
      caption.textContent = slide.caption;
      toolbarCount.textContent = `${activeIndex + 1} / ${slides.length}`;
      rail.querySelectorAll('button').forEach((button, index) => {
        button.classList.toggle('is-active', index === activeIndex);
        button.setAttribute('aria-current', index === activeIndex ? 'true' : 'false');
      });
      return true;
    };

    const goTo = (index) => {
      if (!slides.length) return;
      activeIndex = (index + slides.length) % slides.length;
      render();
    };

    const close = () => {
      viewer.classList.remove('is-open');
      viewer.setAttribute('aria-hidden', 'true');
      panelImg.removeAttribute('src');
      rail.replaceChildren();
      slides = [];
      clearGalleryOpenState();
      if (lastOpenButton) lastOpenButton.focus();
    };

    const openAlbum = (button) => {
      slides = Array.from(button.querySelectorAll('[data-gallery-src]')).map((item) => ({
        src: item.dataset.gallerySrc || '',
        title: item.dataset.galleryTitle || '',
        caption: item.dataset.galleryCaption || '',
      })).filter((slide) => slide.src);
      if (!slides.length) {
        close();
        return;
      }

      activeIndex = 0;
      lastOpenButton = button;
      const albumTitle = button.querySelector('.kb-gallery-album-copy strong')?.textContent || 'Gallery album';
      toolbarTitle.textContent = albumTitle;
      toolbarTitle.id = 'kb-gallery-dialog-title';
      panel?.setAttribute('aria-labelledby', 'kb-gallery-dialog-title');
      rail.replaceChildren(
        ...slides.map((slide, index) => {
          const thumb = document.createElement('button');
          thumb.type = 'button';
          thumb.setAttribute('aria-label', `Show photo ${index + 1}: ${slide.title}`);
          thumb.innerHTML = `<img src="${slide.src}" alt="">`;
          thumb.onclick = () => goTo(index);
          return thumb;
        })
      );

      if (!render()) {
        close();
        return;
      }
      viewer.classList.add('is-open');
      viewer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('kb-gallery-open');
      document.documentElement.classList.add('kb-gallery-open');
      back.focus();
    };

    gallery.querySelectorAll('.kb-gallery-album').forEach((button) => {
      button.onclick = () => openAlbum(button);
    });

    back.onclick = close;
    prev.onclick = () => goTo(activeIndex - 1);
    next.onclick = () => goTo(activeIndex + 1);
    viewer.onclick = (event) => {
      if (event.target === viewer) close();
    };
    viewer.ontouchstart = (event) => {
      const touch = event.changedTouches[0];
      touchStartX = touch.clientX;
      touchStartY = touch.clientY;
    };
    viewer.ontouchend = (event) => {
      const touch = event.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const dy = touch.clientY - touchStartY;
      if (Math.abs(dx) < 48 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    };
    document.addEventListener('keydown', (event) => {
      if (!viewer.classList.contains('is-open')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') goTo(activeIndex - 1);
      if (event.key === 'ArrowRight') goTo(activeIndex + 1);
    }, { signal: gallerySignal });
  });

  toggleScrolled();
  toggleScrollTop();
  syncHeaderStack();
  window.addEventListener('scroll', toggleScrolled);
  window.addEventListener('scroll', toggleScrollTop);
  window.addEventListener('resize', () => {
    syncHeaderStack();
    const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : 64;
    const safeTop = Math.min(headerBottom + 8, Math.max(72, window.innerHeight - 220));
    document.documentElement.style.setProperty('--kb-mobile-nav-top', `${safeTop}px`);
  });
  if (document.fonts?.ready) {
    document.fonts.ready.then(syncHeaderStack).catch(() => {});
  }
}

export function initFormHandlers() {
  document.querySelectorAll('.php-email-form').forEach((form) => {
    form.onsubmit = async (event) => {
      event.preventDefault();
      const loading = form.querySelector('.loading');
      const errorMessage = form.querySelector('.error-message');
      const sentMessage = form.querySelector('.sent-message');
      if (loading) loading.style.display = 'block';
      if (errorMessage) {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
      }
      if (sentMessage) sentMessage.style.display = 'none';

      const data = new FormData(form);
      const fullName = (data.get('name') || '').toString().trim();
      const [firstName, ...rest] = fullName.split(/\s+/).filter(Boolean);
      const payload = {
        firstName: firstName || 'Website',
        lastName: rest.join(' ') || 'Visitor',
        email: (data.get('email') || '').toString().trim(),
        phone: (data.get('phone') || '').toString().trim(),
        program: (data.get('subject') || '').toString().trim(),
        message: (data.get('message') || data.get('subject') || 'Website enquiry').toString().trim(),
        source: form.dataset.formType || document.body.className || 'website',
        pagePath: window.location.pathname,
      };

      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const json = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(json.message || 'Form submission failed.');
        form.reset();
        if (sentMessage) sentMessage.style.display = 'block';
      } catch (error) {
        if (errorMessage) {
          errorMessage.textContent = error.message || 'Unable to send your message.';
          errorMessage.style.display = 'block';
        }
      } finally {
        if (loading) loading.style.display = 'none';
      }
    };
  });
}
