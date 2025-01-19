function calculate(operation, ...numbers){
    const operations ={
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
        multiply: (a, b) => a * b
    };

    operation = operations[operation];

    let result = numbers[0];
    
    for (let i = 1; i < numbers.length; i++){
        result = operation(result, numbers[i]);
    }

    return result;
}

console.log(calculate('add', 1, 7, 2, 1));
console.log(calculate('subtract', 10, 3, 2));
console.log(calculate('multiply', 2, 3, 4));

