function greet(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();
    }, 2000);
}

function simulateProcess(message, callback) {
    setTimeout(() => {
      console.log(message);
      callback();
    }, 2000);
}

function processArray(numbers, callback) {
    let processedArray = [];
    
    numbers.forEach((num, index) => {
      setTimeout(() => {
        processedArray[index] = num * num;
        if (processedArray.length === numbers.length) {
          callback(processedArray);
        }
      }, index * 1000);
    });
}

function changeColor(color, callback) {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      callback();
    }, 2000);
}

function askName(callback) {
    const name = prompt('Please enter your name:');
    setTimeout(() => {
      callback(name);
    }, 3000);
}