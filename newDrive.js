import {Drive} from './drive.js';
import {User} from './user.js';

class NewDrive {
  
  

  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = this.getusername();
    //const user = new User('guest');
    //console.log(`${user}`);
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

  addDrive() {
    //user = new User('guest');
    let start = document.getElementById('startAddress');
    let dest = document.getElementById('destination');
    let seats = document.getElementById('numSeats');
    let time = document.getElementById('startTime');
    
    
    const d = new Drive(start.value, dest.value, seats.value, time.value);
  
    user.drives.push(d);
    console.log(`${d}`);
  }

}

const user = localStorage.getItem("user2");

const newDrive = new NewDrive();

let cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', () => {
  window.location.href = "dashboard.html";
})

let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', () => {
  newDrive.addDrive();
  //window.location.href = "dashboard.html";
})