import {User} from './user.js';
import {Drive} from './drive.js';

class FindRide {
  user;

  constructor() {
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

const findRide = new FindRide();