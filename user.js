export class User {

  constructor(username) {
    this.username = username;
    this.drives = [];
    this.rides = [];
  }

  toString() {
    return `${this.username}`;
  }

}