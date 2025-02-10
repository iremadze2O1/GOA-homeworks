class Card {
    #amount;
    #pin;

    constructor(amount, pin, favoriteFood, petName) {
        this.#amount = amount;
        this.#pin = pin;
    }

    get amount() {
        return this.#amount;
    }

    set amount(value) {
        if (value < 0) {
            console.error('Amount cannot be negative');
        } else {
            this.#amount = value;
        }
    }

    set pin(value) {
        if (typeof value !== 'string' || value.length !== 4 || isNaN(value)) {
            console.error('PIN must be a 4-digit number');
        } else {
            this.#pin = value;
        }
    }

    verifyPin(inputPin) {
        return this.#pin === inputPin;
    }

    withdrawMoney(inputPin, amount) {
        if (!this.verifyPin(inputPin)) {
            console.error("Incorrect PIN. Withdrawal denied.");
            return;
        }
        if (amount > this.#amount) {
            console.error("Insufficient funds.");
            return;
        }
        this.#amount -= amount;
        console.log(`Withdrawal successful. New balance: $${this.#amount}`);
    }
}

const myCard = new Card(1000, '1234');

console.log(`Balance: ${myCard.amount}`);
myCard.withdrawMoney('1111', 200);
myCard.withdrawMoney('1234', 200);

myCard.resetPin('Pizza', 'Buddy', '5678');
myCard.withdrawMoney('5678', 300); 

myCard.resetPin('Burger', 'Max', '9999');