export class Drive {
  constructor(start, destination, seats, time) {
    this.start = start;
    this.destination = destination;
    this.seats = seats;
    this.time = time;
  }
  
  toString() {
    return `Driving from ${this.start} to ${this.destination} at ${this.time} with ${this.seats} available seats`;
  }
}