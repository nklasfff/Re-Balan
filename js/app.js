// ═══════════════════════════════════════════════════
// RE-BALAN — App Logic
// ═══════════════════════════════════════════════════

(function() {
  'use strict';

  // ─── DOM References ───
  const topBar = document.getElementById('topBar');
  const topTitle = document.getElementById('topTitle');
  const menuBtn = document.getElementById('menuBtn');
  const menuOverlay = document.getElementById('menuOverlay');
  const menuPanel = document.getElementById('menuPanel');
  const bottomNav = document.getElementById('bottomNav');
  const conceptList = document.getElementById('conceptList');
  const litList = document.getElementById('litList');
  const searchOverlay = document.getElementById('searchOverlay');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchBtn = document.getElementById('searchBtn');
  const searchClose = document.getElementById('searchClose');

  // ─── State ───
  let currentView = 'hjem';
  let menuOpen = false;

  // ─── Initialize ───
  function init() {
    renderConcepts();
    renderLiterature();
    setupNavigation();
    setupMenu();
    setupExpandCards();
    setupConceptCards();
    setupScrollEffects();
    setupPillarNavigation();
    setupBackButtons();
    setupSearch();
  }

  // ─── Render Dynamic Content ───
  function renderConcepts() {
    if (!conceptList) return;
    const items = APP_DATA.sections.begreber.items;
    conceptList.innerHTML = items.map((item, i) => `
      <div class="concept-item" data-concept="${i}">
        <button class="concept-trigger">
          <div>
            <div class="concept-term">${item.term}</div>
            <div class="concept-short">${item.short}</div>
          </div>
          <span class="concept-chevron">
            <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
          </span>
        </button>
        <div class="concept-body">
          <div class="concept-definition">${item.definition}</div>
        </div>
      </div>
    `).join('');
  }

  function renderLiterature() {
    if (!litList) return;
    const books = APP_DATA.sections.litteratur.books;
    litList.innerHTML = books.map(book => `
      <div class="lit-item">
        <div class="lit-author">${book.author}</div>
        <div class="lit-title">${book.title}</div>
        <div class="lit-meta">${book.publisher}${book.year ? ' (' + book.year + ')' : ''}${book.type ? ' — ' + book.type : ''}</div>
      </div>
    `).join('');
  }

  // ─── Navigation ───
  function navigateTo(viewName, scrollTarget) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

    // Show target view
    const target = document.querySelector(`.view[data-view="${viewName}"]`);
    if (target) {
      target.classList.add('active');
      currentView = viewName;

      // Update bottom nav
      document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.view === viewName);
      });

      // Update top bar title
      const titles = {
        hjem: 'Re-Balan',
        grundlag: 'Grundlag',
        nervesystemet: 'Nervesystemet',
        praksis: 'Praksis',
        fordybelse: 'Fordybelse'
      };
      topTitle.textContent = titles[viewName] || 'Re-Balan';

      // Scroll to top or specific section
      if (scrollTarget) {
        // Make all fade-ins visible immediately when deep-linking
        target.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
        requestAnimationFrame(() => {
          const el = document.getElementById(scrollTarget);
          if (el) {
            const offset = 72;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          }
        });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
        // Trigger fade-in animations with slight delay to allow layout
        setTimeout(() => {
          target.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight + 200) {
              el.classList.add('visible');
            }
          });
          observeFadeIns();
        }, 50);
      }
    }

    // Close menu if open
    if (menuOpen) toggleMenu();
  }

  function setupNavigation() {
    // Bottom nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        navigateTo(tab.dataset.view);
      });
    });
  }

  function setupPillarNavigation() {
    document.querySelectorAll('.pillar-item').forEach(item => {
      item.addEventListener('click', () => {
        const targetView = item.dataset.target;
        const scrollTarget = item.dataset.scroll || null;
        navigateTo(targetView, scrollTarget);
      });
    });
  }

  function setupBackButtons() {
    document.querySelectorAll('.back-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo(btn.dataset.back);
      });
    });
  }

  // ─── Menu ───
  function toggleMenu() {
    menuOpen = !menuOpen;
    menuPanel.classList.toggle('active', menuOpen);
    menuOverlay.classList.toggle('active', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }

  function setupMenu() {
    menuBtn.addEventListener('click', toggleMenu);
    menuOverlay.addEventListener('click', toggleMenu);

    // Menu items — map to views and sections
    const menuMap = {
      'introduktion': { view: 'grundlag', scroll: 'sec-introduktion' },
      'normalReaktion': { view: 'grundlag', scroll: 'sec-normalReaktion' },
      'treStadier': { view: 'grundlag', scroll: 'sec-treStadier' },
      'caseEksempel': { view: 'grundlag', scroll: 'sec-case' },
      'nervesystem': { view: 'nervesystemet', scroll: 'sec-nervesystem' },
      'intervention': { view: 'nervesystemet', scroll: 'sec-intervention' },
      'samtale': { view: 'nervesystemet', scroll: 'sec-samtale' },
      'principper': { view: 'praksis', scroll: 'sec-principper' },
      'foelelser': { view: 'praksis', scroll: 'sec-foelelser' }
    };

    document.querySelectorAll('.menu-item').forEach(item => {
      item.addEventListener('click', () => {
        const key = item.dataset.section;
        const mapping = menuMap[key];
        if (mapping) {
          navigateTo(mapping.view, mapping.scroll);
        }
      });
    });
  }

  // ─── Expand Cards ───
  function setupExpandCards() {
    document.querySelectorAll('.expand-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const card = trigger.closest('.expand-card');
        card.classList.toggle('open');
      });
    });
  }

  // ─── Concept Cards ───
  function setupConceptCards() {
    // Delegate since they're rendered dynamically
    if (!conceptList) return;
    conceptList.addEventListener('click', (e) => {
      const trigger = e.target.closest('.concept-trigger');
      if (!trigger) return;
      const item = trigger.closest('.concept-item');
      item.classList.toggle('open');
    });
  }

  // ─── Scroll Effects ───
  function setupScrollEffects() {
    // Top bar scroll state
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          topBar.classList.toggle('scrolled', window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    });

    // Intersection Observer for fade-in animations
    observeFadeIns();
  }

  function observeFadeIns() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.fade-in:not(.visible)').forEach(el => {
      observer.observe(el);
    });
  }

  // ─── Search ───
  const searchIndex = [
    { title: 'Introduktion', text: 'Den terapeutiske proces et dynamisk paradoks balance dosering behandling ressourcer', view: 'grundlag', scroll: 'sec-introduktion', label: 'Grundlag' },
    { title: 'Normal Reaktion vs. Overbehandling', text: 'Den levende gråzone overbehandling kontekst klient reaktion', view: 'grundlag', scroll: 'sec-normalReaktion', label: 'Grundlag' },
    { title: 'De Tre Stadier', text: 'Briksen lige efter behandlingen dagene efter processering referencer balance', view: 'grundlag', scroll: 'sec-treStadier', label: 'Grundlag' },
    { title: 'Case-eksempel: Leverlæsion', text: 'Tinnitus lever energi vrede følelser drøm kinesisk medicin', view: 'grundlag', scroll: 'sec-case', label: 'Grundlag' },
    { title: 'Nervesystemets Dynamik', text: 'Autonome nervesystem sympatisk parasympatisk overdosering mobilisering immobilisering', view: 'nervesystemet', scroll: 'sec-nervesystem', label: 'Nervesystemet' },
    { title: 'Slow Way Down', text: 'Sympatikus tempo langsomhed hænder stemme briksens stabilitet øjne kontakt', view: 'nervesystemet', scroll: 'sec-intervention', label: 'Intervention' },
    { title: 'Meet Me', text: 'Parasympatikus kontakt tryghed nærvær møde ikke alene tillid', view: 'nervesystemet', scroll: 'sec-intervention', label: 'Intervention' },
    { title: 'Samtalens Rolle', text: 'Verbal guidning stemme tempo toneleje rytme regulering ankerpunkter vejrtrækning', view: 'nervesystemet', scroll: 'sec-samtale', label: 'Samtale' },
    { title: 'Principper for Re-balancering', text: 'Midtlinjen greb symmetriske brede overlevelse normalisering', view: 'praksis', scroll: 'sec-principper', label: 'Praksis' },
    { title: 'Det Følelsesmæssige Aspekt', text: 'Tårer følelser gennembrud overdoseringens skjulte gave sårbare potentiale', view: 'praksis', scroll: 'sec-foelelser', label: 'Praksis' },
    { title: 'Kommunikation med klienten', text: 'Før under efter behandlingen orientere reaktioner forståelsesramme', view: 'praksis', scroll: 'sec-kommunikation', label: 'Praksis' },
    { title: 'Sikkerhedsovervejelser', text: 'Nervesystemets kapacitet traumer kontraindikationer autonomi integration centrering', view: 'praksis', scroll: 'sec-sikkerhed', label: 'Praksis' },
    { title: 'Det autonome nervesystem', text: 'Sympatisk parasympatisk dynamisk balance mobilisering hvile fordøjelse', view: 'fordybelse', scroll: 'sec-begreber', label: 'Begreber' },
    { title: 'Polyvagal Teori', text: 'Stephen Porges ventral vagal dorsal social engagement immobilisering', view: 'fordybelse', scroll: 'sec-begreber', label: 'Begreber' },
    { title: 'The Neutral', text: 'Dynamisk ligevægt selvregulerende kræfter reorganisering stilhed potentialitet', view: 'fordybelse', scroll: 'sec-begreber', label: 'Begreber' },
    { title: 'Somatisk resonans', text: 'Gensidig nervesystem kommunikation spejlneuroner entrainment terapeut klient', view: 'fordybelse', scroll: 'sec-begreber', label: 'Begreber' },
    { title: 'Dosering', text: 'Tilpasning behandlingsintensitet kapacitet mindre er mere berøring varighed tempo', view: 'fordybelse', scroll: 'sec-begreber', label: 'Begreber' },
    { title: 'Tanker til eftertanke', text: 'Refleksion lytten handling dysregulering integration paradoks tempo selvregulering', view: 'fordybelse', scroll: 'sec-refleksion', label: 'Refleksion' }
  ];

  function setupSearch() {
    searchBtn.addEventListener('click', openSearch);
    searchClose.addEventListener('click', closeSearch);
    searchInput.addEventListener('input', performSearch);
    searchOverlay.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeSearch();
    });
  }

  function openSearch() {
    searchOverlay.classList.add('active');
    searchInput.value = '';
    searchResults.innerHTML = '<div class="search-empty">Begynd at skrive for at søge...</div>';
    setTimeout(() => searchInput.focus(), 100);
    document.body.style.overflow = 'hidden';
  }

  function closeSearch() {
    searchOverlay.classList.remove('active');
    document.body.style.overflow = '';
    searchInput.value = '';
  }

  function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '<div class="search-empty">Begynd at skrive for at søge...</div>';
      return;
    }

    const results = searchIndex.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.text.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-empty">Ingen resultater fundet</div>';
      return;
    }

    searchResults.innerHTML = results.map(item => `
      <div class="search-result-item" data-view="${item.view}" data-scroll="${item.scroll}">
        <div class="search-label">${item.label}</div>
        <h4>${highlightMatch(item.title, query)}</h4>
        <p>${highlightMatch(item.text, query)}</p>
      </div>
    `).join('');

    // Add click handlers to results
    searchResults.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        closeSearch();
        navigateTo(el.dataset.view, el.dataset.scroll);
      });
    });
  }

  function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text;
    return text.slice(0, idx) + '<strong>' + text.slice(idx, idx + query.length) + '</strong>' + text.slice(idx + query.length);
  }

  // ─── Start ───
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
