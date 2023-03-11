
class Dash {

  constructor() {
    console.log("in dash");
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = this.getusername();
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

}

const dash = new Dash();

function findRide() {
  window.location.href = "findRide.html";
}

function newDrive() {
  window.location.href = "newDrive.html";
}