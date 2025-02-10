class BankAccount{
    #balance;

    constructor(initialBalance = 0){
        this.#balance = initialBalance;
    }

    getBalance(){
        return this.#balance;
    }

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
            console.log(`Deposited: ${amount}`);
        }else{
            console.warn("Invalid deposit amount");
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;
            console.log(`Withdrawn: ${amount}`);
        }else{
            console.warn("Invalid withdrawal amount or insufficient funds");
        }
    }
}