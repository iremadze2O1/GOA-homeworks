let array = [10, 20, 30, 40, 50];
console.log("2nd element:", array[2]);
console.log("4th element:", array[4]);


let size = parseInt(prompt("Enter the number of elements: "));
let oddIndexArray = [];
for (let i = 0; i < size; i++) {
    oddIndexArray.push(parseInt(prompt("Enter a number: ")));
}
console.log("Elements at odd indices:");
for (let index = 1; index < oddIndexArray.length; index += 2) {
    console.log(oddIndexArray[index]);
}


let inputNumbers = [];
console.log("Enter 10 numbers:");
for (let counter = 0; counter < 10; counter++) {
    inputNumbers.push(parseInt(prompt(`Enter number ${counter + 1}:`)));
}
let doubledNumbers = inputNumbers.map(value => value * 2);
console.log("Doubled array:", doubledNumbers);


let totalNumbers = parseInt(prompt("Enter the number of elements: "));
let reversedArray = [];
for (let counter = 0; counter < totalNumbers; counter++) {
    reversedArray.push(parseInt(prompt("Enter a number: ")));
}
console.log("Reversed array:", reversedArray.reverse());


let elementCount = parseInt(prompt("Enter the number of elements: "));
let swappedArray = [];
for (let index = 0; index < elementCount; index++) {
    swappedArray.push(parseInt(prompt("Enter a number: ")));
}
if (swappedArray.length > 1) {
    let firstElement = swappedArray[0];
    swappedArray[0] = swappedArray[swappedArray.length - 1];
    swappedArray[swappedArray.length - 1] = firstElement;
}
console.log("Array after swapping first and last elements:", swappedArray);
