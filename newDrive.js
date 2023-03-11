class NewDrive {

  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = this.getusername();
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

}

const newDrive = new NewDrive();