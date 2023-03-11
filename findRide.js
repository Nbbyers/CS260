class FindRide {

  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = this.getusername();
  }


  getusername() {
    return localStorage.getItem('userName') ?? 'Guest';
  }

}

const findRide = new FindRide();