// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu if open
    document.querySelector('.nav-links')?.classList.remove('active');
  });
});

// Toggle mobile menu
document.querySelector('.menu-toggle')?.addEventListener('click', () => {
  document.querySelector('.nav-links')?.classList.toggle('active');
});

fetch("casestudies/casestudy1.txt")
  .then(r => r.text())
  .then(t => {
    document.getElementById("content1").textContent = t;
  });

fetch("casestudies/casestudy2.txt")
  .then(r => r.text())
  .then(t => {
    document.getElementById("content2").textContent = t;
  });

