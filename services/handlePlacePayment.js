document.addEventListener("DOMContentLoaded", function () {
  const provinceSelect = document.getElementById("province");
  const districtSelect = document.getElementById("district");

  fetch("https://provinces.open-api.vn/api/p/")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((province) => {
        let option = document.createElement("option");
        option.value = province.code;
        option.textContent = province.name;
        provinceSelect.appendChild(option);
      });
    });

  provinceSelect.addEventListener("change", function () {
    districtSelect.innerHTML = "<option selected>Chọn quận / huyện</option>";
    fetch(`https://provinces.open-api.vn/api/p/${this.value}?depth=2`)
      .then((response) => response.json())
      .then((data) => {
        data.districts.forEach((district) => {
          let option = document.createElement("option");
          option.value = district.code;
          option.textContent = district.name;
          districtSelect.appendChild(option);
        });
      });
  });
});
