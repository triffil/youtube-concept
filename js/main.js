const swiper = new Swiper(".channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },

    1600: {
      slidesPerView: 5,
    },
    1330: {
      slidesPerView: 4,
    },
    1090: {
      slidesPerView: 3,
    },
    825: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".channel-button-next",
    prevEl: ".channel-button-prev",
  },
});

const swiperRecommended = new Swiper(".recommended-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1350: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".recommended-button-next",
    prevEl: ".recommended-button-prev",
  },
});

const swiperChannelForYouSlider = new Swiper(".channel-for-you-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },

    1600: {
      slidesPerView: 5,
    },
    1330: {
      slidesPerView: 4,
    },
    1090: {
      slidesPerView: 3,
    },
    825: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".channel-for-you-button-prev",
    prevEl: ".channel-for-you-button-next",
  },
});

const mobileSearch = document.querySelector(".mobile-search");
const inputGroup = document.querySelector(".input-group");
mobileSearch.addEventListener("click", () => {
  inputGroup.classList.toggle("is-open");
});

if (document.documentElement.scrollWidth <= 624) {
  swiper.destroy();
  swiperRecommended.destroy();
  swiperChannelForYouSlider.destroy();
}
