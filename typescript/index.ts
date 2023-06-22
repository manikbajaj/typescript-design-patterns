class Bird {
  fly(): void {
    console.log("Bird is flying");
  }
}

class FlightlessBird extends Bird {
  fly(): void {
    console.log("Flightless Birds Cannot Fly");
  }
}

class Penguin extends FlightlessBird {}

let penguin: Penguin = new Penguin();
console.log(penguin.fly());
