document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-button');
    const contentSections = document.querySelectorAll('.content-section');

    // Функция для показа секции
    function showSection(targetId) {
        // Скрываем все секции
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // Показываем нужную секцию
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        } else {
             console.error(`Секция с ID "${targetId}" не найдена.`);
        }

        // Обновляем активную кнопку
        navButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('data-target') === targetId) {
                button.classList.add('active');
            }
        });
    }

    // Добавляем обработчики кликов к кнопкам
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Показываем начальную секцию (например, 'home')
    // Можно убрать, если первая секция изначально имеет класс 'active'
    // showSection('home'); // Уже активна по умолчанию в HTML
});

// Автоматическое обновление года в футере (оставляем здесь)
document.getElementById('currentYear').textContent = new Date().getFullYear();