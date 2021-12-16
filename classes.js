class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    start = () => {
        return `My car is a ${this.brand} and is from the year ${this.year}`
    };
}

const ferrari = new Car("Ferrari", 1989);
const tesla = new Car("Tesla", 2019)

console.log(ferrari.start());
console.log(tesla.start());

console.log("--sub-class--")


//sub class

class CarModel extends Car {
    constructor(brand, year, model) {
        super (brand, year);
        this.model = model;
    }
    start2 = () => {
        return `Brand: ${this.brand} Year: ${this.year} Model: ${this.model}`;
    }
}

const myMercedes = new CarModel("Mercedes", 1957,"ND458");
const myMonstertruck = new CarModel("Gravedigger", 2006, "WD933");

console.log(myMercedes.start());
console.log(myMonstertruck.start2());