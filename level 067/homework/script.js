// function Person(name, age) {
//     this.name = name;
//     this.age = age;
    
//     this.introduce = function() {
//         console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
//     };
// }

// const person = new Person("Alice", 30);
// person.introduce(); 



// function book(title, author = "Unknown") {
//     this.title = title;
//     this.author = author;
    
//     this.getDetails = function() {
//         console.log(`Title: ${this.title}, Author: ${this.author}`);
//     };
// }

// const book1 = new book("მე ბებია ილიკო და ილარონი", "ნოდარ დუმბაძე");
// book1.getDetails(); 

// const book2 = new book("Untitled");
// book2.getDetails(); 


// function Classroom(students) {
//     this.students = students;
    
//     this.countStudents = function() {
//         console.log(`Number of students: ${this.students.length}`);
//     };
// }

// const classroom = new Classroom(["Alice", "Bob", "Charlie"]);
// classroom.countStudents();


// function Counter() {
//     this.value = 0;
    
//     this.increment = function() {
//         this.value += 1;
//     };
    
//     this.getValue = function() {
//         console.log(this.value);
//     };
// }

// const counter = new Counter();
// counter.increment();
// counter.getValue(); 
// counter.increment();
// counter.getValue(); 


// function Light() {
//     this.state = "off";
    
//     this.toggle = function() {
//         this.state = (this.state === "off") ? "on" : "off";
//     };
// }

// const light = new Light();
// light.toggle();
// console.log(light.state);
// light.toggle();
// console.log(light.state);


// function Product(name, price) {
//     this.name = name;
//     this.price = price;
    
//     this.getDetails = function() {
//         console.log(`Product: ${this.name}, Price: ${this.price} USD`);
//     };
// }

// const product = new Product("Laptop", 1200);
// product.getDetails();


// function User(username, contact) {
//     this.username = username;
//     this.contact = contact;
    
//     this.getContactInfo = function() {
//         console.log(`Email: ${this.contact.email}, Phone: ${this.contact.phone}`);
//     };
// }

// const user = new User("john_doe", {email: "john.doe@example.com", phone: "123-456-7890"});
// user.getContactInfo();


// function Library(books) {
//     this.books = books;
    
//     this.listBooks = function() {
//         this.books.forEach(book => {
//             console.log(`Title: ${book.title}, Author: ${book.author}`);
//         });
//     };
// }

// const library = new Library([
//     {title: "1984", author: "George Orwell"},
//     {title: "To Kill a Mockingbird", author: "Harper Lee"}
// ]);
// library.listBooks(); 


// function Cart() {
//     this.items = [];
    
//     this.addItem = function(item) {
//         this.items.push(item);
//     };
    
//     this.getItems = function() {
//         console.log(this.items);
//     };
// }

// const cart = new Cart();
// cart.addItem("Apple");
// cart.addItem("Banana");
// cart.getItems(); 


// function Student(name, marks) {
//     this.name = name;
//     this.marks = marks;
    
//     this.hasPassed = function() {
//         const average = this.marks.reduce((sum, mark) => sum + mark, 0) / this.marks.length;
//         return average >= 50;
//     };
// }

// const student1 = new Student("Alice", [80, 90, 70]);
// console.log(student1.hasPassed());

// const student2 = new Student("Bob", [40, 30, 20]);
// console.log(student2.hasPassed());
