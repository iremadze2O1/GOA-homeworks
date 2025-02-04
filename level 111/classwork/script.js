class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    perimeter() {
        return 2 * (this.height + this.width);
    }

    get perimeterValue() {
        return this.perimeter();
    }
}

const rect = new Rectangle(10, 20);
console.log(rect.perimeter());




class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Mammal extends Animal {
    constructor(name, age, hasFur) {
        super(name, age);
        this.hasFur = hasFur;
    }
}

class Dog extends Mammal {
    constructor(name, age, breed) {
        super(name, age, true);
        this.breed = breed;
    }
}

const dog = new Dog('Rex', 5, 'German Shepherd');
dog.speak();




class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    toEnvironment() {
        return `${this.model} it is very bad for the environment.`;
    }

    startcar() {
        return `${this.model} is starting...`;
    }
}

class ElectricCar extends Car {
    constructor(model, year, batteryPercentage, model) {
        super(model, year, brand);
        this.batteryPercentage = batteryPercentage;
    }

    toEnvironment() {
        return `${this.model} it is good for the environment.`;
    }

    // the super method
    
}

const tesla = new ElectricCar('Tesla', 'Model S', 2022, 100);
console.log(tesla.startEngine());
console.log(tesla.drive());

