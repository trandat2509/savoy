// cart
$(document).ready(function () {
  // Ẩn ban đầu phần carts
  $(".carts").hide();

  // Xử lý sự kiện khi nhấp vào liên kết "Cart"
  $(".cart-action").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    $(".carts").toggle(); // Hiển thị hoặc ẩn phần carts
  });

  // Xử lý sự kiện khi nhấp vào liên kết "Close" hoặc "Continue shopping" bên trong carts
  $(".carts .close, .carts a[href='/']").click(function (e) {
    e.preventDefault(); // Ngăn chặn hành động mặc định của liên kết
    $(".carts").hide(); // Ẩn phần carts
  });
});
