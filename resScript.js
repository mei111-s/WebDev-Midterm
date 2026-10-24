(function () {
  const loader = document.getElementById('loader');
  if (!loader) return;
  const start = performance.now();
  const MIN_TIME = 6000; 
  let hidden = false;
  function hide() {
    if (hidden) return;
    hidden = true;
    loader.classList.add('done');
    document.body.classList.remove('loading');
    setTimeout(() => loader.remove(), 700);
  }
  function ready() { setTimeout(hide, Math.max(0, MIN_TIME - (performance.now() - start))); }
  if (document.readyState === 'complete') ready(); else addEventListener('load', ready);
  setTimeout(hide, 9000); 
})();

(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ICONS = {
    github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
    facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
    instagram: '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
  };
  const icon = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n]}</svg>`;

  const SOCIALS = [
    { name: 'GitHub',    icon: 'github',    url: 'https://github.com/mei111-s' },
    { name: 'Facebook',  icon: 'facebook',  url: 'https://www.facebook.com/hailey.jade.cristobal/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/j_de.0w0/' },
    { name: 'Email',     icon: 'mail',      url: 'mailto:haileyjcristobal@gmail.com' }
  ];
  $$('[data-socials]').forEach(box => {
    box.innerHTML = SOCIALS.filter(x => x.url).map(x => {
      const ext = x.url.startsWith('http') ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a class="social-btn" href="${x.url}"${ext} aria-label="${x.name}" title="${x.name}">${icon(x.icon)}</a>`;
    }).join('');
  });


  const projects = [
    {
      title: 'Tiny Haus & Tipon Haus Rates',
      type: 'Personal Project | Family Airbnb business', cat: 'web',
      summary: "A rates page for my family's Airbnb so prices can be updated easily.",
      tech: ['Vercel'],
      live: 'https://tinytiponhaus-rates.vercel.app',
      repo: 'https://github.com/mei111-s/TinyTiponHausRates',
      image: 'images/tinytiponhaus.png',
      points: [
        "Built a rates page for my family's Airbnb business, covering Tiny Haus, Tipon Haus, and the Barkada Package.",
        'Shows weekday and weekend/holiday rates, capacity, free parking, inclusions, check-in/out times, and deposit details for each property.',
        'Made so the rates can be updated whenever prices change.',
        'Deployed on Vercel as a live site.'
      ]
    },
    {
      title: 'PhilHealth Membership Registration System',
      type: 'Academic Project | PUP', cat: 'web',
      summary: 'A web-based membership registration app with database functionality.',
      tech: ['React', 'MySQL', 'Vercel'],
      live: '',
      repo: 'https://github.com/mei111-s/IM-PMRF',
      image: 'images/pmrfss.png',
      points: [
        'Developed a web-based PhilHealth membership registration application with database functionality.',
        'Used React, MySQL, and Vercel for development, database management, and deployment.',
        'Contributed to the development of the registration interface, database integration, and deployment of the application.'
      ]
    },
    {
      title: 'Android Application',
      type: 'Academic Project | PUP', cat: 'mobile',
      summary: 'An Android app with functional user interfaces and features.',
      tech: ['Java', 'Android Studio'],
      live: '',
      repo: 'https://github.com/mei111-s/OOPFinals',
      image: '',
      points: [
        'Developed an Android application with functional user interfaces and application features.',
        'Used Java and Android Studio for mobile application development.',
        "Contributed to the design, coding, and implementation of the application's functionality."
      ]
    },
    {
      title: 'OOP Portfolio Website',
      type: 'Academic Project | PUP', cat: 'web',
      summary: 'A functional website built from project requirements and deployed online.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
      live: 'https://cristobal-haileyjade-oop-portfolio.vercel.app',
      repo: 'https://github.com/mei111-s/oop-portfolio',
      image: 'images/oopportfolioss.png',
      points: [
        'Designed and developed a functional website based on project requirements.',
        'Used HTML, CSS, JavaScript, and Vercel for development and deployment.',
        "Contributed to the website's design, implementation, and deployment."
      ]
    }
  ];

  function linkButtons(p, size) {
    const sm = size ? ' sm' : '';
    let h = '';
    if (p.repo) h += `<a class="btn${sm}" href="${p.repo}" target="_blank" rel="noopener noreferrer">GitHub ${icon('github')}</a>`;
    if (p.live) h += `<a class="btn${sm} ghost" href="${p.live}" target="_blank" rel="noopener noreferrer">View project</a>`;
    return h;
  }
  const initials = t => t.split(/\s+/).filter(w => /^[A-Za-z]/.test(w)).slice(0, 2).map(w => w[0]).join('').toUpperCase();

  const list = $('#project-list');
  projects.forEach((p, i) => {
    const card = document.createElement('article');
    card.className = 'project';
    card.dataset.cat = p.cat;
    const thumb = p.image
      ? `<img class="thumb" src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy">`
      : `<div class="thumb ph" aria-hidden="true">${initials(p.title)}</div>`;
    card.innerHTML = thumb +
      `<div class="body"><h3>${p.title}</h3><p>${p.summary}</p>` +
      `<div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join('')}</div>` +
      `<div class="actions">${linkButtons(p, true)}<button type="button" class="link-btn" data-index="${i}" aria-haspopup="dialog">Details</button></div></div>`;
    list.appendChild(card);
  });

  const overlay = $('#overlay');
  let lastFocus = null;
  function openModal(i) {
    const p = projects[i];
    $('#mTitle').textContent = p.title;
    $('#mSub').textContent = p.type;
    $('#mList').innerHTML = p.points.map(x => `<li>${x}</li>`).join('');
    $('#mTags').innerHTML = p.tech.map(t => `<span class="tag">${t}</span>`).join('');
    $('#mActions').innerHTML = linkButtons(p, false);
    lastFocus = document.activeElement;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    $('#closeModal').focus();
  }
  function closeModal() {
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    if (lastFocus) lastFocus.focus();
  }
  list.addEventListener('click', e => {
    const btn = e.target.closest('button[data-index]');
    if (btn) openModal(btn.dataset.index);
  });
  $('#closeModal').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal(); });

  $$('.filters').forEach(group => {
    const target = document.getElementById(group.dataset.target);
    group.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (!chip) return;
      $$('.chip', group).forEach(c => c.setAttribute('aria-pressed', c === chip));
      const f = chip.dataset.filter;
      [...target.children].forEach(item => {
        item.classList.toggle('hide', f !== 'all' && item.dataset.cat !== f);
      });
    });
  });

  const root = document.documentElement;
  const themeBtn = $('#themeBtn');
  function setTheme(t) {
    root.dataset.theme = t;
    themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    try { localStorage.setItem('theme', t); } catch (_) {}
  }
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (_) {}
  setTheme(saved || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  themeBtn.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  const menu = $('#menu'), menuBtn = $('#menuBtn');
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open);
    menuBtn.textContent = open ? '✕' : '☰';
  });
  menu.addEventListener('click', e => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = '☰';
    }
  });

  const bar = $('#progress'), toTop = $('#toTop');
  function onScroll() {
    const h = document.documentElement;
    const pct = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = (pct * 100) + '%';
    toTop.classList.toggle('show', h.scrollTop > 500);
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  toTop.addEventListener('click', () => scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' }));

  const links = $$('#menu a');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section').forEach(s => spy.observe(s));

  const roles = ['Web Developer', 'UI/UX Designer', 'IT Student'];
  const typed = $('#typed');
  if (reduceMotion) {
    typed.textContent = roles.join(' | ');
  } else {
    let r = 0, c = 0, del = false;
    (function tick() {
      const word = roles[r];
      typed.textContent = word.slice(0, c);
      if (!del && c === word.length) { del = true; return setTimeout(tick, 1400); }
      if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
      c += del ? -1 : 1;
      setTimeout(tick, del ? 45 : 90);
    })();
  }

  const counters = $$('[data-count]');
  const countObs = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target, end = +el.dataset.count;
      if (reduceMotion) { el.textContent = end; }
      else {
        let n = 0;
        const step = setInterval(() => {
          el.textContent = ++n;
          if (n >= end) clearInterval(step);
        }, 500 / end);
      }
      obs.unobserve(el);
    });
  }, { threshold: .6 });
  counters.forEach(c => countObs.observe(c));

  const img = $('#avatar');
  img.addEventListener('error', () => {
    const d = document.createElement('div');
    d.className = 'avatar';
    d.setAttribute('role', 'img');
    d.setAttribute('aria-label', 'Initials HC');
    d.textContent = 'HC';
    img.replaceWith(d);
  });

  $('#copyBtn').addEventListener('click', async e => {
    const btn = e.currentTarget;
    try { await navigator.clipboard.writeText('haileyjcristobal@gmail.com'); btn.textContent = 'Copied!'; }
    catch (_) { btn.textContent = 'Press Ctrl+C on the email above'; }
    setTimeout(() => btn.textContent = 'Copy email', 1800);
  });
  $('#printBtn').addEventListener('click', () => print());

  const form = $('#contactForm');
  const fields = {
    name: { el: $('#name'), err: $('#nameErr'), check: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).' },
    email: { el: $('#email'), err: $('#emailErr'), check: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email, like name@example.com.' },
    msg: { el: $('#msg'), err: $('#msgErr'), check: v => v.trim().length >= 10 || 'Write at least 10 characters.' }
  };
  function validate(f) {
    const res = f.check(f.el.value);
    f.err.textContent = res === true ? '' : res;
    f.el.classList.toggle('invalid', res !== true);
    f.el.setAttribute('aria-invalid', res !== true);
    return res === true;
  }
  Object.values(fields).forEach(f => f.el.addEventListener('blur', () => validate(f)));
  Object.values(fields).forEach(f => f.el.addEventListener('input', () => { if (f.el.classList.contains('invalid')) validate(f); }));

  form.addEventListener('submit', e => {
    e.preventDefault();
    const ok = Object.values(fields).map(validate).every(Boolean);
    const status = $('#status');
    if (!ok) { status.textContent = 'Fix the highlighted fields and try again.'; return; }
    const subject = encodeURIComponent('Message from ' + fields.name.el.value.trim());
    const body = encodeURIComponent(fields.msg.el.value.trim() + '\n\nFrom: ' + fields.email.el.value.trim());
    location.href = `mailto:haileyjcristobal@gmail.com?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app. Thanks for reaching out!';
    form.reset();
  });
})();