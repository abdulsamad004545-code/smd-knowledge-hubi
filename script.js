// Dismissible welcome banner (replaces the old blocking alert popup)
window.onload = function () {
  var banner = document.getElementById('welcome-banner');
  var closeBtn = document.getElementById('welcome-close');

  if (closeBtn && banner) {
    closeBtn.addEventListener('click', function () {
      banner.classList.add('hidden');
    });
  }
};

// Mobile nav toggle
var navToggle = document.getElementById('nav-toggle');
var siteNav = document.getElementById('site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', function () {
    var isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  // Close menu after tapping a link (mobile)
  siteNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Reveal sections as they scroll into view
var revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(function (el) { observer.observe(el); });
} else {
  // Fallback: just show everything
  revealEls.forEach(function (el) { el.classList.add('in-view'); });
}
