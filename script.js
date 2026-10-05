(function () {
  var root = document.documentElement;
  root.classList.add('js');

  var T = {
    nb: {
      'skip': 'Hopp til innhold',
      'nav.prices': 'Priser', 'nav.hours': 'Åpningstider', 'nav.contact': 'Finn oss',
      'call': 'Ring oss',
      'hero.title1': 'Klassisk', 'hero.title2': 'barbering', 'hero.title3': 'i hjertet av Skien.',
      'hero.lede': 'Skarpe klipp, rene linjer og et godt skjegg – gjort med tid og håndverk, midt i Torggata.',
      'hero.cta': 'Ring for time', 'hero.cta2': 'Se priser', 'hero.est': 'Siden 2024', 'hero.walkin': 'Walk-in er velkommen · Menn og gutter',
      'prices.eyebrow': 'Hva vi tilbyr', 'prices.title': 'Priser',
      'prices.note': 'Priser kan variere – ring oss for å bekrefte.',
      'svc.cut': 'Herreklipp', 'svc.fade': 'Fade / maskinklipp', 'svc.beard': 'Skjeggtrim',
      'svc.combo': 'Klipp + skjegg', 'svc.shave': 'Våtbarbering', 'svc.kids': 'Barneklipp',
      'hours.eyebrow': 'Velkommen innom', 'hours.title': 'Åpningstider',
      'hours.walkin': 'Ring eller kom innom – vi tar deg imot så fort vi kan.',
      'day.weekdays': 'Mandag – fredag', 'day.sat': 'Lørdag', 'day.sun': 'Søndag', 'day.closed': 'Stengt',
      'contact.eyebrow': 'Finn oss', 'contact.title': 'Torggata 15, Skien',
      'contact.call': 'Ring nå', 'contact.map': 'Vis i kart',
      'callbar': 'Ring for time',
      'org': 'Org.nr.', 'aria.nav': 'Hovedmeny',
      'meta.desc': 'Sadoun Barbershop i Torggata 15, Skien. Klassisk herreklipp, skjeggtrim og barbering. Ring 46 15 91 57.',
      'meta.ogt': 'Sadoun Barbershop – Frisør i Skien',
      'meta.ogd': 'Klassisk barbering i Torggata 15, Skien. Ring 46 15 91 57.'
    },
    en: {
      'skip': 'Skip to content',
      'nav.prices': 'Prices', 'nav.hours': 'Opening hours', 'nav.contact': 'Find us',
      'call': 'Call us',
      'hero.title1': 'Classic', 'hero.title2': 'barbering', 'hero.title3': 'in the heart of Skien.',
      'hero.lede': 'Sharp cuts, clean lines and a well-kept beard – done with time and craft, right on Torggata.',
      'hero.cta': 'Call to book', 'hero.cta2': 'See prices', 'hero.est': 'Since 2024', 'hero.walkin': 'Walk-ins welcome · Men and boys',
      'prices.eyebrow': 'What we offer', 'prices.title': 'Prices',
      'prices.note': 'Prices may vary – call us to confirm.',
      'svc.cut': 'Haircut', 'svc.fade': 'Fade / clipper cut', 'svc.beard': 'Beard trim',
      'svc.combo': 'Cut + beard', 'svc.shave': 'Wet shave', 'svc.kids': 'Kids’ cut',
      'hours.eyebrow': 'Drop by', 'hours.title': 'Opening hours',
      'hours.walkin': 'Call or walk in – we’ll see you as soon as we can.',
      'day.weekdays': 'Monday – Friday', 'day.sat': 'Saturday', 'day.sun': 'Sunday', 'day.closed': 'Closed',
      'contact.eyebrow': 'Find us', 'contact.title': 'Torggata 15, Skien',
      'contact.call': 'Call now', 'contact.map': 'Open in maps',
      'callbar': 'Call to book',
      'org': 'Org. no.', 'aria.nav': 'Main menu',
      'meta.desc': 'Sadoun Barbershop at Torggata 15, Skien. Classic men’s cuts, beard trims and shaves. Call 46 15 91 57.',
      'meta.ogt': 'Sadoun Barbershop – Barber in Skien',
      'meta.ogd': 'Classic barbering at Torggata 15, Skien. Call 46 15 91 57.'
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
    document.title = lang === 'nb'
      ? 'Sadoun Barbershop – Frisør i Skien'
      : 'Sadoun Barbershop – Barber in Skien';
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

  // Fast ring-linje (mobil): skjules mens hero-knappen eller kontaktflaten er synlig
  var callbar = document.getElementById('callbar');
  var heroCta = document.querySelector('.hero__cta');
  var contact = document.getElementById('kontakt');
  if (callbar && heroCta && contact && 'IntersectionObserver' in window) {
    var seen = { cta: false, contact: false };
    var setBar = function () {
      var hide = seen.cta || seen.contact;
      callbar.classList.toggle('is-hidden', hide);
      if (hide) { callbar.setAttribute('tabindex', '-1'); callbar.setAttribute('aria-hidden', 'true'); }
      else { callbar.removeAttribute('tabindex'); callbar.removeAttribute('aria-hidden'); }
    };
    var barIo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target === heroCta ? 'cta' : 'contact'] = e.isIntersecting; });
      setBar();
    });
    barIo.observe(heroCta);
    barIo.observe(contact);
  }

  // Innkomst ved scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px', threshold: 0.05 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }
})();
