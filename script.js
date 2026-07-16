document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.content-section');

    function showSection(id) {
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(id)?.classList.add('active');

        navButtons.forEach(btn => btn.classList.remove('active'));
        const activeBtn = Array.from(navButtons).find(btn => btn.dataset.target === id);
        if (activeBtn) activeBtn.classList.add('active');
    }

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.target);
        });
    });

    // По умолчанию показываем home
    showSection('home');

    // Год в футере
    document.querySelector('.hud-footer p').innerHTML = 
        `© ${new Date().getFullYear()} SANTAX SOFTWARES INC. • SYSTEM STATUS: ONLINE`;
});
