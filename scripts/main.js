// Основной JavaScript файл для портфолио
console.log('Сайт портфолио загружен! 🚀');

document.addEventListener('DOMContentLoaded', function() {
    // Анимация появления карточек при скролле
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.project-card, .card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Изначально скрываем элементы для анимации
    const cards = document.querySelectorAll('.project-card, .card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Запускаем анимацию
    setTimeout(animateOnScroll, 100);
    window.addEventListener('scroll', animateOnScroll);

    // Обработка формы контактов
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name && email && message) {
                alert('✅ Спасибо! Ваше сообщение отправлено. Я свяжусь с вами в ближайшее время.');
                contactForm.reset();
            } else {
                alert('⚠️ Пожалуйста, заполните все обязательные поля.');
            }
        });
    }

    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Динамическое обновление года в футере
    const yearElement = document.querySelector('footer p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }

    // Подсветка активного пункта меню
    const currentPage = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Функция для скачивания резюме
function downloadResume() {
    alert('📄 Резюме будет скачано. В будущем здесь будет реальный PDF файл.');
    // Здесь будет код для скачивания реального PDF
}

// Функция для копирования email
function copyEmail() {
    const email = 'anatolij.grevcev@example.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('📧 Email скопирован в буфер обмена: ' + email);
    });
}
