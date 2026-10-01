document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.menu');
  const offset = navbar.offsetHeight + 20;

  // Existing details/summary scroll logic
  document.querySelectorAll('details').forEach(details => {
    details.addEventListener('toggle', () => {
      const flexItem = details.closest('.flex-item');
      const top = flexItem.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // New: anchor link scroll logic
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);

      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });

        // Optional: update the URL hash without jumping
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });
});