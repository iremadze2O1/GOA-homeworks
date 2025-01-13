// example 1: Modulus
console.log(10 % 3); 
console.log(15 % 4); 
console.log(20 % 5); 
console.log(25 % 6); 
console.log(30 % 7); 
console.log(35 % 8); 
console.log(40 % 9); 
console.log(45 % 10); 
console.log(50 % 11); 
console.log(55 % 12); 

// example 2: Math.random()
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// example 3: Math.floor()
console.log(Math.floor(5.7)); 
console.log(Math.floor(3.4)); 
console.log(Math.floor(8.9)); 
console.log(Math.floor(6.2)); 
console.log(Math.floor(9.1)); 
console.log(Math.floor(7.6)); 
console.log(Math.floor(12.8)); 
console.log(Math.floor(15.3)); 
console.log(Math.floor(20.5)); 
console.log(Math.floor(25.7)); 

// example 4: Math.ceil()
console.log(Math.ceil(5.2)); 
console.log(Math.ceil(3.1)); 
console.log(Math.ceil(8.7)); 
console.log(Math.ceil(6.5)); 
console.log(Math.ceil(9.3)); 
console.log(Math.ceil(7.1)); 
console.log(Math.ceil(12.4)); 
console.log(Math.ceil(15.9)); 
console.log(Math.ceil(20.6)); 
console.log(Math.ceil(25.1)); 

// example 5: Math.max()
console.log(Math.max(5, 10, 15)); 
console.log(Math.max(3, 7, 12)); 
console.log(Math.max(20, 25, 30)); 
console.log(Math.max(6, 8, 9)); 
console.log(Math.max(15, 10, 5)); 
console.log(Math.max(10, 20, 30)); 
console.log(Math.max(25, 30, 40)); 
console.log(Math.max(7, 8, 9)); 
console.log(Math.max(50, 60, 70)); 
console.log(Math.max(12, 13, 14)); 

function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}


function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
