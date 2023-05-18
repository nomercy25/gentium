new Swiper ('.swiper', {
        //arrows 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 7000,
        disableOnInteraction: false
    },

        loop: true,
         SlidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loopedSlides: 3,

    //navigation pagination
    pagination: {
        el: '.swiper-pagination',
        //bullets
        clickable: true,
    },
    simulateTouch: true,
    grabCursor: true,
    slideToClickedSlide: true,
    autoHeight: true,
    slidesPerView: 'auto',
    breakpoints: {

        320: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loopedSlides: 3,
        },

        480: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            loopedSlides: 2,
        },

        768: {
          slidesPerView: 1,
          spaceBetween: 0,
        },

        992: {
            slidesPerView: 3,
        },

        1024: {
          slidesPerView: 'auto',
          spaceBetween: 0,
        }
      },
});