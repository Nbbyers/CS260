import {User} from './user.js';
import {Drive} from './drive.js';

class FindRide {

  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = getuser().username;

  }

}

const findRide = new FindRide();

function getuser() {
  const userData = localStorage.getItem('user') ?? new User('Guest');
  console.log("UserData: " + userData);
  const userParsed = JSON.parse(userData);
  console.log("UserParsed: " + userParsed);
  return userParsed;
}

let firstDrive = document.getElementById('firstDummy');
firstDrive.addEventListener('click', () => {
  const d = {"start":"target","destination":"alta","seats":"3","time":"2023-03-15T22:17"};
  const user = getuser();
  user.rides.push(d);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "dashboard.html";
})

let secondDrive = document.getElementById('secondDummy');
secondDrive.addEventListener('click', () => {
  const d = {"start":"walmart","destination":"Brighton","seats":"2","time":"2023-03-15T22:17"};
  const user = getuser();
  user.rides.push(d);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "dashboard.html";
})

let thirdDrive = document.getElementById('thirdDummy');
thirdDrive.addEventListener('click', () => {
  const d = {"start":"library","destination":"Solitude","seats":"1","time":"2023-03-15T22:17"};
  const user = getuser();
  user.rides.push(d);
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "dashboard.html";
})