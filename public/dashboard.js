class Dash {
  

  constructor() {
    console.log("in dash");
    const user = this.getuser();
    console.log("user: " + user);
    console.log("username:" + user.username)
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = user.username;
    this.buildDriveList(user.drives);
    this.buildRideList(user.rides);
  }

  getuser() {
    const userData = localStorage.getItem('userName');
    console.log("UserData: " + userData);
    const userParsed = JSON.parse(userData);
    console.log("UserParsed: " + userParsed);
    return userParsed;
  }

  buildDriveList(drives) {
    let list = "<ul>";
    for (let i of drives) {
      list += `<li>${i.start} to ${i.destination} at ${i.time} with ${i.seats} seats available</li>`;
    }
    list += "</ul>";
    
    // (B3) APPEND LIST TO CONTAINER
    document.getElementById("driveList").innerHTML = list;
  }

  buildRideList(rides) {
    let list = "<ul>";
    for (let i of rides) {
      list += `<li>${i.start} to ${i.destination} at ${i.time} with ${i.seats} seats available</li>`;
    }
    list += "</ul>";
    
    // (B3) APPEND LIST TO CONTAINER
    document.getElementById("rideList").innerHTML = list;
  }

}

const dash = new Dash();

let newDriveButton = document.getElementById('newDrive');
newDriveButton.addEventListener('click', () => {
  window.location.href = "newDrive.html";
})

let findRideButton = document.getElementById('findRide');
findRideButton.addEventListener('click', () => {
  window.location.href = "findRide.html";
})



/*
learn in the future. Might help with formatting.

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
*/