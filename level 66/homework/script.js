// let num = Number(prompt("Enter your number:"));

// if (num % 2 == 1){
//     alert("your number is odd");
// } else if (num % 2 == 0){
//     alert("your number is odd");
// } else{
//     alert("please enter a real number")
// }


// let nums = [10, 20, 30];

// if (nums.length === 0) {
//     console.log("The list is empty.");
// } else {
//     let sum = nums.reduce((total, num) => total + num, 0);
//     console.log("The sum of the nums is:" + sum);
// }


// function processNumbers(numbers) {
//     let result = [];
//     for (let num of numbers) {
//         let multiplied = num * 3;
//         if (multiplied > 20) {
//             result.push(multiplied);
//         }
//     }
//     return result;
// }

// let numbers = [5, 7, 2, 10, 3];
// let result = processNumbers(numbers);

// console.log(result);


// function findMaxNumber(numbers) {
//     if (numbers.length === 0) {
//         return null;
//     } else {
//         let max = numbers[0];
//         for (let num of numbers) {
//             if (num > max) {
//                 max = num;
//             }
//         }
//         return max;
//     }
// }

// let numbers = [5, 7, 2, 10, 3];
// let maxNumber = findMaxNumber(numbers);

// console.log(maxNumber);


// function checkProduct(num1, num2) {
//     if (num1 * num2 > 100) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let result = checkProduct(10, 12);
// console.log(result); 


// function checkFirstAndLastLetter(text) {
//     if (text[0] === text[text.length - 1]) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let result = checkFirstAndLastLetter("radar");
// console.log(result);


// function letterFrequency(text) {
//     let frequency = {};
    
//     for (let i = 0; i < text.length; i++) {
//         let currentLetter = text[i];
//         if (frequency[currentLetter]) {
//             frequency[currentLetter] += 1;
//         } else {
//             frequency[currentLetter] = 1;
//         }
//     }
    
//     return frequency;
// }

// let result = letterFrequency("hello");
// console.log(result); 


