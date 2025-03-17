// #NOTE: Chỉ code phần chính ở đây

// Lấy tất cả các phần tử nav-link trong menu
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));

    this.classList.add("active");
  });
});
