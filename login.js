import {User} from './user.js';


let loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
  console.log("here");
  const userNameEl = document.querySelector("#username");
  const user = new User(userNameEl.value);
  localStorage.setItem("user", JSON.stringify(user));
  //localStorage.setItem("userName", userNameEl.value);
  console.log("Username: " + userNameEl.value);
  window.location.href = "dashboard.html";
})


