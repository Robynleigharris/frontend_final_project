let Items = [];
fetch("http://127.0.0.1:5000/show-men/")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    json.forEach((theitem) => {
      makingitem(theitem);
    });
  });

function makingitem(theitem) {
  const listitem = `<div class="card">
     <div class="card-content">
      <img src=${theitem.image} alt="img" class="card-image" />
        <p>${theitem.name}</p>
        <p>R${theitem.price}</p>
        <button type="button" name="button" onclick="add(${theitem.id})">Add to cart</button>
    </div>
    </div>`;
  let list = document.getElementById("menProd");
  console.log("yeah get it i guess");
  list.innerHTML += listitem;
}
