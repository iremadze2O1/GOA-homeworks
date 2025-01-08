exit = () => {
    while (true) {
        let num1 = prompt("Enter the first number:");
        if (num1 === null || num1.trim().toLowerCase() === 'exit') break;

        let num2 = prompt("Enter the second number:");
        if (num2 === null || num2.trim().toLowerCase() === 'exit') break;

        let product = parseFloat(num1) * parseFloat(num2);
        if (isNaN(product)) {
            alert("Please enter valid numbers!");
            continue;
        }

        alert(`The product of the two numbers is: ${product}`);
    }
    alert("Exiting the program.");
}

exit();