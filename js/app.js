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

  /* ─── Populate Content ─── */

  function populateIntro() {
    const el = $('#introContent');
    if (!el) return;
    el.innerHTML = D.sections.introduktion.content.map(c =>
      `<p class="prose-heading">${c.heading}</p><p>${c.text}</p>`
    ).join('');
  }

  function populateNormal() {
    const el = $('#normalContent');
    if (!el) return;
    el.innerHTML = D.sections.normalReaktion.content.map(c =>
      `<p class="prose-heading">${c.heading}</p><p>${c.text}</p>`
    ).join('');
  }

  function populateStages() {
    const el = $('#stages');
    if (!el) return;
    const icons = { horizontal: 'I', seated: 'II', calendar: 'III' };
    el.innerHTML = D.sections.treStadier.stages.map((s, i) => `
      <div class="stage reveal" data-stage="${i}">
        <div class="stage__top">
          <div class="stage__icon">${icons[s.icon] || (i + 1)}</div>
          <div class="stage__info">
            <h3 class="stage__title">${s.title}</h3>
            <p class="stage__desc">${s.description}</p>
          </div>
          <svg class="stage__toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="stage__body">
          <div class="stage__body-inner">
            <p>${s.text}</p>
            <p style="margin-top:12px;color:var(--text-secondary)">${s.details}</p>
          </div>
        </div>
      </div>
    `).join('');

    $$('.stage', el).forEach(stage => {
      stage.addEventListener('click', () => stage.classList.toggle('open'));
    });
  }

  function populateReactions() {
    const el = $('#reactionTags');
    if (!el) return;
    el.innerHTML = D.sections.treStadier.normaleReaktioner.items.map(r =>
      `<span class="tag">${r}</span>`
    ).join('');
  }

  function populateCase() {
    const el = $('#caseTimeline');
    if (!el) return;
    el.innerHTML = D.sections.caseEksempel.sessions.map(s => `
      <div class="case-session">
        <div class="case-session__dot"></div>
        <span class="case-session__num">Behandling ${s.number}</span>
        <h4 class="case-session__title">${s.title}</h4>
        <p class="case-session__text">${s.text}</p>
      </div>
    `).join('');
  }

  function populateNerve() {
    const intro = $('#nerveIntro');
    if (intro) intro.textContent = D.sections.nervesystem.intro;

    const sym = $('#symSigns');
    if (sym) sym.innerHTML = D.sections.nervesystem.sympatisk.tegn.map(t => `<li>${t}</li>`).join('');

    const para = $('#paraSigns');
    if (para) para.innerHTML = D.sections.nervesystem.parasympatisk.tegn.map(t => `<li>${t}</li>`).join('');
  }

  function populateInterventions() {
    const strats = D.sections.intervention.strategies;
    const slow = strats.find(s => s.id === 'sympatisk');
    const meet = strats.find(s => s.id === 'parasympatisk');

    const sp = $('#slowPrinciple');
    if (sp && slow) sp.textContent = slow.principle;
    const sl = $('#slowList');
    if (sl && slow) sl.innerHTML = slow.approaches.map(a => `<li>${a}</li>`).join('');

    const mp = $('#meetPrinciple');
    if (mp && meet) mp.textContent = meet.principle;
    const ml = $('#meetList');
    if (ml && meet) ml.innerHTML = meet.approaches.map(a => `<li>${a}</li>`).join('');
  }

  function populateSamtale() {
    const el = $('#samtaleContent');
    if (!el) return;
    el.innerHTML = D.sections.samtale.points.map(p => `<p>${p}</p>`).join('');
  }

  function populatePrinciples() {
    const el = $('#principles');
    if (!el) return;
    el.innerHTML = D.sections.principper.guidelines.map(g =>
      `<div class="principle reveal"><p class="principle__text">${g}</p></div>`
    ).join('');
  }

  function populateGreb() {
    const el = $('#greb');
    if (!el) return;
    el.innerHTML = D.sections.principper.greb.map(g =>
      `<div class="greb-item reveal">${g}</div>`
    ).join('');
  }

  function populateEmotional() {
    const el = $('#emotionalBlock');
    if (!el) return;
    const data = D.sections.foelelser;
    el.innerHTML = `
      <blockquote class="pull">
        <p>${data.subtitle}</p>
      </blockquote>
      <div class="prose">
        ${data.content.map(c => `<p class="prose-heading">${c.heading}</p><p>${c.text}</p>`).join('')}
      </div>
    `;
  }

  function populatePhases() {
    const el = $('#phases');
    if (!el) return;
    el.innerHTML = D.sections.kommunikation.phases.map(p => `
      <div class="phase reveal">
        <h3 class="phase__title">${p.phase}</h3>
        <ul class="phase__list">
          ${p.points.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  function populateSafety() {
    const el = $('#safety');
    if (!el) return;
    el.innerHTML = D.sections.sikkerhed.categories.map(c => `
      <div class="safety-cat reveal">
        <h3 class="safety-cat__title">${c.title}</h3>
        <ul class="safety-cat__list">
          ${c.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

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

    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 50) show(dx > 0 ? idx - 1 : idx + 1);
    }, { passive: true });
  }

  function populateConcepts() {
    const el = $('#concepts');
    if (!el) return;
    el.innerHTML = D.sections.begreber.items.map((c, i) => `
      <div class="concept reveal" data-concept="${i}">
        <div class="concept__header">
          <div>
            <span class="concept__term">${c.term}</span>
            <span class="concept__short">${c.short}</span>
          </div>
          <svg class="concept__toggle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        <div class="concept__body">
          <div class="concept__body-inner">${c.definition}</div>
        </div>
      </div>
    `).join('');

    $$('.concept__header', el).forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('open');
      });
    });
  }

  function populateLit() {
    const el = $('#litList');
    if (!el) return;
    el.innerHTML = D.sections.litteratur.books.map(b => `
      <div class="lit-item">
        <strong>${b.author}</strong> ${b.year ? `(${b.year})` : ''}<br>
        <em>${b.title}</em>${b.publisher ? `. ${b.publisher}` : ''}${b.type ? ` [${b.type}]` : ''}
      </div>
    `).join('');

    const btn = $('#litBtn');
    const lit = btn?.closest('.lit');
    if (btn && lit) {
      btn.addEventListener('click', () => lit.classList.toggle('open'));
    }
  }

  /* ─── Init ─── */
  function init() {
    populateIntro();
    populateNormal();
    populateStages();
    populateReactions();
    populateCase();
    populateNerve();
    populateInterventions();
    populateSamtale();
    populatePrinciples();
    populateGreb();
    populateEmotional();
    populatePhases();
    populateSafety();
    populateRefleksion();
    populateConcepts();
    populateLit();
    observeReveals();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
