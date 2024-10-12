let car = {
    brand: "honda",
    model: "fit", 
    year: 2008
};

console.log(car)

console.log(car.brand);
console.log(car.year);

car.color = "silver";

console.log(car)

delete car.model;

console.log(car)

car.startEngine = alert("Engine started")

console.log(car)

let owner = {
    name: "nika",
    age: 35
};

Object.assign(car, { owner: owner });

console.log(car)