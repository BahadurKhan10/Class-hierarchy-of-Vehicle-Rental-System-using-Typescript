abstract class Vehicle{
    private _model: string;
    private _yearAssembled: string;
    private _rented: boolean;
    private _rentRate: number;
    constructor(model:string, yearAssembled: string, rented:boolean, rentRate:number){
        this._model=model,
        this._yearAssembled=yearAssembled,
        this._rented=rented,
        this._rentRate=rentRate
    } 
        //getters
        get model(){
            return this._model
        }

        get yearAssembled(){
            return this._yearAssembled
        }

        get rented(){
            return this._rented
        }

        get rentRate(){
            return this._rentRate
        }



        //Setters
        public set rented(newRented:boolean){
            this._rented=newRented
        }

        //Abstract
        abstract rentalRate(): number;


        rent():string{
            if(this._rented===false){
                this._rented=true
                return "Renting Vehicle...\n Vechile rented successfully."

            }
            else{
            return "This Vehicle is already rented"}
        }

        return(){
            if(this._rented===true){
                console.log("Returning rented Vehicle \n Returned rented vechle successfully.") 
                this._rented= false;
                
            }
            else{
            return "This Vehicle is already rented"}

        }
}

// Sub classes for Vehicle types.

class Car extends Vehicle{
    private _color: string;
    private _numberPlate: string;
    private _capacity:number;

    constructor(
        model: string,
        yearAssembled: string,
        rented: boolean,
        rentRate:number,
        color:string,
        numberPlate:string,
        capacity:number
){
    super(model,yearAssembled,rented,rentRate);
    this._color=color,
    this._numberPlate=numberPlate,
    this._capacity=capacity
}
    
    
    rentalRate(): number {
        return this.rentRate
    }

    get color(){
        return this._color
    }


    get capacity(){
        return this._capacity
    }

    get numberPlate(){
        return this._numberPlate
    }

    set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
    }

}

class Truck extends Vehicle{
    private _color: string;
    private _numberPlate: string;
    private _capacity:number;

    constructor(
        model: string,
        yearAssembled: string,
        rented: boolean,
        rentRate:number,
        color:string,
        numberPlate:string,
        capacity:number
){
    super(model,yearAssembled,rented,rentRate);
    this._color=color,
    this._numberPlate=numberPlate,
    this._capacity=capacity
}
    
    
    rentalRate(): number {
        return this.rentRate
    }

    get color(){
        return this._color
    }


    get capacity(){
        return this._capacity
    }

    get numberPlate(){
        return this._numberPlate
    }

    set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
    }

}

class Motorcycle extends Vehicle{
    private _color: string;
    private _numberPlate: string;
    private _capacity:number;

    constructor(
        model: string,
        yearAssembled: string,
        rented: boolean,
        rentRate:number,
        color:string,
        numberPlate:string,
        capacity:number
){
    super(model,yearAssembled,rented,rentRate);
    this._color=color,
    this._numberPlate=numberPlate,
    this._capacity=capacity
}
    
    
    rentalRate(): number {
        return this.rentRate
    }

    get color(){
        return this._color
    }


    get capacity(){
        return this._capacity
    }

    get numberPlate(){
        return this._numberPlate
    }

    set numberPlate(newNumPlate:string){
        this.numberPlate=newNumPlate
    }

}

// Main Program
// Create instances of each type of vehicle
const car = new Car("Audi", "2020", false, 50, "red", "ABC123", 5);
const truck = new Truck("Ford", "2019", false, 100, "blue", "XYZ789", 1000);
const motorcycle = new Motorcycle("Harley Davidson", "2021", false, 30, "black", "DEF456", 2);

// Rent and return Car
console.log("Renting a car...");
console.log(car.rent()); // Renting Vehicle...
console.log("Trying to rent the same car again...");
console.log(car.rent()); // This Vehicle is already rented
console.log("Returning the car...");
console.log(car.return()); // Returning rented Vehicle
console.log("Trying to return the same car again...");
console.log(car.return()); // This Vehicle is not rented

// Rent and return Truck
console.log("Renting a truck...");
console.log(truck.rent()); // Renting Vehicle...
console.log("Returning the truck...");
console.log(truck.return()); // Returning rented Vehicle

// Rent and return Motorcycle
console.log("Trying to return the motorcycle...");
console.log(motorcycle.return()); // This Vehicle is not rented
console.log("Renting the motorcycle...");
console.log(motorcycle.rent()); // Renting Vehicle...
console.log("Returning the motorcycle...");
console.log(motorcycle.return()); // Returning rented Vehicle
