class Human {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    bmi() {
        const bmiValue = this.weight / (this.height ** 2);

        if (bmiValue < 18.5) {
            return 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            return 'Normal';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            return 'Overweight';
        } else {
            return 'Obese';
        }
    }
}

const person1 = new Human("Alice", 30, 1.65, 60);
const person2 = new Human("Bob", 25, 1.75, 70);
const person3 = new Human("Charlie", 35, 1.80, 80);

console.log(person1, person1.bmi());
console.log(person2, person2.bmi());
console.log(person3, person3.bmi());



class Car {
    constructor(make, model, year, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
    }

    drive(distance) {
        this.mileage += distance;
        return this.mileage;
    }
}

const car1 = new Car("Toyota", "Corolla", 2010, 120000);
const car2 = new Car("Honda", "Civic", 2015, 90000);
const car3 = new Car("Ford", "Mustang", 2020, 30000);

console.log(car1, car1.drive(100));
console.log(car2, car2.drive(200));
console.log(car3, car3.drive(500));



class Animal {
    constructor(name, species, age) {
        this.name = name;
        this.species = species;
        this.age = age;
    }

    speak() {
        return `${this.name} says hello!`;
    }
}

const animal1 = new Animal("Lion", "Panthera leo", 5);
const animal2 = new Animal("Elephant", "Loxodonta", 10);
const animal3 = new Animal("Kangaroo", "Macropus", 3);

console.log(animal1, animal1.speak());
console.log(animal2, animal2.speak());
console.log(animal3, animal3.speak());