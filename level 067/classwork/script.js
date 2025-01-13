// function Jobs(job,location,withpc,outside,degree){
//     this.job = job
//     this.location = location
//     this.withpc = withpc
//     this.outside = outside
//     this.degree = degree
// }

// const job1 = new Jobs("webdev","office/home",true,false,"sometimes")
// const job2 = new Jobs("delivery","city",false,true,false)
// const job3 = new Jobs("mechanic","garage","sometimes","sometimes",false)
// const job4 = new Jobs("teacher","school","sometimes",false,true)
// const job5 = new Jobs("no job","home",false,false,false)

// we use constructors to make our job easier 
// isnsted of making object on million lines we can make them in 1 line

function Person(name,age){
    this.name = name;
    this.age = age;
}

const person1 = new Person("ilia",13)
person1.introduce(); {
    console.log("hi i am " + name + "i am " + age + "years old");
}

function Car(brand,year){
    this.brand = brand;
    this.year = "2020";
}

const car1 = new Car('Toyota', 2018);
car1.describe(); {
    console.log(brand, year);
}

const car2 = new Car('Ford');
car2.describe(); {
    console.log(brand, year);
}
