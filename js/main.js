const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: ".channel-button-next",
    prevEl: ".channel-button-prev",
  },
});

const swiperRecommended = new Swiper(".recommended-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: ".recommended-button-next",
    prevEl: ".recommended-button-prev",
  },
});

const swiperChannelForYouSlider = new Swiper(".channel-for-you-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: ".channel-for-you-button-prev",
    prevEl: ".channel-for-you-button-next",
  },
});
