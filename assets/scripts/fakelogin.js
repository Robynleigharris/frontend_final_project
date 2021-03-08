/* THE CREATING OF AN ACCOUNT */

let loggedIn;
function creatingAcc() {
  let form = document.getElementById("creatingaccount");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/creating-an-account/", {
    method: "POST",
    body: JSON.stringify({
      username: inputs[0].value,
      email: inputs[1].value,
      password: inputs[2].value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account created");
      console.log(json);
      form.reset();
    });
}

/* THE LOGGING IN OF AN ACCOUNT */
function loggingin() {
  let loginForm = document.getElementById("login");
  let inputs = loginForm.getElementsByTagName("input");

  let username = inputs[0].value;
  let email = inputs[1].value;
  let password = inputs[2].value;

  let users;
  fetch("http://127.0.0.1:5000/show-user/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      users = json;
      console.log(username, email, password, users);

      loggedIn = users.filter((user) => {
        return user.username == username && user.password == password;
      });

      if (loggedIn.length >= 1) {
        window.location.href = `./index.html?userID=${loggedIn[0].id}`;
      }
    });
}
