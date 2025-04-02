// Khởi tạo Splide slider
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#blog-slider", {
    type: "loop",
    perPage: 4,
    perMove: 1,
    gap: "20px",
    padding: "1rem",
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
