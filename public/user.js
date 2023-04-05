export class User {

  constructor(username) {
    this.username = username;
    this.drives = [];
    this.rides = [];
  }

  toString() {
    return `${this.username} has drives: ${this.drives} and rides: ${this.rides}`;
  }

  addDrive = function(drive) {
    this.drives.push(drive);
  }

}