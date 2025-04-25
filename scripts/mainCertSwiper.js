const certificatesSwiper = new Swiper('.swiper__certificates', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // Обновленные брейкпоинты
    breakpoints: {
        // 420px и больше - 1 слайд (по умолчанию)
        
        // 768px и больше
        768: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        
        // 1024px и больше
        1024: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        
        // 1280px и больше
        1280: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        
        // 1600px и больше (максимум 6 слайдов)
        1600: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});