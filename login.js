function login() {
  console.log("here");
  const userNameEl = document.querySelector("#username");
  localStorage.setItem("userName", userNameEl.value);
  console.log("Username: " + userNameEl.value);
  window.location.href = "dashboard.html";
}