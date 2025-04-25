let lastScrollTop = 0;
const header = document.getElementById('fixedHeader');
const hideThreshold = 200; // порог в 200px от верха

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop <= hideThreshold) {
        // Если близко к верху (менее 200px) - скрываем шапку
        header.classList.remove('header__fixed--visible');
        header.classList.add('header__fixed--hidden');
    } else if (scrollTop < lastScrollTop) {
        // Скролл вверх и далеко от верха - показываем шапку
        header.classList.remove('header__fixed--hidden');
        header.classList.add('header__fixed--visible');
    } else if (scrollTop > lastScrollTop) {
        // Скролл вниз и далеко от верха - скрываем шапку
        header.classList.remove('header__fixed--visible');
        header.classList.add('header__fixed--hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

document.addEventListener('DOMContentLoaded', function() {
    const burgerButtons = document.querySelectorAll('.header__btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerClose = document.querySelector('.burger-menu__close');

    // Открытие меню по клику на любую кнопку бургера
    burgerButtons.forEach(button => {
        button.addEventListener('click', function() {
            burgerMenu.classList.add('active');
            this.classList.add('active');
            document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
        });
    });

    // Закрытие меню
    function closeMenu() {
        burgerMenu.classList.remove('active');
        burgerButtons.forEach(button => button.classList.remove('active'));
        document.body.style.overflow = ''; // Восстанавливаем скролл
    }

    // Закрытие по клику на крестик
    burgerClose.addEventListener('click', closeMenu);

    // Закрытие по клику на оверлей
    burgerMenu.addEventListener('click', function(e) {
        if (e.target.classList.contains('burger-menu__overlay')) {
            closeMenu();
        }
    });

    // Закрытие по ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });
});