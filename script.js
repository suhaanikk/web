// Highlight the current navigation item
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = location.pathname.split('/').pop();

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.backgroundColor = '#666';
            link.style.borderRadius = '5px';
        }
    });
});

// Handle form submission
const contactForm = document.querySelector('footer form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        alert('Thank you for reaching out! We will get back to you soon.');
        contactForm.reset(); // Clear form fields
    });
}
