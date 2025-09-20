document.addEventListener('DOMContentLoaded', function() {
    // Добавляем дополнительные эффекты при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);

    // Наблюдаем за элементами
    const elementsToAnimate = document.querySelectorAll('.content, .image-container');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Эффект параллакса для фона
    document.addEventListener('mousemove', function(e) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        
        document.body.style.backgroundPosition = `
            calc(50% + ${moveX}px) calc(50% + ${moveY}px)
        `;
    });

    // Анимация кнопки
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
            alert('Добро пожаловать в Gotto Go!');
        }, 150);
    });

    // Периодическое мерцание логотипа
    setInterval(() => {
        const letters = document.querySelectorAll('.letter');
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        
        randomLetter.style.animation = 'none';
        setTimeout(() => {
            randomLetter.style.animation = '';
        }, 10);
    }, 3000);
});