// N1
const arr = [1, 2, 3, 4, 5];
const [first, second, third, fourth, fifth] = arr;
console.log(first, second, third, fourth, fifth);


// N2
const obj = { a: 10, b: 20, c: 30 };
const { a, b, c } = obj;
console.log(a, b, c);

// N3
const person = { name: 'John', age: 25, city: 'New York' };
const { name: Name, age: Age, city: City } = person;
console.log(Name, Age, City);


// N4
const numbers = [10, 20, 30, 40, 50];
const [, , three, , fivr] = numbers;
console.log(three, five);


// N5
const people = [
{ name: 'Alice', age: 30 },
{ name: 'Bob', age: 25 },
{ name: 'Charlie', age: 35 }
];

for (const{ name, age } of people){
    console.log(name, age);
}

// N6
const [firstNum, ...lastNums] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(firstNum);
console.log(lastNums);


// N7
const [firstNum1, , , , lastNum1] = [1, 2, 3, 4, 5];
console.log(firstNum1, lastNum1);