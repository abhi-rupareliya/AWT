// parent class
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  display() {
    console.log("Make: " + this.make);
    console.log("Model: " + this.model);
    console.log("Year: " + this.year);
  }
  getMileage() {
    console.log("Mileage details of vehicle.");
  }
}

// inheritance
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }
  display() {
    super.display();
    console.log("Doors: " + this.doors);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year, engine) {
    super(make, model, year);
    this.engine = engine;
  }
  display() {
    super.display();
    console.log("Engine: " + this.engine);
  }
}

let car = new Car("Honda", "City", 2021, 4);
car.display();
car.getMileage();
let bike = new Motorcycle("Honda", "Shine", 2021, "150cc");
bike.display();
