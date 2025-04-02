document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-shop", {
    type: "loop",
    // autoplay: true,
    interval: 3000,
    speed: 1000,
    perPage: 1,
    focus: "center",
    pagination: false,
    arrows: true,
    breakpoints: {
      768: { perPage: 1 },
    },
  }).mount();
});

const startCountdown = () => {
  const endTime = new Date();
  // đặt mốc hết ngày
  endTime.setHours(23, 59, 59);

  const updateCountdown = () => {
    const now = new Date();

    // khoảng cách thời gian còn lại
    const distance = endTime - now;

    // kiểm tra điều kiện
    if (distance < 0) {
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    // tính toán thời gian còn lại theo miliseconds  không vượt quá 24 giờ
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    // gán dữ liệu vào DOM - Nếu chuỗi chỉ có 1 chữ số, thêm số 0 vào trước để đủ 2 chữ số.
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0"
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0"
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0"
    );
  };
  // chạy lần đâu tiên
  updateCountdown();
  setInterval(updateCountdown, 1000);
};
startCountdown();
document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-medical", {
    type: "loop",
    perPage: 5,
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

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide-deals", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "20px",
    padding: "1rem",
    autoplay: true,
    interval: 3000,
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
  new Splide(".splide-family", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "20px",
    padding: "1rem",
    autoplay: true,
    interval: 3000,
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
  new Splide(".splide-newMedicines", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap: "20px",
    padding: "1rem",
    autoplay: true,
    interval: 3000,
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
