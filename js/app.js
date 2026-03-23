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

  function navigate(page) {
    if (page === currentPage) return;

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
  function buildSectionCard(title, preview, bodyHTML) {
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
      essensCards.innerHTML = data.intro.map(c =>
        buildSectionCard(c.heading, truncate(c.text, 100), `<p>${c.text}</p>`)
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
         <p>${data.stillads.text}</p><p>${data.stillads.text2}</p>`
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
         <div class="principles">${principlesHTML}</div>`
      );
      activateSectionCards(paradoksCards);
    }

    // Kontekst as expandable card
    const kontekstCards = $('#kontekstCards');
    if (kontekstCards) {
      kontekstCards.innerHTML = buildSectionCard(
        'Kontekst',
        truncate(data.kontekst.pullQuote, 90),
        `<blockquote class="pull"><p>${data.kontekst.pullQuote}</p></blockquote>
         <p>${data.kontekst.text}</p>`
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
        'Det autonome nervesystem',
        truncate(data.intro, 120),
        `<p>${data.intro}</p>
         <p style="margin-top: var(--space-md); color: var(--text-dim); font-style: italic;">${data.treStater.intro}</p>`
      );
      activateSectionCards(nerveIntroCards);
    }

    // State cards
    const stateCards = $('#stateCards');
    if (stateCards) {
      stateCards.innerHTML = data.treStater.states.map(s => `
        <div class="state-card reveal">
          <div class="state-card__top">
            <div class="state-card__heading">
              <div class="state-card__indicator state-card__indicator--${s.color}"></div>
              <div>
                <span class="state-card__title">${s.title}</span>
                <span class="state-card__label">${s.label}</span>
              </div>
            </div>
            <svg class="state-card__toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="state-card__body">
            <div class="state-card__body-inner">
              <p class="state-card__desc">${s.description}</p>
              <div class="state-card__qualities">
                ${s.qualities.map(q => `<span class="state-card__quality">${q}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>
      `).join('');

      $$('.state-card', stateCards).forEach(card => {
        card.addEventListener('click', () => card.classList.toggle('open'));
      });
    }

    // Immobilisering as expandable card
    const immoCards = $('#immoCards');
    if (immoCards) {
      immoCards.innerHTML = buildSectionCard(
        data.immobilisering.title,
        truncate(data.immobilisering.pullQuote, 100),
        `<blockquote class="pull"><p>${data.immobilisering.pullQuote}</p></blockquote>
         <p>${data.immobilisering.text}</p><p>${data.immobilisering.text2}</p>`
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
         <p>${data.dynamik.text}</p>`
      );
      activateSectionCards(dynamikCards);
    }

    // Slow Way Down
    const slowText = $('#slowText');
    if (slowText) slowText.textContent = data.dynamik.slow.text;
    const slowList = $('#slowList');
    if (slowList) slowList.innerHTML = data.dynamik.slow.qualities.map(q => `<li>${q}</li>`).join('');

    // Meet Me
    const meetText = $('#meetText');
    if (meetText) meetText.textContent = data.dynamik.meet.text;
    const meetList = $('#meetList');
    if (meetList) meetList.innerHTML = data.dynamik.meet.qualities.map(q => `<li>${q}</li>`).join('');
  }

  /* ─── RUMMET ─── */
  function populateRummet() {
    const data = D.sections.rummet;

    const pull = $('#rumPull');
    if (pull) pull.innerHTML = `<p>${data.pullQuote}</p>`;

    // Five conditions as expandable cards
    const rumIntroCards = $('#rumIntroCards');
    if (rumIntroCards) {
      rumIntroCards.innerHTML = data.intro.map(c =>
        buildSectionCard(c.heading, truncate(c.text, 100), `<p>${c.text}</p>`)
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
         <p>${data.stilheden.text}</p><p>${data.stilheden.text2}</p>`
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
         <p>${data.neutral.text}</p>${data.neutral.text2 ? `<p>${data.neutral.text2}</p>` : ''}`
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
         <p>${data.dosering.text}</p>${data.dosering.text2 ? `<p>${data.dosering.text2}</p>` : ''}`
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
