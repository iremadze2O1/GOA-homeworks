const greet = (name = "spectator") => console.log(`hello ${name}`);

greet();
greet("Ilia");


const add = (num1 = 0, num2 = 5) => console.log(num1 + num2);

add();
add(3);
add(8, 9);

const max = (num1 = 10, num2 = 20) => console.log(Math.max(num1, num2));

max();
max(5);
max(7, 20);


const multiply = (num1 = 1, num2 = 2, num3 = 3) => console.log(num1 * num2 * num3);

multiply(); 
multiply(4); 
multiply(4, 5); 
multiply(4, 5, 6);

const price = (num1, num2 = num1 * 0.05) => console.log(num1 + num2);

price(100);
price(200);
price(100, 20);

const repeat = (text, count = 3) => console.log(text.repeat(count));

repeat("hello");
repeat("hi", 5);

const greaterThan = (num1 = 5, num2 = 10) => {
    if(num1 > num2){
        console.log(true);
    }
};

greaterThan();
greaterThan(3);
greaterThan(8, 2);

const personal = (name = "maia", age = 25, city = "Tbilisi") => console.log(`hello, my name is ${name}, ${age} years old and i live in ${city}`);

personal();
personal("ilia");
personal("nia", 15);
personal("nana", 20, "batumi");

const numberSequence = (start = 1, end = 10, step = 1) => {
    const result = [];
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
    console.log(result);
};

numberSequence();
numberSequence(5, 15, 2);
numberSequence(1, 5);



const mergeObjects = (obj1 = {}, obj2 = {}) => console.log(Object.assign({}, obj1, obj2));



mergeObjects({a: 1}, {b: 2});
mergeObjects({x: 10}, {y: 20}, {z: 30});
mergeObjects();