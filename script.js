const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const faq = toggle.parentNode;
    const isActive = faq.classList.contains('active');
    
    // Remove 'active' class from all FAQ sections
    toggles.forEach(otherToggle => {
      const otherFaq = otherToggle.parentNode;
      if (otherFaq !== faq) {
        otherFaq.classList.remove('active');
      }
    });

    // Toggle 'active' class on the clicked FAQ section
    faq.classList.toggle('active', !isActive);
  });
});
