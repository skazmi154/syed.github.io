document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Placeholder for form submission (requires backend for functionality)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted! (This is a static site, so no actual submission occurs.)');
});