const API = "http://5dcb5da934d54a0014314e06.mockapi.io/product";

const APICATEGORY = "http://5df046a202b2d90014e1bcfc.mockapi.io/category";

// hàm các sản phẩm mới nhất
function getProduct(API) {
  axios.get(`${API}?page=1&limit=4&sortBy=createdAt&order=desc`)
    .then(function (response) {
      const product = response.data;
      const show = document.getElementById("show");
      show.innerHTML = product.map(products => {
        return `	<div class="product">
					<a href="detail.html" onclick="setItem(id = ${products.id})"><img src="${products.avatar}" alt=""></a>
					<p href="detail.html" class="name-prd"><a onclick="setItem(id = ${products.id})">${products.name}</a></p>
          <p class="price-prd">${products.price}</p>
				  <a style="color:black" href="trangchu.html" onclick="addCart(id = ${products.id}, name = '${products.name}', avatar = '${products.avatar}', price = ${products.price})">Mua hàng</a>
        </div>`
      });
    })
    .catch(function (error) {
      console.log("lỗi" + error);
    })
}
getProduct(API)
// sản phẩm giá ưu đãi nhất
function getProductTwo(API) {
  axios.get(`${API}?page=1&limit=4&sortBy=price`)
    .then(function (response) {
      const product = response.data;
      const show = document.getElementById("showTwo");
      show.innerHTML = product.map(products => {
        return `	<div class="product">
					<a href="detail.html" onclick="setItem(id = ${products.id})"><img src="${products.avatar}" alt=""></a>
					<p href="detail.html" class="name-prd"><a onclick="setItem(id = ${products.id})">${products.name}</a></p>
          <p class="price-prd">${products.price}</p>
				  <a style="color:black" href="trangchu.html" onclick="addCart(id = ${products.id}, name = '${products.name}', avatar = '${products.avatar}', price = ${products.price})">Mua hàng</a>
        </div>`
      });
    })
    .catch(function (error) {
      console.log("lỗi" + error);
    })
}
getProductTwo(API)
// hàm khởi tạo sessionStorage
function setItem(id) {
  // alert (id);
  sessionStorage.setItem("id", id);
}
// setItem(id);
// hiện thị chi tiết sản phẩm
function getDetail() {
const id = sessionStorage.getItem("id");
  // alert(`${API}/${id}`);
  axios.get(`${API}/${id}`)
    .then(function (response) {
      const product = response.data;
      // console.log(product.name);
      document.getElementById("img-prd").innerHTML = `<img src="${product.avatar}" alt="" style="border-right: 2px solid gray; margin-right: 5px">`;
      document.getElementById("sp").innerHTML = product.name;
      document.getElementById("price").innerHTML = `$ ${product.price}`;
      document.getElementById("desc").innerHTML = product.shotr_desc
    // console.log(products.name);
  })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
getDetail();


// hàm thêm vào giỏ hàng
function addCart(id, name, avatar, price) {
  let cart = [];
  // alert(name);
  // alert(id);
  if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'));
  }
  let add = {
    id: id,
    name: name,
    avatar: avatar,
    price: price,
    quantity: 1
  };
  // console.log(cart.includes(id = cart.id));
  cart.push(add);
  localStorage["cart"] = JSON.stringify(cart);
}
// hàm tìm kiếm
function search() {
  let h = document.createElement("h2");
  h.innerText = 'TÌM KIẾM';
  let parent = document.getElementById("one");
  let child = document.getElementById("hh");
  parent.replaceChild(h, child);
  const keyword = document.form.name.value;
  // alert(keyword);
  axios.get(`${API}?search=${keyword}`)
    .then(function (response) {
          const product = response.data;
          const show = document.getElementById("show");
          show.innerHTML = product.map(products => {
            return `	<div class="product">
					<a href="detail.html" onclick="setItem(id = ${products.id})"><img src="${products.avatar}" alt=""></a>
					<p href="detail.html" class="name-prd"><a onclick="setItem(id = ${products.id})">${products.name}</a></p>
          <p class="price-prd">${products.price}</p>
				  <a style="color:black" href="trangchu.html" onclick="addCart(id = ${products.id}, name = '${products.name}', avatar = '${products.avatar}', price = ${products.price})">Mua hàng</a>'
        </div>`
          });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

  function getListCart() {
    // let getCart = [];
    const getCart = JSON.parse(localStorage.getItem('cart'));
    // console.log(getCart);
    const showCart = document.getElementById("showCart");
    // console.log(showCart)
    showCart.innerHTML = getCart.map(getCarts => {
      return ` 
            <div class="layout-inline row">
      
              <div class="col col-pro layout-inline">
                <img width = '30%'
                src = "${getCarts.avatar}"
                alt = "${getCarts.name}" />
                <p>${getCarts.name}</p>
              </div>
      
              <div class="col col-price col-numeric align-center ">
                <p style="text-align: center;">$ ${getCarts.price}</p>
              </div>
      
              <div class="col col-qty layout-inline" style="text-align: center;">
                <a href="#" class="qty qty-minus">-</a>
                <input type="numeric" value="${getCarts.quantity}" />
                <a href="#" class="qty qty-plus">+</a>
              </div>
              <div class="col col-total col-numeric">
                <p style="text-align: center;">$ ${getCarts.price * getCarts.quantity}</p>
              </div>
              <div class="col col-total col-numeric">
                <p style="text-align: center;"><a style='color: black' onclick='deleteCart(${getCarts.id})'>Xóa</a></p>
              </div>
            </div>
            `
    }).join("");
  }
  getListCart();
function deleteCart(id) {
  // console.log(id);
  carts = JSON.parse(localStorage.getItem('cart'));
  // console.log(carts);
  const remove = carts.filter(cart => 
    cart.id != id
    );
  console.log(carts);
}
  