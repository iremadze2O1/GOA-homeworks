// N1
let array1 = [5, 10, 15, 20, 25];

console.log("Element at index 2: " + array1[2]);
console.log("Element at index 4: " + array1[4]);


// N2
let N = parseInt(prompt("Enter the number of elements:"));

let array2 = [];
for (let i = 0; i < N; i++) {
    array2.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

console.log("Elements at odd indices:");
for (let i = 1; i < N; i += 2) {
    console.log(array2[i]);
}


// N3
let array3 = [];

for (let i = 0; i < 10; i++) {
    array3.push(parseInt(prompt(`Enter element ${i + 1}:`)));
}

let doubledArray = array3.map(num => num * 2);

console.log("Doubled values:");
for (let i = 0; i < doubledArray.length; i++) {
    console.log(doubledArray[i]);
}


// N4
let N4 = parseInt(prompt("Enter the number of elements:"));

let array4 = [];
for (let i = 0; i < N4; i++) {
    array4.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

console.log("Reversed order:");
for (let i = array4.length - 1; i >= 0; i--) {
    console.log(array4[i]);
}


// N5
let N5 = parseInt(prompt("Enter the number of elements:"));

let array5 = [];
for (let i = 0; i < N5; i++) {
    array5.push(parseInt(prompt(`Enter number ${i + 1}:`)));
}

let temp = array5[0];
array5[0] = array5[N5 - 1];
array5[N5 - 1] = temp;

console.log("Array after swapping the first and last elements:");
console.log(array5);