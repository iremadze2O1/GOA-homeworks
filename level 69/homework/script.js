// exercise N1

let myArray = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(myArray.length);

let arrayAsString = myArray.toString();
console.log(arrayAsString);

let secondElement = myArray.at(1);
console.log(secondElement);

let joinedString = myArray.join(" - ");
console.log(joinedString);

myArray.push("fig", "grape");
myArray.pop();
console.log(myArray);

// exercise N2

let myArray1 = ["apple", "banana", "cherry"];
myArray1.shift();
console.log(myArray1);

myArray1.unshift("fig");
console.log(myArray1);

delete myArray1[1];
console.log(myArray1);

let array1 = ["dog", "cat"];
let array2 = ["fish", "bird"];
let combinedArray = array1.concat(array2);
console.log(combinedArray);

myArray1.unshift("grape");
console.log(myArray1.length);

// exercise N3

let myArray2 = ["apple", "banana", "cherry", "apple", "date", "banana"];

let firstIndex2 = myArray2.indexOf("banana");
console.log(firstIndex2);

let lastIndex2 = myArray2.lastIndexOf("banana");
console.log(lastIndex2);

let includesCherry2 = myArray2.includes("cherry");
console.log(includesCherry2);

let invalidIndex2 = myArray2.indexOf("grape");
console.log(invalidIndex2);

let caseSensitiveCheck2 = myArray2.includes("Apple");
console.log(caseSensitiveCheck2);


// exercise N4

let myArray3 = ["banana", "apple", "cherry", "date"];
myArray3.sort();
console.log(myArray3);

let numberArray = [42, 7, 19, 100, 5];
numberArray.sort((a, b) => a - b);
console.log(numberArray);

numberArray.sort((a, b) => b - a);
console.log(numberArray);

myArray3.reverse();
console.log(myArray3);

numberArray.sort((a, b) => a - b);
numberArray.reverse();
console.log(numberArray);

// exercise N5

let myArray4 = [15, 3, 9, 1, 22];
myArray4.sort((a, b) => a - b);
myArray4.push(10);
console.log(myArray4);

let arrayA = [5, 12, 8];
let arrayB = [20, 2, 14];
let mergedArray = arrayA.concat(arrayB).sort((a, b) => a - b);
console.log(mergedArray);

myArray4.push(30, 40, 50);
myArray4.reverse();
console.log(myArray4);

let elementIndex = myArray4.indexOf(9);
if (elementIndex !== -1) {
    myArray4.splice(elementIndex, 1);
}
console.log(myArray4);

joinedString = myArray4.join(",");
let splitArray = joinedString.split(",");
console.log(splitArray.includes("30"));
