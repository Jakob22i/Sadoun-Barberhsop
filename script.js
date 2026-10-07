(function () {
  var root = document.documentElement;

  var T = {
    nb: {
      'skip': 'Hopp til innhold',
      'nav.prices': 'Priser', 'nav.hours': 'Åpningstider', 'nav.contact': 'Finn oss',
      'call': 'Ring oss',
      'hero.sub': 'Frisør i Skien',
      'hero.voice': 'Ring eller kom innom. Vi tar deg imot så fort vi kan.',
      'hero.cta': 'Ring nå', 'hero.cta2': 'Se priser',
      'hero.walkin': 'Walk-in er velkommen · Menn og gutter',
      'hero.est': 'Siden 2024',
      'prices.title': 'Priser',
      'prices.note': 'Eksempelpriser – ring for å bekrefte.',
      'svc.cut': 'Herreklipp', 'svc.fade': 'Fade / maskinklipp', 'svc.beard': 'Skjeggtrim',
      'svc.combo': 'Klipp + skjegg', 'svc.shave': 'Våtbarbering', 'svc.kids': 'Barneklipp',
      'hours.title': 'Åpningstider', 'hours.flag': 'eksempeltider',
      'day.weekdays': 'Mandag – fredag', 'day.sat': 'Lørdag', 'day.sun': 'Søndag', 'day.closed': 'Stengt',
      'contact.call': 'Ring nå', 'contact.map': 'Vis i kart',
      'callbar': 'Ring nå',
      'org': 'Org.nr.', 'aria.nav': 'Hovedmeny',
      'meta.desc': 'Sadoun Barbershop i Torggata 15, Skien. Herreklipp, fade, skjegg og våtbarbering. Ring 46 15 91 57.',
      'meta.ogt': 'Sadoun Barbershop – Frisør i Skien',
      'meta.ogd': 'Frisør i Torggata 15, Skien. Walk-in er velkommen. Ring 46 15 91 57.'
    },
    en: {
      'skip': 'Skip to content',
      'nav.prices': 'Prices', 'nav.hours': 'Opening hours', 'nav.contact': 'Find us',
      'call': 'Call us',
      'hero.sub': 'Barber in Skien',
      'hero.voice': 'Call or drop in. We’ll see you as soon as we can.',
      'hero.cta': 'Call now', 'hero.cta2': 'See prices',
      'hero.walkin': 'Walk-ins welcome · Men and boys',
      'hero.est': 'Since 2024',
      'prices.title': 'Prices',
      'prices.note': 'Example prices – call to confirm.',
      'svc.cut': 'Haircut', 'svc.fade': 'Fade / clipper cut', 'svc.beard': 'Beard trim',
      'svc.combo': 'Cut + beard', 'svc.shave': 'Wet shave', 'svc.kids': 'Kids’ cut',
      'hours.title': 'Opening hours', 'hours.flag': 'example hours',
      'day.weekdays': 'Monday – Friday', 'day.sat': 'Saturday', 'day.sun': 'Sunday', 'day.closed': 'Closed',
      'contact.call': 'Call now', 'contact.map': 'Open in maps',
      'callbar': 'Call now',
      'org': 'Org. no.', 'aria.nav': 'Main menu',
      'meta.desc': 'Sadoun Barbershop at Torggata 15, Skien. Men’s cuts, fades, beard trims and wet shaves. Call 46 15 91 57.',
      'meta.ogt': 'Sadoun Barbershop – Barber in Skien',
      'meta.ogd': 'Barber at Torggata 15, Skien. Walk-ins welcome. Call 46 15 91 57.'
    }
  };

  var buttons = document.querySelectorAll('.lang__btn');

  function setLang(lang) {
    if (!T[lang]) lang = 'nb';
    var dict = T[lang];
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-aria');
      if (dict[k] != null) el.setAttribute('aria-label', dict[k]);
    });
    [['meta-desc', 'meta.desc'], ['meta-ogt', 'meta.ogt'], ['meta-ogd', 'meta.ogd']].forEach(function (p) {
      var m = document.getElementById(p[0]);
      if (m && dict[p[1]]) m.setAttribute('content', dict[p[1]]);
    });
    root.lang = lang === 'nb' ? 'nb' : 'en';
    document.title = dict['meta.ogt'];
    buttons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var saved = 'nb';
  try { saved = localStorage.getItem('lang') || 'nb'; } catch (e) {}
  if (saved !== 'nb') setLang(saved);

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  if (!('IntersectionObserver' in window)) {
    // Uten observatør: ring-linjen vises alltid, stolpen går alltid.
    var cb = document.getElementById('callbar');
    if (cb) cb.classList.add('is-shown');
    return;
  }

  // Fast ring-linje: vises når hero-knappen og knappene i kontaktflaten er ute av syn
  var callbar = document.getElementById('callbar');
  var heroCta = document.querySelector('.hero__cta');
  var contact = document.querySelector('.contact__cta');
  if (callbar && heroCta && contact) {
    var seen = { cta: false, contact: false };
    var setBar = function () {
      var show = !seen.cta && !seen.contact;
      callbar.classList.toggle('is-shown', show);
      if (show) { callbar.removeAttribute('tabindex'); callbar.removeAttribute('aria-hidden'); }
      else { callbar.setAttribute('tabindex', '-1'); callbar.setAttribute('aria-hidden', 'true'); }
    };
    callbar.setAttribute('tabindex', '-1'); callbar.setAttribute('aria-hidden', 'true');
    var barIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        // Hero-knappen regnes som synlig når mesteparten er i bildet
        seen[e.target === heroCta ? 'cta' : 'contact'] = e.target === heroCta ? e.intersectionRatio >= 0.6 : e.isIntersecting;
      });
      setBar();
    }, { threshold: [0, 0.25, 0.6, 1] });
    barIo.observe(heroCta);
    barIo.observe(contact);
  }

  // Stolpen står stille når den er utenfor syn
  var pole = document.querySelector('.pole');
  if (pole) {
    new IntersectionObserver(function (entries) {
      pole.classList.toggle('is-paused', !entries[0].isIntersecting);
    }).observe(pole);
  }
})();
