
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