class Calculator {
    static display = document.getElementById('display');
    static currentInput = '';
    
    static clear() {
        this.display.innerText = '0';
        this.currentInput = '';
    }
    
    static append(value) {
        if (this.currentInput === '0' && value !== '.') {
            this.currentInput = '';
        }
        this.currentInput += value;
        this.display.innerText = this.currentInput;
    }
    
    static evaluate(expression) {
        return Function('"use strict"; return (' + expression + ')')();
    }
    
    static calculate() {
        let result = this.evaluate(this.currentInput);
        this.currentInput = result.toString();
        this.display.innerText = this.currentInput;
    }
}