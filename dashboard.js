import {User} from './user.js';
class Dash {
  user;


  constructor() {
    console.log("in dash");
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = this.getusername();

    this.user = this.getuser();
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

  getuser() {
    return localStorage.getItem('user') ?? new User('Guest');
  }

}

const dash = new Dash();

let newDriveButton = document.getElementById('newDrive');
newDriveButton.addEventListener('click', () => {
  const user2 = new User('guest');
  localStorage.setItem("user2", user2);
  window.location.href = "newDrive.html";
})

let findRideButton = document.getElementById('findRide');
findRideButton.addEventListener('click', () => {
  window.location.href = "findRide.html";
})