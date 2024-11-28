let num = [1,2,3,4,5];

// this will count how many elements in an array
let numLen = num.length();

// this will convert array to tring and will separete them with commas ,
let numStr = num.toString();

// we can call any element with this function if we know its place
let numSecond = num.at(1);

// we can join every element of array and we can choose what will separete them like " "
let joinedNUm = num.join(" ");

// this will remove the last element in an array now itll remove 5
num.pop();

// this will push new element in the array on the last index
num.push(6);

// this will remove the first element and move the other to lower index
num.shift();

// this will add new element to the 0th index and move other to higher index
num.unshift(0);

// this will leave a hole in your array and when you call that index itll return undefined
num.delete(3);

let newNum = [10,11,12,13];

// this will combine 2 or more arrays
let newerNum = num.concat(newNum);

// we can use this to sort from lowest to highest
let sorted = newerNum.sort();

// we can reverse the array
let reveresed = newerNu.reveresed();