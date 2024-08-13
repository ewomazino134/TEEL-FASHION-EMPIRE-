document.getElementById('explore-btn').addEventListener('click', () => {
    window.location.href = '#about';
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});