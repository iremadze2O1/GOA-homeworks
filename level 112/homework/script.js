class Book{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    getSummary(){
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }
}

class AdventureBook extends Book{
    constructor(title, author, pages, difficulty){
        super(title, author, pages);
        this.difficulty = difficulty;
    }
    getSummary(){
        return `${super.getSummary()} An adventurous journey with difficulty: ${this.difficulty}.`;
    }
    uniqueFeature(){
        return `This adventure book keeps you on the edge!`;
    }
}

class SatireBook extends Book {
    constructor(title, author, pages, humorLevel) {
        super(title, author, pages);
        this.humorLevel = humorLevel;
    }
    getSummary() {
        return `${super.getSummary()} A satirical read with humor level: ${this.humorLevel}.`;
    }
    uniqueFeature() {
        return `This book offers a witty critique of society!`;
    }
}

class FantasyBook extends Book {
    constructor(title, author, pages, magicSystem) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
    }
    getSummary() {
        return `${super.getSummary()} A magical world with a ${this.magicSystem} magic system.`;
    }
    uniqueFeature() {
        return `Step into a fantastical realm with mythical creatures!`;
    }
}

// chatGPT-ის გან ავიღე ეს წიგნები
const books = [
    new AdventureBook("Into the Wild", "Jon Krakauer", 300, "Hard"),
    new SatireBook("Animal Farm", "George Orwell", 150, "High"),
    new FantasyBook("Harry Potter", "J.K. Rowling", 500, "Wand-based"),
    new AdventureBook("The Hobbit", "J.R.R. Tolkien", 310, "Medium"),
    new SatireBook("Catch-22", "Joseph Heller", 450, "Extreme"),
    new FantasyBook("The Name of the Wind", "Patrick Rothfuss", 662, "Sympathy-based"),
    new AdventureBook("Treasure Island", "Robert Louis Stevenson", 280, "Medium"),
    new SatireBook("Good Omens", "Terry Pratchett & Neil Gaiman", 432, "High"),
    new FantasyBook("The Way of Kings", "Brandon Sanderson", 1007, "Stormlight-based")
];

const booksContainer = document.getElementById("books");
books.forEach(book =>{
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `<strong>${book.title}</strong><br>${book.getSummary()}<br><em>${book.uniqueFeature()}</em>`;
    booksContainer.appendChild(bookDiv);
});