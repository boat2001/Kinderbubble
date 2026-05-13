function safeCall(check, callback) {
  if (check()) callback();
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
      if (body.classList.contains('mobile-nav-active')) mobileNavToggle();
    };
  });

  document.querySelectorAll('.navmenu .toggle-dropdown').forEach((toggle) => {
    toggle.onclick = (event) => {
      event.preventDefault();
      toggle.parentNode.classList.toggle('active');
      toggle.parentNode.nextElementSibling.classList.toggle('dropdown-active');
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

  toggleScrolled();
  toggleScrollTop();
  window.addEventListener('scroll', toggleScrolled);
  window.addEventListener('scroll', toggleScrollTop);
  window.addEventListener('resize', () => {
    const headerBottom = header ? Math.round(header.getBoundingClientRect().bottom) : 64;
    const safeTop = Math.min(headerBottom + 8, Math.max(72, window.innerHeight - 220));
    document.documentElement.style.setProperty('--kb-mobile-nav-top', `${safeTop}px`);
  });
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
