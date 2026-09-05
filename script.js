// Small scroll reveal for project sections.
const items = document.querySelectorAll('.project, .about, .contact');

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
