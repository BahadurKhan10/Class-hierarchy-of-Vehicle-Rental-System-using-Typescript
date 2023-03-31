"use strict";
class Vehicle {
    constructor(_model, _yearAssembled, _rented, _rentRate) {
        this._model = _model;
        this._yearAssembled = _yearAssembled;
        this._rented = _rented;
        this._rentRate = _rentRate;
    }
    //getters
    get model() {
        return this._model;
    }
    get yearAssembled() {
        return this._yearAssembled;
    }
    get rented() {
        return this._rented;
    }
    get rentRate() {
        return this._rentRate;
    }
    //Setters
    set rented(newRented) {
        this._rented = newRented;
    }
    rent() {
        if (this._rented == "False") {
            console.log("Renting Vehicle...");
        }
        console.log("This Vehicle is already rented");
    }
    return() {
        if (this._rented == "True") {
            console.log("Returning rented Vehicle");
            this._rented = "False";
        }
        console.log("This Vehicle is not rented");
    }
}
class Car extends Vehicle {
    constructor(model, yearAssembled, rented, rentRate, _color, _numberPlate, _capacity) {
        super(model, yearAssembled, rented, rentRate);
        this._color = _color;
        this._numberPlate = _numberPlate;
        this._capacity = _capacity;
    }
    rentalRate() {
        return this.rentRate;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    get capacity() {
        return this._capacity;
    }
    get numberPlate() {
        return this._numberPlate;
    }
    set numberPlate(newNumPlate) {
        this.numberPlate = newNumPlate;
    }
}
class Truck extends Vehicle {
    constructor(model, yearAssembled, rented, rentRate, _color, _numberPlate, _capacity) {
        super(model, yearAssembled, rented, rentRate);
        this._color = _color;
        this._numberPlate = _numberPlate;
        this._capacity = _capacity;
    }
    rentalRate() {
        return this.rentRate;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    get capacity() {
        return this._capacity;
    }
    get numberPlate() {
        return this._numberPlate;
    }
    set numberPlate(newNumPlate) {
        this.numberPlate = newNumPlate;
    }
}
class Motorcycle extends Vehicle {
    constructor(model, yearAssembled, rented, rentRate, _color, _numberPlate, _capacity) {
        super(model, yearAssembled, rented, rentRate);
        this._color = _color;
        this._numberPlate = _numberPlate;
        this._capacity = _capacity;
    }
    rentalRate() {
        return this.rentRate;
    }
    get model() {
        return this._model;
    }
    get color() {
        return this._color;
    }
    get capacity() {
        return this._capacity;
    }
    get numberPlate() {
        return this._numberPlate;
    }
    set numberPlate(newNumPlate) {
        this.numberPlate = newNumPlate;
    }
}
// Main Program
// Create instances of each type of vehicle
const car = new Car("Audi", new Date(2020, 1, 1), "False", 50, "red", "ABC123", 5);
const truck = new Truck("Ford", new Date(2019, 1, 1), "False", 100, "blue", "XYZ789", 1000);
const motorcycle = new Motorcycle("Harley Davidson", new Date(2021, 1, 1), "False", 30, "black", "DEF456", 2);
// Rent and return Car
console.log("Renting a car...");
car.rent(); // Renting Vehicle...
console.log("Trying to rent the same car again...");
car.rent(); // This Vehicle is already rented
console.log("Returning the car...");
car.return(); // Returning rented Vehicle
console.log("Trying to return the same car again...");
car.return(); // This Vehicle is not rented
// Rent and return Truck
console.log("Renting a truck...");
truck.rent(); // Renting Vehicle...
console.log("Returning the truck...");
truck.return(); // Returning rented Vehicle
// Rent and return Motorcycle
console.log("Trying to return the motorcycle...");
motorcycle.return(); // This Vehicle is not rented
console.log("Renting the motorcycle...");
motorcycle.rent(); // Renting Vehicle...
console.log("Returning the motorcycle...");
motorcycle.return(); // Returning rented Vehicle
//# sourceMappingURL=app.js.map