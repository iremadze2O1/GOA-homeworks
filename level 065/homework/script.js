// Dot Notation არის სწრაფი და ეფექტური გზა, როცა საქმე გვაქვს  
// მარტივ ობიექტებთან და ჩვეულებრივ სახელებთან. 

let age = prompt("Enter your age:");
age = Number(age);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    let yearsLeft = 18 - age;
    console.log(`You are not an adult. You need ${yearsLeft} more years.`);
}
