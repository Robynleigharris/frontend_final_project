/* function addcart(id) {
  let cart = document.getElementById("stuff_container");
  let inCart = incart[0];
  let selecteditem = incart[0];
  let cartitem = `
    <li class= "" id="product${id}" productprice=${selecteditem.price}>
    ${selecteditem.name} : ${selecteditem.price}
    <button onclick ="removingitem(${id})">remove</button></li>
    `;
}
cart.innerHTML += cartitem;
console.log();

if (i >= 0) {
  document.getElementById("items").innerHTML = i += 1;
}*/

let cartList = [];

i = 0;

function add(theitem) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart ? cart : (cart = []);

  fetch("https://evening-escarpment-06933.herokuapp.coms/show-records/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);

      let cartItem = json.filter((product) => {
        return product.id == theitem;
      });

      console.log(cartItem[0]);
      cart.push(cartItem[0]);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.getElementById("items").innerHTML = cart.length;
      createCart();
    });
}

function createCart() {
  let cartprod = document.getElementById("container");
  products = [];
  let cart = localStorage.getItem("cart");
  console.log("cart:", JSON.parse(cart));
}

function showcart() {
  let activecart = document.getElementById("container");
}

function renderCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));

  fetch("https://evening-escarpment-06933.herokuapp.com/show-records/")
    .then((res) => res.json())
    .then((data) => {
      s;
      console.log(data);
      console.log(cart);
      let cartItems = [];

      data.forEach((dataItem) => {
        cart.forEach((cartItem) => {
          if (dataItem.id == cartItem) {
            cartItems.push(dataItem);
          }
        });
      });

      console.log(cartItems);
      document.getElementById("modal").innerHTML = "";
      cartItems.forEach((item) => {
        let cartItem = createCartitem(item);
        document.getElementById("modal").innerHTML += cartItem;
      });
    });
}

function createCartitem(theitem) {
  let items = `<di>
  <li id="cartI"><img src=${theitem.image} alt=${theitem.name}/>${theitem.name}${theitem.price}</li>
  <button type="submit">Purchase</button>
  </div>`;
  let conn = document.getElementById("modal");
  conn.innerHTML += items;
}

function openCart() {
  // Get modal and show it
  document.getElementById("id01").style.display = "block";

  //   Select container to write data to
  let cartContent = document.getElementById("container");

  //   Get contents of cart from local storage
  let cart = JSON.parse(localStorage.getItem("cart"));
  //   Make sure the cart is valid
  cart ? cart : (cart = []);

  //   Clear the cart content before writing fresh data
  cartContent.innerHTML = "";

  //   for each item in the cart ...
  cart.forEach((cartItem) => {
    // ... Create a new item and write it into content box
    cartContent.innerHTML += `<div class="cart-container" id="totalitem" clothesTotal=R${cartItem.price}>
    <div class="cart-card">
    <div class="card-content">
     <img src="${cartItem.image}" alt="img" class="cart-image" />
       <p class="cart-text">${cartItem.name}</p>
       <p class="cart-text">R${cartItem.price}</p>
       <button id="removing">remove from cart</button>
   </div>
   </div>
   </div>
        `;
    calculate();
  });
}

function calculate() {
  let itemTotal = document.querySelectorAll("[clothesTotal]");
  let totalamount = 0;
  for (let i = 0; i < itemTotal.length; i++) {
    totalamount += parseInt(
      itemTotal[i].getAttribute("clothesTotal").substring(1)
    );
  }

  console.log(totalamount);
  let theTotal = document.getElementsByClassName("cartTotal")[0];
  theTotal.innerHTML = totalamount;
}

function remove() {}

function purchase() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let total = 0;

  cart.forEach((product) => {
    total = total + parseInt(product.price);
  });
  alert("Thank you for shopping with us your total is R" + total);
}
