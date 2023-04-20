async function loadDrives() {
  let drives = [];
  try {
    // Get the latest drives from the service
    const response = await fetch('/api/drives');
    drives = await response.json();

    // Save the scores in case we go offline in the future
    localStorage.setItem('drives', JSON.stringify(drives));
  } catch {
    // If there was an error then just use the last saved scores
    const drivesText = localStorage.getItem('drives');
    if (drivesText) {
      drives = JSON.parse(drivesText);
    }
  }

  displayDrives(drives);
}

function displayDrives(drives) {
  const tableBodyEl = document.querySelector('#drives');

  if (drives.length) {
    // Update the DOM with the scores
    for (const [i, drive] of drives.entries()) {
      const startTdEl = document.createElement('td');
      const destinationTdEl = document.createElement('td');
      const seatsTdEl = document.createElement('td');
      const timeTdEl = document.createElement('td');

      startTdEl.textContent = drive.start;
      destinationTdEl.textContent = drive.destination;
      seatsTdEl.textContent = drive.seats;
      timeTdEl.textContent = drive.time;

      const rowEl = document.createElement('tr');
      rowEl.appendChild(startTdEl);
      rowEl.appendChild(destinationTdEl);
      rowEl.appendChild(seatsTdEl);
      rowEl.appendChild(timeTdEl);

      tableBodyEl.appendChild(rowEl);
    }
  } else {
    tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
  }
}

loadDrives();

let newDriveButton = document.getElementById('newDrive');
newDriveButton.addEventListener('click', () => {
  window.location.href = "newDrive.html";
})

let findRideButton = document.getElementById('findRide');
findRideButton.addEventListener('click', () => {
  window.location.href = "findRide.html";
})



// class Dash {
  

//   constructor() {
//     console.log("in dash");
//     //const user = this.getuser();
//     const userName = this.getUsername();
//     console.log("username:" + userName)
//     const usernameEl = document.querySelector('.username');
//     usernameEl.textContent = userName;
//     //this.buildDriveList(user.drives);
//     //this.buildRideList(user.rides);
//   }

//   getUsername() {
//     return localStorage.getItem('userName');
//   }

//   getuser() {
//     const userData = localStorage.getItem('user');
//     console.log("UserData: " + userData);
//     const userParsed = JSON.parse(userData);
//     console.log("UserParsed: " + userParsed);
//     return userParsed;
//   }

//   buildDriveList(drives) {
//     let list = "<ul>";
//     for (let i of drives) {
//       list += `<li>${i.start} to ${i.destination} at ${i.time} with ${i.seats} seats available</li>`;
//     }
//     list += "</ul>";
    
//     // (B3) APPEND LIST TO CONTAINER
//     document.getElementById("driveList").innerHTML = list;
//   }

//   buildRideList(rides) {
//     let list = "<ul>";
//     for (let i of rides) {
//       list += `<li>${i.start} to ${i.destination} at ${i.time} with ${i.seats} seats available</li>`;
//     }
//     list += "</ul>";
    
//     // (B3) APPEND LIST TO CONTAINER
//     document.getElementById("rideList").innerHTML = list;
//   }

// }

// const dash = new Dash();

// let newDriveButton = document.getElementById('newDrive');
// newDriveButton.addEventListener('click', () => {
//   window.location.href = "newDrive.html";
// })

// let findRideButton = document.getElementById('findRide');
// findRideButton.addEventListener('click', () => {
//   window.location.href = "findRide.html";
// })



// /*
// learn in the future. Might help with formatting.

// var listItemString = $('#listItem').html();

// function buildDriveList(item, index) {
//   let listItem = ('<li>' + listItemString + '</li>');
//   let listItemStart = ('.start', listItem);
//   listItemStart.html(item.start);
//   let listItemDestination = ('.destination', listItem);
//   listItemDestination.html(item.destination);
//   let listItemSeats = ('.seats', listItem);
//   listItemSeats.html(item.seats);
//   let listItemTime = ('.time', listItem);
//   listItemTime.html(item.time);
//   ('#driveList').append(listItem)
// }
// */