function sayHello() {
    console.log("გამარჯობა");
}


function greetUser(name) {
    console.log(`გამარჯობა, ${name}`);
}
  

function incrementNumber(num) {
    return num + 1;
}
  

function toNegative(num) {
    if (num >= 0) {
      return -num;
    }
    return num;
}
 

function negativePlusOne(num) {
    const negative = toNegative(num);
    console.log(negative + 1);
}
 

function getElementByIdAndModify(id) {
    const element = document.getElementById(id);
  
    if (element) {
      element.style.color = "white";
      element.style.backgroundColor = "blue";
      element.textContent = "Modified Content";
    } else {
      console.error("Element not found");
    }
}


