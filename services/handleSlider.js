// Khởi tạo Splide slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#blog-slider", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    // autoplay: true,
    interval: 2000,
    pagination: false,
    arrows: true,
    breakpoints: {
      1200: { perPage: 4 },
      992: { perPage: 2 },
      768: { perPage: 2 },
      576: { perPage: 1 },
    },
  }).mount();
});

// Khởi tạo Splide slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".home-splide-deals", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "20px",
    autoplay: true,
    interval: 2000,
    pagination: false,
    arrows: false,
    breakpoints: {
      1200: { perPage: 4 },
      992: { perPage: 2 },
      768: { perPage: 2 },
      576: { perPage: 1 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".home-splide-cotor", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    autoplay: true,
    interval: 4000,
    pagination: false,
    arrows: true,
    breakpoints: {
      1200: { perPage: 4 },
      992: { perPage: 2 },
      768: { perPage: 2 },
      576: { perPage: 1 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".health-slider", {
    type: "loop",
    perPage: 3,
    gap: "1rem",
    pagination: false,
    arrows: true,
    breakpoints: {
      1024: { perPage: 2 },
      768: { perPage: 1 },
    },
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".health-guide-slider", {
    type: "slide",
    perPage: 4,
    gap: "1rem",
    pagination: false,
    arrows: true,
    breakpoints: {
      1024: { perPage: 3 },
      768: { perPage: 2 },
      576: { perPage: 1 },
    },
  }).mount();
});
