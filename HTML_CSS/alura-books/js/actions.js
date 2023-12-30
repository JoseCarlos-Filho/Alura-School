const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    slidesPerView: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },

    navigation: {
        nextEl: '.swiper-button-next, .swiper-maisvendido-next', 
        prevEl: '.swiper-button-prev, .swiper-maisvendido-prev',
    },
});

// swiper();