const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    slidesPerView: 5,
    spaceBetween: 10,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 5,
        }
    },

    preloadImages: false,

    lazy: {
        loadOnTransitionStart: false,
        loadPrevNext: false,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  }); 
