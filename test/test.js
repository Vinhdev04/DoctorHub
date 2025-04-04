/**
 * Xử lý phản hồi từ Google sau khi đăng nhập
 * @param {Object} response - Dữ liệu Google trả về (JWT Token)
 */
function handleCredentialResponse(response) {
  if (!response || !response.credential) {
    console.error("Lỗi: Không nhận được JWT Token từ Google");
    return;
  }

  console.log("Google Response:", response);

  let data = parseJwt(response.credential);
  if (!data || !data.name || !data.email) {
    console.error("Lỗi: Không thể giải mã JWT Token.");
    return;
  }

  console.log("User Data:", data);

  // Lấy phần tử HTML để kiểm tra trước khi gán giá trị
  let userNameEl = document.getElementById("userName");
  let userEmailEl = document.getElementById("userEmail");
  let userImageEl = document.getElementById("userImage");
  let profileEl = document.getElementById("profile");

  if (userNameEl && userEmailEl && userImageEl && profileEl) {
    userNameEl.textContent = data.name;
    userEmailEl.textContent = data.email;
    userImageEl.src = data.picture;

    // Hiện phần thông tin user sau khi đăng nhập thành công
    profileEl.style.display = "block";

    // Lưu dữ liệu user vào LocalStorage
    localStorage.setItem("user", JSON.stringify(data));
  } else {
    console.error("Lỗi: Không tìm thấy phần tử HTML cần thiết.");
  }
}

/**
 * Giải mã JWT Token để lấy dữ liệu người dùng
 * @param {string} token - JWT Token từ Google
 * @returns {Object} - Thông tin người dùng (name, email, picture, ...)
 */
function parseJwt(token) {
  try {
    let base64Url = token.split(".")[1]; // Lấy phần Payload của JWT
    let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    let jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error("Lỗi khi parse JWT:", error);
    return null;
  }
}

/**
 * Đăng xuất người dùng
 */
function logout() {
  let profileEl = document.getElementById("profile");
  if (profileEl) profileEl.style.display = "none";

  let userNameEl = document.getElementById("userName");
  let userEmailEl = document.getElementById("userEmail");
  let userImageEl = document.getElementById("userImage");

  if (userNameEl) userNameEl.textContent = "";
  if (userEmailEl) userEmailEl.textContent = "";
  if (userImageEl) userImageEl.src = "";

  // Xóa dữ liệu user khỏi LocalStorage
  localStorage.removeItem("user");
}

/**
 * Kiểm tra xem người dùng đã đăng nhập trước đó chưa (dùng LocalStorage)
 */
function checkLoginStatus() {
  let userData = localStorage.getItem("user");
  if (userData) {
    let data = JSON.parse(userData);

    console.log("Khôi phục dữ liệu user:", data);

    let userNameEl = document.getElementById("userName");
    let userEmailEl = document.getElementById("userEmail");
    let userImageEl = document.getElementById("userImage");
    let profileEl = document.getElementById("profile");

    if (userNameEl && userEmailEl && userImageEl && profileEl) {
      userNameEl.textContent = data.name;
      userEmailEl.textContent = data.email;
      userImageEl.src = data.picture;
      profileEl.style.display = "block";
    } else {
      console.error(
        "Lỗi: Không tìm thấy phần tử HTML khi kiểm tra trạng thái đăng nhập."
      );
    }
  }
}

// Kiểm tra trạng thái đăng nhập khi trang được load
window.onload = checkLoginStatus;
