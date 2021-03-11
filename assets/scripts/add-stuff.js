function addingItem() {
  const inputs = document.getElementsByTagName("input");

  fetch("https://evening-escarpment-06933.herokuapp.com/add-new-record/", {
    method: "POST",
    body: JSON.stringify({
      name: inputs[0].value,
      amount: inputs[1].value,
      gender: inputs[2].value,
      type: inputs[3].value,
      sizes: inputs[4].value,
      price: inputs[5].value,
      image: inputs[6].value,
    }),
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("product add successful");
      document.getElementById("makingform").reset();
    });
}
