import {Drive} from './drive.js';
import {User} from './user.js';

class NewDrive {
  
  

  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = getuser().username;
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

  

}

const user = localStorage.getItem("user");

const newDrive = new NewDrive();

let cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', () => {
  window.location.href = "dashboard.html";
})

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  addDrive();
  window.location.href = "dashboard.html";
})

function addDrive() {
  const user = getuser();

  console.log(`${user}`);
  let start = document.getElementById('startAddress');
  let dest = document.getElementById('destination');
  let seats = document.getElementById('numSeats');
  let time = document.getElementById('startTime');
  
  
  const d = new Drive(start.value, dest.value, seats.value, time.value);

  user.drives.push(d);
  console.log(`${d}`);
  localStorage.setItem("user", JSON.stringify(user));

}

function getuser() {
  const userData = localStorage.getItem('user') ?? new User('Guest');
  console.log("UserData: " + userData);
  const userParsed = JSON.parse(userData);
  console.log("UserParsed: " + userParsed);
  return userParsed;
}