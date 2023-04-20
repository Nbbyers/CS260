class NewDrive {
  
  constructor() {
    const usernameEl = document.querySelector('.username');
    usernameEl.textContent = getUsername();
  }

  cancel() {
    console.log("Cancel button pushed");
    window.location.href = "../dashboard.html";
  }


  async addDrive() {

    let start = document.getElementById('startAddress');
    let dest = document.getElementById('destination');
    let seats = document.getElementById('numSeats');
    let time = document.getElementById('startTime');
    let user = localStorage.getItem("userName");
    
    
    const newDrive = {start: start.value, destination: dest.value, seats: seats.value, time: time.value, driver: user};
    
    try {
      const response = await fetch('/api/drive', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newDrive),
      });
  
      //broadcast event to let other users see the new drive...
  
      const drives = await response.json();
      console.log("drives recieved");
      console.log(drives);
      localStorage.setItem('drives', JSON.stringify(drives));
      console.log("in finally");
      window.location.href = "dashboard.html";
    } catch {
      this.updateDrivesLocal(newDrive);
    } 
  }

  updateDrivesLocal(newDrive) {
    let drives = [];
    const drivesText = localStorage.getItem('drives');
    if (drivesText) {
      drives = JSON.parse(drivesText);
    }

    drives.push(newDrive);

    localStorage.setItem('drives', JSON.stringify(drives));
  }



}

const newDrive = new NewDrive();

function getUsername() {
  return localStorage.getItem('userName');
}

let cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', () => {
  window.location.href = "dashboard.html";
})

let addDriveButton = document.getElementById('submit');
addDriveButton.addEventListener('click', () => {
  newDrive.addDrive();
  window.location.href = "dashboard.html";
})