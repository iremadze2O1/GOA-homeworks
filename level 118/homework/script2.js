class Person{
    #name;
    #age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this.#name;
    }

    set name(name){
        if(typeof name === "string" && name.trim()){
            this.#name = name;
        }else{
            console.warn("Invalid name. Keeping previous value.");
        }
    }

    get age(){
        return this.#age;
    }

    set age(age){
        if(Number.isInteger(age) && age > 0){
            this.#age = age;
        }else{
            console.warn("Invalid age. Keeping previous value.");
        }
    }
}