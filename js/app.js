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

  /* ─── ESSENSEN ─── */
  function populateEssensen() {
    const data = D.sections.essensen;

    const pull = $('#essensPull');
    if (pull) pull.innerHTML = `<p>${data.pullQuote}</p>`;

    const intro = $('#essensIntro');
    if (intro) {
      intro.innerHTML = data.intro.map(c =>
        `<p class="prose-heading">${c.heading}</p><p>${c.text}</p>`
      ).join('');
    }

    const paradoksText = $('#paradoksText');
    if (paradoksText) paradoksText.textContent = data.paradoks.text;

    const principles = $('#paradoksPrinciples');
    if (principles) {
      principles.innerHTML = data.paradoks.principles.map(p =>
        `<div class="principle reveal"><p class="principle__text">${p}</p></div>`
      ).join('');
    }

    // Stillads
    const stilladsPull = $('#stilladsPull');
    if (stilladsPull) stilladsPull.innerHTML = `<p>${data.stillads.pullQuote}</p>`;

    const stilladsText = $('#stilladsText');
    if (stilladsText) stilladsText.innerHTML = `<p>${data.stillads.text}</p><p>${data.stillads.text2}</p>`;

    const kontekstPull = $('#kontekstPull');
    if (kontekstPull) kontekstPull.innerHTML = `<p>${data.kontekst.pullQuote}</p>`;

    const kontekstText = $('#kontekstText');
    if (kontekstText) kontekstText.innerHTML = `<p>${data.kontekst.text}</p>`;
  }

  /* ─── NERVESYSTEM ─── */
  function populateNervesystem() {
    const data = D.sections.nervesystem;

    const intro = $('#nerveIntro');
    if (intro) intro.textContent = data.intro;

    const staterIntro = $('#staterIntro');
    if (staterIntro) staterIntro.textContent = data.treStater.intro;

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

    // Immobilisering
    const immoPull = $('#immoPull');
    if (immoPull) immoPull.innerHTML = `<p>${data.immobilisering.pullQuote}</p>`;

    const immoText = $('#immoText');
    if (immoText) immoText.innerHTML = `<p>${data.immobilisering.text}</p><p>${data.immobilisering.text2}</p>`;

    // Dynamik
    const dynamikPull = $('#dynamikPull');
    if (dynamikPull) dynamikPull.innerHTML = `<p>${data.dynamik.pullQuote}</p>`;

    const dynamikText = $('#dynamikText');
    if (dynamikText) dynamikText.innerHTML = `<p>${data.dynamik.text}</p>`;

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

    const intro = $('#rumIntro');
    if (intro) {
      intro.innerHTML = data.intro.map(c =>
        `<p class="prose-heading">${c.heading}</p><p>${c.text}</p>`
      ).join('');
    }

    // Stilheden
    const stilhedPoem = $('#stilhedPoem');
    if (stilhedPoem && data.stilheden && data.stilheden.poem) {
      stilhedPoem.innerHTML = `
        <p class="poem__text">${data.stilheden.poem.text.replace(/\n/g, '<br>')}</p>
        <cite class="poem__author">${data.stilheden.poem.author}</cite>
      `;
    }

    const stilhedPull = $('#stilhedPull');
    if (stilhedPull && data.stilheden) stilhedPull.innerHTML = `<p>${data.stilheden.pullQuote}</p>`;

    const stilhedText = $('#stilhedText');
    if (stilhedText && data.stilheden) stilhedText.innerHTML = `<p>${data.stilheden.text}</p><p>${data.stilheden.text2}</p>`;

    // The Neutral
    const neutralPull = $('#neutralPull');
    if (neutralPull) neutralPull.innerHTML = `<p>${data.neutral.pullQuote}</p>`;

    const neutralText = $('#neutralText');
    if (neutralText) neutralText.innerHTML = `<p>${data.neutral.text}</p>${data.neutral.text2 ? `<p>${data.neutral.text2}</p>` : ''}`;

    const neutralQualities = $('#neutralQualities');
    if (neutralQualities) {
      neutralQualities.innerHTML = data.neutral.qualities.map(q =>
        `<span class="tag">${q}</span>`
      ).join('');
    }

    // Dosering
    const doseringPull = $('#doseringPull');
    if (doseringPull) doseringPull.innerHTML = `<p>${data.dosering.pullQuote}</p>`;

    const doseringText = $('#doseringText');
    if (doseringText) doseringText.innerHTML = `<p>${data.dosering.text}</p>${data.dosering.text2 ? `<p>${data.dosering.text2}</p>` : ''}`;

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

  /* ─── Init ─── */
  function init() {
    populateEssensen();
    populateNervesystem();
    populateRummet();
    populateFaenomener();
    populateRefleksion();
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
