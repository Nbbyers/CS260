import {User} from './user.js';
class Dash {
  

  constructor() {
    console.log("in dash");
    const user = this.getuser();
    console.log("user: " + user);
    console.log("username:" + user.username)
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = user.username;

    //var driveObject = JSON.parse(user.drives);
    //console.log("drives: " + driveObject);
    user.drives.forEach(buildDriveList);

 
  }


  getusername() {
    return this.user.username;
    //return localStorage.getItem('userName') ?? 'Guest';
  }

  getuser() {
    const userData = localStorage.getItem('user') ?? new User('Guest');
    console.log("UserData: " + userData);
    const userParsed = JSON.parse(userData);
    console.log("UserParsed: " + userParsed);
    return userParsed;
  }

}

const dash = new Dash();

const user = dash.getuser();

let newDriveButton = document.getElementById('newDrive');
newDriveButton.addEventListener('click', () => {
  window.location.href = "newDrive.html";
})

let findRideButton = document.getElementById('findRide');
findRideButton.addEventListener('click', () => {
  window.location.href = "findRide.html";
})

var listItemString = $('#listItem').html();

function buildDriveList(item, index) {
  let listItem = ('<li>' + listItemString + '</li>');
  let listItemStart = ('.start', listItem);
  listItemStart.html(item.start);
  let listItemDestination = ('.destination', listItem);
  listItemDestination.html(item.destination);
  let listItemSeats = ('.seats', listItem);
  listItemSeats.html(item.seats);
  let listItemTime = ('.time', listItem);
  listItemTime.html(item.time);
  ('#driveList').append(listItem)
}