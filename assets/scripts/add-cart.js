let cart = [];

i = 0;

function add(theitem) {
  if (i >= 0) {
    document.getElementById("items").innerHTML = i += 1;
  }
  cart.push(theitem);
  console.log(cart);
  createCart();
}

function createCart() {
  let cartList = document.getElementById("try");
  products = [];
  cartList.innerHTML = "";
  cart.forEach((item) => {
    products = Items.filter((clothing) => {
      return clothing.theitem == item;
    });
    products.forEach((product) => {
      cartList.innerHTML += `
      <li id="cartI"><img src=${product.image} alt=${product.name}/>${product.name}${product.price}</li>
      `;
    });
  });
}

function showCart() {
  let cart = document.getElementById("try");
}
