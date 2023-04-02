abstract class Vehicle{
    constructor(
        public _model: string,
        public _yearAssembled: Date,
        public _rented: "True" | "False", //can write Boolean
        public _rentRate: number,


    ){} 
        //getters
        public get model(){
            return this._model
        }

        public get yearAssembled(){
            return this._yearAssembled
        }

        public get rented(){
            return this._rented
        }

        public get rentRate(){
            return this._rentRate
        }



        //Setters
        public set rented(newRented:"True"|"False"){
            this._rented=newRented
        }

        //Abstract
        abstract rentalRate(): number;


        rent(){
            if(this._rented=="False"){
                console.log("Renting Vehicle...")
            }
            console.log("This Vehicle is already rented")
        }

        return(){
            if(this._rented=="True"){
                console.log("Returning rented Vehicle")
                this._rented="False"
            }
            console.log("This Vehicle is not rented")

        }
}

class Car extends Vehicle{
    constructor(
        model: string,
        yearAssembled: Date,
        rented: "True" | "False", //can write Boolean
        rentRate:number,
        private _color: string,
        private _numberPlate: string,
        private _capacity:number
    ){super(model,yearAssembled,rented,rentRate)}
    
    
    public rentalRate(): number {
        return this.rentRate
    }

    public get model(){
        return this._model
    }

    public get color(){
        return this._color
    }

    public get capacity(){
        return this._capacity
    }

    public get numberPlate(){
        return this._numberPlate
    }

    public set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
    }

}

class Truck extends Vehicle{
    constructor(
        model: string,
        yearAssembled: Date,
        rented: "True" | "False", //can write Boolean
        rentRate:number,
        private _color: string,
        private _numberPlate: string,
        private _capacity:number
    ){super(model,yearAssembled,rented,rentRate)}
    
    
    public rentalRate(): number {
        return this.rentRate
    }

    public get model(){
        return this._model
    }

    public get color(){
        return this._color
    }

    get capacity(){
        return this._capacity
    }

    public get numberPlate(){
        return this._numberPlate
    }
    
    public set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
    }

}

class Motorcycle extends Vehicle{
    constructor(
        model: string,
        yearAssembled: Date,
        rented: "True" | "False", //can write Boolean
        rentRate:number,
        private _color: string,
        private _numberPlate: string,
        private _capacity:number
    ){super(model,yearAssembled,rented,rentRate)}
    
    
    public rentalRate(): number {
        return this.rentRate
    }

    public get model(){
        return this._model
    }

    public get color(){
        return this._color
    }

    public get capacity(){
        return this._capacity
    }

    public get numberPlate(){
        return this._numberPlate
    }

    public set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
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
