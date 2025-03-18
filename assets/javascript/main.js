// #NOTE: Chỉ code phần chính ở đây

// Lấy tất cả các phần tử nav-link trong menu
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide-doctors", {
    type: "loop",
    perPage: 3,
    gap: "1rem",
    autoplay: true,
    breakpoints: {
      768: { perPage: 1 },
      992: { perPage: 2 },
    },
  }).mount();

  new Splide("#splide-testimonials", {
    type: "fade",
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
  }).mount();
});

const animatedElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElements.forEach((el) => observer.observe(el));

const animatedElement = document.querySelectorAll(".animate-on-scroll");

const observers = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

animatedElement.forEach((el) => observers.observe(el));

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#testimonial-slider", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    arrows: true,
    pagination: true,
  }).mount();
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splide-testimonials", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    arrows: false,
    pagination: true,
    speed: 600,
  }).mount();
});

const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
