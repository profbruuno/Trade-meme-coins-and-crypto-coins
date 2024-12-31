// script.js
document.querySelectorAll('.social-media-icons a').forEach(icon => {
    icon.addEventListener('click', () => {
        alert('Opening social media link...');
    });
});

document.querySelectorAll('nav button a').forEach(button => {
    button.addEventListener('click', () => {
        alert('Opening social media link...');
    });
});
