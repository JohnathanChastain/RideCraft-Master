// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// properties of the Truck class
class Truck extends Vehicle {
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
    towingCapacity: number;
    ableToTow: AbleToTow;

// constructor that accepts the properties of the Truck class
    constructor(vin: string, color: string, make: string, model: string,
      year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
      this.towingCapacity = towingCapacity;
      this.ableToTow = {
        towingCapacity: this.towingCapacity,
        tow: this.tow
      };
    }
  
// tow method
    tow(vehicle: Truck | Motorbike | Car): void {
      const make = vehicle.make;
      const model = vehicle.model;
      if (vehicle.weight <= this.towingCapacity) {
        console.log(`Towing ${make} ${model}`);
      } else {
        console.log(`Vehicle is too heavy to be towed`);
      }
    } 

    // wheelie(): void {
    //   console.log(`Truck ${this.make} ${this.model} cannot wheelie!`);
    // }
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
        console.log(`Towing Capacity: ${this.towingCapacity} kg`);
        console.log(`Wheels: ${this.wheels.length}`);
        console.log(`Towing: ${this.ableToTow.tow}`);
        console.log(`Able to tow: ${this.ableToTow.towingCapacity} kg`);
        console.log(`Can wheelie: N/A`);
    }
};

// Export the Truck class as the default export
export default Truck;
