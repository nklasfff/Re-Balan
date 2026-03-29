/* ═══════════════════════════════════════════════════
   RE-BALAN — App Logic
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  const D = APP_DATA;
  const $ = (s, p) => (p || document).querySelector(s);
  const $$ = (s, p) => [...(p || document).querySelectorAll(s)];

  /* ─── Navigation ─── */
  const nav = $('#nav');
  const burger = $('#burger');
  const menu = $('#menu');
  let currentPage = 'home';
  let previousPage = 'home';

  function navigate(page) {
    if (page === currentPage) return;
    previousPage = currentPage;

    const cur = $(`.page[data-page="${currentPage}"]`);
    if (cur) cur.classList.remove('active');

    const next = $(`.page[data-page="${page}"]`);
    if (!next) return;
    next.classList.add('active', 'entering');
    setTimeout(() => next.classList.remove('entering'), 600);

    $$('.nav__link').forEach(l => l.classList.toggle('active', l.dataset.navigate === page));

    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'instant' });
    closeMenu();
    observeReveals();
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-navigate]');
    if (btn) {
      e.preventDefault();
      navigate(btn.dataset.navigate);
    }
  });

  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.classList.toggle('open', open);
  });

  function closeMenu() {
    menu.classList.remove('open');
    burger.classList.remove('open');
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ─── Scroll Reveal ─── */
  let observer;

  function observeReveals() {
    if (observer) observer.disconnect();
    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    $$('.reveal').forEach(el => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });
  }

  /* ─── Section Card Helper ─── */
  function buildSectionCard(title, preview, bodyHTML, dwellKey) {
    const dwellInvite = dwellKey && D.dwell[dwellKey]
      ? `<div class="dwell-invite"><button class="dwell-invite__btn" data-dwell="${dwellKey}">Bliv her lidt</button></div>`
      : '';
    return `
      <div class="section-card reveal">
        <div class="section-card__header">
          <div>
            <h3 class="section-card__title">${title}</h3>
            <p class="section-card__preview">${preview}</p>
          </div>
          <svg class="section-card__toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="section-card__body">
          <div class="section-card__body-inner">
            ${bodyHTML}
            ${dwellInvite}
          </div>
        </div>
      </div>`;
  }

  function activateSectionCards(container) {
    $$('.section-card__header', container).forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        const isOpen = card.classList.contains('open');
        // Close siblings
        $$('.section-card.open', container).forEach(c => {
          if (c !== card) c.classList.remove('open');
        });
        card.classList.toggle('open', !isOpen);
      });
    });
  }

  /* ─── Truncate preview ─── */
  function truncate(str, len) {
    if (str.length <= len) return str;
    return str.substring(0, str.lastIndexOf(' ', len)) + ' …';
  }

  /* ─── ESSENSEN ─── */
  function populateEssensen() {
    const data = D.sections.essensen;

    const pull = $('#essensPull');
    if (pull) pull.innerHTML = `<p>${data.pullQuote}</p>`;

    // Intro sections as expandable cards
    const essensCards = $('#essensCards');
    if (essensCards) {
      essensCards.innerHTML = data.intro.map((c, i) =>
        buildSectionCard(c.heading, truncate(c.text, 100), `<p>${c.text}</p>`, i === 0 ? 'essens-intro' : null)
      ).join('');
      activateSectionCards(essensCards);
    }

    // Stillads as expandable card
    const stilladsCards = $('#stilladsCards');
    if (stilladsCards) {
      stilladsCards.innerHTML = buildSectionCard(
        data.stillads.title,
        truncate(data.stillads.pullQuote, 90),
        `<blockquote class="pull"><p>${data.stillads.pullQuote}</p></blockquote>
         <p>${data.stillads.text}</p><p>${data.stillads.text2}</p>`,
        'essens-stillads'
      );
      activateSectionCards(stilladsCards);
    }

    // Paradoks as expandable card with principles inside
    const paradoksCards = $('#paradoksCards');
    if (paradoksCards) {
      const principlesHTML = data.paradoks.principles.map(p =>
        `<div class="principle"><p class="principle__text">${p}</p></div>`
      ).join('');
      paradoksCards.innerHTML = buildSectionCard(
        data.paradoks.title,
        truncate(data.paradoks.text, 100),
        `<p>${data.paradoks.text}</p>
         <div class="principles">${principlesHTML}</div>`,
        'essens-paradoks'
      );
      activateSectionCards(paradoksCards);
    }

    // Kontekst as expandable card
    const kontekstCards = $('#kontekstCards');
    if (kontekstCards) {
      kontekstCards.innerHTML = buildSectionCard(
        'Sammenhæng',
        truncate(data.kontekst.pullQuote, 90),
        `<blockquote class="pull"><p>${data.kontekst.pullQuote}</p></blockquote>
         <p>${data.kontekst.text}</p>`,
        'essens-kontekst'
      );
      activateSectionCards(kontekstCards);
    }
  }

  /* ─── NERVESYSTEM ─── */
  function populateNervesystem() {
    const data = D.sections.nervesystem;

    // Intro as expandable card (it's very long)
    const nerveIntroCards = $('#nerveIntroCards');
    if (nerveIntroCards) {
      nerveIntroCards.innerHTML = buildSectionCard(
        'Den kropslige visdom',
        truncate(data.intro, 120),
        `<p>${data.intro}</p>
         <p style="margin-top: var(--space-md); color: var(--text-dim); font-style: italic;">${data.treStater.intro}</p>`,
        'nerve-intro'
      );
      activateSectionCards(nerveIntroCards);
    }

    // Three states as section-cards (not clinical state-cards)
    const stateCards = $('#stateCards');
    if (stateCards) {
      const stateKeys = ['nerve-tryghed', 'nerve-mobil', 'nerve-immobil'];
      stateCards.innerHTML = data.treStater.states.map((s, i) =>
        buildSectionCard(s.title, s.label, `<p>${s.description}</p>`, stateKeys[i])
      ).join('');
      activateSectionCards(stateCards);
    }

    // Immobilisering as expandable card
    const immoCards = $('#immoCards');
    if (immoCards) {
      immoCards.innerHTML = buildSectionCard(
        data.immobilisering.title,
        truncate(data.immobilisering.pullQuote, 100),
        `<blockquote class="pull"><p>${data.immobilisering.pullQuote}</p></blockquote>
         <p>${data.immobilisering.text}</p><p>${data.immobilisering.text2}</p>`,
        'nerve-under'
      );
      activateSectionCards(immoCards);
    }

    // Dynamik as expandable card
    const dynamikCards = $('#dynamikCards');
    if (dynamikCards) {
      dynamikCards.innerHTML = buildSectionCard(
        data.dynamik.title,
        truncate(data.dynamik.pullQuote, 100),
        `<blockquote class="pull"><p>${data.dynamik.pullQuote}</p></blockquote>
         <p>${data.dynamik.text}</p>${data.dynamik.text2 ? `<p>${data.dynamik.text2}</p>` : ''}`,
        'nerve-dynamik'
      );
      activateSectionCards(dynamikCards);
    }
  }

  /* ─── RUMMET ─── */
  function populateRummet() {
    const data = D.sections.rummet;

    const pull = $('#rumPull');
    if (pull) pull.innerHTML = `<p>${data.pullQuote}</p>`;

    // Five conditions as expandable cards
    const rumIntroCards = $('#rumIntroCards');
    if (rumIntroCards) {
      rumIntroCards.innerHTML = data.intro.map((c, i) =>
        buildSectionCard(c.heading, truncate(c.text, 100), `<p>${c.text}</p>`, i === 0 ? 'rum-intro' : null)
      ).join('');
      activateSectionCards(rumIntroCards);
    }

    // Stilheden poem (stays visible)
    const stilhedPoem = $('#stilhedPoem');
    if (stilhedPoem && data.stilheden && data.stilheden.poem) {
      stilhedPoem.innerHTML = `
        <p class="poem__text">${data.stilheden.poem.text.replace(/\n/g, '<br>')}</p>
        <cite class="poem__author">${data.stilheden.poem.author}</cite>
      `;
    }

    // Stilheden as expandable card
    const stilhedCards = $('#stilhedCards');
    if (stilhedCards && data.stilheden) {
      stilhedCards.innerHTML = buildSectionCard(
        data.stilheden.title,
        truncate(data.stilheden.pullQuote, 100),
        `<blockquote class="pull"><p>${data.stilheden.pullQuote}</p></blockquote>
         <p>${data.stilheden.text}</p><p>${data.stilheden.text2}</p>`,
        'rum-stilhed'
      );
      activateSectionCards(stilhedCards);
    }

    // The Neutral as expandable card
    const neutralCards = $('#neutralCards');
    if (neutralCards) {
      neutralCards.innerHTML = buildSectionCard(
        data.neutral.title,
        truncate(data.neutral.pullQuote, 100),
        `<blockquote class="pull"><p>${data.neutral.pullQuote}</p></blockquote>
         <p>${data.neutral.text}</p>${data.neutral.text2 ? `<p>${data.neutral.text2}</p>` : ''}`,
        'rum-neutral'
      );
      activateSectionCards(neutralCards);
    }

    const neutralQualities = $('#neutralQualities');
    if (neutralQualities) {
      neutralQualities.innerHTML = data.neutral.qualities.map(q =>
        `<span class="tag">${q}</span>`
      ).join('');
    }

    // Dosering as expandable card
    const doseringCards = $('#doseringCards');
    if (doseringCards) {
      doseringCards.innerHTML = buildSectionCard(
        data.dosering.title,
        truncate(data.dosering.pullQuote, 100),
        `<blockquote class="pull"><p>${data.dosering.pullQuote}</p></blockquote>
         <p>${data.dosering.text}</p>${data.dosering.text2 ? `<p>${data.dosering.text2}</p>` : ''}`,
        'rum-dosering'
      );
      activateSectionCards(doseringCards);
    }

    const doseringQualities = $('#doseringQualities');
    if (doseringQualities) {
      doseringQualities.innerHTML = data.dosering.tegn.map(t =>
        `<span class="tag">${t}</span>`
      ).join('');
    }
  }

  /* ─── FÆNOMENER ─── */
  function populateFaenomener() {
    const el = $('#concepts');
    if (!el) return;
    el.innerHTML = D.sections.faenomener.items.map((c, i) => `
      <div class="concept reveal" data-concept="${i}">
        <div class="concept__header">
          <div>
            <span class="concept__term">${c.term}</span>
            <span class="concept__short">${c.short}</span>
          </div>
          <svg class="concept__toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="concept__body">
          <div class="concept__body-inner">${c.text}</div>
        </div>
      </div>
    `).join('');

    $$('.concept__header', el).forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
      });
    });
  }

  /* ─── REFLEKSION ─── */
  function populateRefleksion() {
    const track = $('#carouselTrack');
    if (!track) return;
    const questions = D.sections.refleksion.questions;
    track.innerHTML = questions.map((q, i) => `
      <div class="carousel__card${i === 0 ? ' active' : ''}">
        <p>${q}</p>
      </div>
    `).join('');

    let idx = 0;
    const cards = $$('.carousel__card', track);
    const counter = $('#counter');

    function show(n) {
      cards.forEach(c => c.classList.remove('active'));
      idx = (n + cards.length) % cards.length;
      cards[idx].classList.add('active');
      if (counter) counter.textContent = `${idx + 1} / ${cards.length}`;
    }

    const prev = $('#prevBtn');
    const next = $('#nextBtn');
    if (prev) prev.addEventListener('click', () => show(idx - 1));
    if (next) next.addEventListener('click', () => show(idx + 1));

    // Swipe support
    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(dx > 0 ? idx - 1 : idx + 1);
    }, { passive: true });
  }

  /* ─── Onboarding ─── */
  function initOnboarding() {
    const onboarding = $('#onboarding');
    if (!onboarding) return;

    // Skip if already seen
    if (localStorage.getItem('rebal_onboarded')) {
      onboarding.remove();
      return;
    }

    document.body.classList.add('onboarding-active');
    onboarding.classList.add('entering');

    let step = 0;
    const totalSteps = 4;
    const steps = $$('.onboarding__step', onboarding);
    const dots = $$('.onboarding__dot', onboarding);
    const btn = $('#onboardingBtn');
    const btnText = btn ? btn.querySelector('.onboarding__btn-text') : null;

    function goToStep(n) {
      const cur = steps[step];
      const next = steps[n];
      if (!cur || !next || n === step) return;

      cur.classList.add('exiting');
      cur.classList.remove('active');
      setTimeout(() => cur.classList.remove('exiting'), 800);

      next.classList.add('active');

      dots.forEach((d, i) => d.classList.toggle('active', i === n));

      step = n;

      // Update button text on last step
      if (btnText) {
        btnText.textContent = step === totalSteps - 1 ? 'Træd ind' : 'Fortsæt';
      }
    }

    // Button click
    if (btn) {
      btn.addEventListener('click', () => {
        if (step < totalSteps - 1) {
          goToStep(step + 1);
        } else {
          // Finish onboarding
          localStorage.setItem('rebal_onboarded', '1');
          document.body.classList.remove('onboarding-active');
          onboarding.classList.add('farewell');
          setTimeout(() => onboarding.remove(), 1400);
        }
      });
    }

    // Dot clicks
    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        const target = parseInt(dot.dataset.dot, 10);
        if (!isNaN(target)) goToStep(target);
      });
    });

    // Swipe support
    let startX = 0;
    onboarding.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    }, { passive: true });
    onboarding.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) {
        if (dx < 0 && step < totalSteps - 1) goToStep(step + 1);
        if (dx > 0 && step > 0) goToStep(step - 1);
      }
    }, { passive: true });

    // Remove entering class after initial animation
    setTimeout(() => onboarding.classList.remove('entering'), 2000);
  }

  /* ─── Init ─── */
  function init() {
    populateEssensen();
    populateNervesystem();
    populateRummet();
    populateFaenomener();
    populateRefleksion();
    observeReveals();
    initOnboarding();
    initTheme();
    initDwell();
  }

  /* ─── Dwell — Contemplative rooms ─── */
  const dwellIllos = {
    breath: `<svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="85" stroke="rgba(122,154,181,0.2)" stroke-width="0.7"/><circle cx="100" cy="100" r="65" stroke="rgba(90,138,106,0.3)" stroke-width="0.8"/><circle cx="100" cy="100" r="45" stroke="rgba(122,154,181,0.35)" stroke-width="0.9"/><circle cx="100" cy="100" r="25" stroke="rgba(160,96,80,0.35)" stroke-width="1"/><circle cx="100" cy="100" r="4" fill="rgba(196,213,226,0.55)"/></svg>`,
    stillads: `<svg viewBox="0 0 240 200" fill="none"><line x1="60" y1="30" x2="60" y2="170" stroke="rgba(122,154,181,0.6)" stroke-width="1.8" stroke-linecap="round"/><line x1="180" y1="30" x2="180" y2="170" stroke="rgba(122,154,181,0.6)" stroke-width="1.8" stroke-linecap="round"/><line x1="60" y1="50" x2="180" y2="50" stroke="rgba(122,154,181,0.45)" stroke-width="1.2"/><line x1="60" y1="100" x2="180" y2="100" stroke="rgba(122,154,181,0.45)" stroke-width="1.2"/><line x1="60" y1="150" x2="180" y2="150" stroke="rgba(122,154,181,0.45)" stroke-width="1.2"/><circle cx="120" cy="100" r="22" stroke="rgba(160,96,80,0.6)" stroke-width="1.2" fill="rgba(160,96,80,0.1)"/><circle cx="120" cy="100" r="6" fill="rgba(196,213,226,0.6)"/></svg>`,
    relation: `<svg viewBox="0 0 220 140" fill="none"><circle cx="85" cy="70" r="45" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><circle cx="135" cy="70" r="45" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><ellipse cx="110" cy="70" rx="14" ry="35" fill="rgba(61,106,138,0.15)" stroke="rgba(122,154,181,0.5)" stroke-width="0.8"/></svg>`,
    spectrum: `<svg viewBox="0 0 260 90" fill="none"><line x1="30" y1="45" x2="230" y2="45" stroke="rgba(122,154,181,0.3)" stroke-width="1"/><circle cx="55" cy="45" r="12" stroke="rgba(80,112,160,0.6)" stroke-width="1" fill="rgba(80,112,160,0.12)"/><circle cx="130" cy="45" r="15" stroke="rgba(90,138,106,0.6)" stroke-width="1" fill="rgba(90,138,106,0.12)"/><circle cx="205" cy="45" r="12" stroke="rgba(160,96,80,0.6)" stroke-width="1" fill="rgba(160,96,80,0.12)"/></svg>`,
    waves: `<svg viewBox="0 0 260 80" fill="none"><path d="M20,40 Q55,15 90,40 Q125,65 160,40 Q195,15 230,40 Q245,50 250,40" stroke="rgba(160,96,80,0.55)" stroke-width="1.2" fill="none"/><path d="M20,40 Q75,28 130,40 Q185,52 240,40" stroke="rgba(80,112,160,0.55)" stroke-width="1.2" fill="none"/><circle cx="130" cy="40" r="4" fill="rgba(196,213,226,0.5)"/></svg>`,
    freeze: `<svg viewBox="0 0 200 160" fill="none"><ellipse cx="100" cy="80" rx="85" ry="55" stroke="rgba(160,96,80,0.45)" stroke-width="1" stroke-dasharray="4 4" fill="rgba(160,96,80,0.03)"/><ellipse cx="100" cy="80" rx="55" ry="38" stroke="rgba(122,154,181,0.4)" stroke-width="1" stroke-dasharray="3 3" fill="rgba(122,154,181,0.03)"/><ellipse cx="100" cy="80" rx="28" ry="20" stroke="rgba(80,112,160,0.55)" stroke-width="1.2" fill="rgba(80,112,160,0.1)"/><circle cx="100" cy="80" r="4" fill="rgba(196,213,226,0.5)"/></svg>`,
    space: `<svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="60" stroke="rgba(122,154,181,0.35)" stroke-width="1" stroke-dasharray="6 4"/><line x1="100" y1="30" x2="100" y2="10" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><line x1="100" y1="170" x2="100" y2="190" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><line x1="30" y1="100" x2="10" y2="100" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><line x1="170" y1="100" x2="190" y2="100" stroke="rgba(122,154,181,0.4)" stroke-width="1"/></svg>`,
    midtlinje: `<svg viewBox="0 0 80 200" fill="none"><line x1="40" y1="15" x2="40" y2="185" stroke="rgba(122,154,181,0.55)" stroke-width="1.5" stroke-linecap="round"/><circle cx="40" cy="50" r="10" stroke="rgba(122,154,181,0.4)" stroke-width="1" fill="none"/><circle cx="40" cy="100" r="7" stroke="rgba(122,154,181,0.5)" stroke-width="1" fill="none"/><circle cx="40" cy="140" r="4" stroke="rgba(122,154,181,0.6)" stroke-width="1" fill="rgba(196,213,226,0.4)"/></svg>`,
    neutral: `<svg viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="4" fill="rgba(196,213,226,0.6)"/><circle cx="100" cy="100" r="30" stroke="rgba(122,154,181,0.4)" stroke-width="1"/><circle cx="100" cy="100" r="60" stroke="rgba(122,154,181,0.25)" stroke-width="1"/><line x1="30" y1="100" x2="70" y2="100" stroke="rgba(122,154,181,0.35)" stroke-width="1"/><line x1="130" y1="100" x2="170" y2="100" stroke="rgba(122,154,181,0.35)" stroke-width="1"/></svg>`
  };

  function openDwell(key) {
    const d = D.dwell[key];
    if (!d) return;

    const illoEl = $('#dwellIllo');
    const essEl = $('#dwellEssence');
    const qEl = $('#dwellQuestion');

    illoEl.innerHTML = dwellIllos[d.illo] || dwellIllos.breath;
    essEl.textContent = d.essence;
    qEl.textContent = D.sections.refleksion.questions[d.q];

    // Reset animations by re-rendering
    const dwell = $('.dwell');
    dwell.style.animation = 'none';
    dwell.offsetHeight;
    dwell.style.animation = '';

    [illoEl, essEl, qEl, $('#dwellReturn')].forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });

    navigate('dwell');
  }

  function initDwell() {
    const returnBtn = $('#dwellReturn');
    if (returnBtn) {
      returnBtn.addEventListener('click', () => navigate(previousPage));
    }

    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-dwell]');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        openDwell(btn.dataset.dwell);
      }
    });
  }

  /* ─── Theme Toggle ─── */
  function initTheme() {
    const saved = localStorage.getItem('re-balan-theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);

    const toggle = $('#themeToggle');
    if (!toggle) return;

    function applyThemeMeta(theme) {
      const meta = document.querySelector('meta[name="theme-color"]');
      if (meta) meta.setAttribute('content', theme === 'light' ? '#767A81' : '#080c14');
    }

    applyThemeMeta(saved);

    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      if (next === 'dark') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', next);
      }
      localStorage.setItem('re-balan-theme', next);
      applyThemeMeta(next);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
