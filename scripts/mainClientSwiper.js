document.addEventListener('DOMContentLoaded', () => {
    // Проверяем, есть ли контейнер для карусели брендов
    const brandsContainer = document.querySelector('.brands-swiper');
    if (!brandsContainer) return;

    // Инициализация только для этого слайдера
    const brandsSwiper = new Swiper(brandsContainer, {
        loop: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },

        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 500,
        freeMode: true,
        watchSlidesProgress: true,

        // Кастомные классы для Swiper
        wrapperClass: 'brands-swiper-wrapper',
        slideClass: 'brands-slide',

        // Отключаем стандартные элементы
        navigation: false,
        pagination: false,
        scrollbar: false,

        breakpoints: {
            320: {
                spaceBetween: 15,
            },
            768: {
                spaceBetween: 30,
            }
        }

    });
});