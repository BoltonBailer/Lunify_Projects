// Scroll reveal for project sections, with a graceful fallback:
// if IntersectionObserver is unavailable, everything stays visible.

const items = document.querySelectorAll('.project, .about, .contact');

if (!('IntersectionObserver' in window)) {
  items.forEach(item => {
    item.style.opacity = '1';
    item.style.transform = 'none';
  });
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  items.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(25px)';
    item.style.transition = 'opacity .8s ease, transform .8s ease';
    observer.observe(item);
  });

  // Safety net: reveal anything still hidden after 2.5s
  // (e.g. if an entry never intersects).
  setTimeout(() => {
    items.forEach(item => {
      if (item.style.opacity === '0') {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }
    });
  }, 2500);
}
