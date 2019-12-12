$(document).ready(function () {

  $("#form-validate").validate({
    rules: {
      Name: "required",
      address: {
        required: true,
        minlength: 5
      },
      phone: {
        required: true,
        minlength: 10
      },
      email: {
        required: true,
        email: true
      },
      title: {
        required: true,
        minlength:5
      },
      content: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      name: "Vui lòng nhập họ tên",
      address: {
        required: "Vui lòng nhập địa chỉ",
        minlength: "Địa chỉ quá ngắn viết dài hơn đi"
      },
      phone: {
        required: "Vui lòng nhập số điện thoại",
        minlength: "Số điện thoại bạn vừa nhập còn chưa đúng, hãy viết lại đi"
      },
      email: "Vui lòng nhập Email",
      title: {
        required: "Vui lòng nhập tiêu đề",
        minlength: "Tiêu đề của bạn quá ngắn viết dài ra nữa đi"
      },
      content: {
        required: "Vui lòng nhập nội dung",
        minlength: "Nội dung của bạn quá ngắn viết dài ra nữa đi"
      }
    }
  });
});