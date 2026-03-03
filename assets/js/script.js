// Tab navigation
const tabBtns = document.querySelectorAll('.tab-btn');
const sections = document.querySelectorAll('.content-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        sections.forEach(section => {
            section.classList.remove('active');
            if (section.dataset.section === targetTab) {
                section.classList.add('active');
            }
        });
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);
themeToggle.textContent = currentTheme === 'dark' ? '🌙' : '☀️';

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '🌙' : '☀️';
});
