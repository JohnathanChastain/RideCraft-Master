// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
 
  // constructor that accepts the properties of the Motorbike class
  constructor(vin: string, color: string, make: string, model: string,
     year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
    super();
     // Call the constructor of the parent class, Vehicle
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    // check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()]; // Ensure there are 2 wheels
  }


  // wheelie method
  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
};

// Export the Motorbike class as the default export
export default Motorbike;
