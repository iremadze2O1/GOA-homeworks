class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getSummary() {
        return `${this.title} by ${this.author}, ${this.pages} pages.`;
    }

    get getSummary() {
        return this.getSummary();
    }

    read() {
        return `Reading ${this.title}...`;
    }
}

class AdventureBook extends Book {
    constructor(title, author, pages, difficulty, setting) {
        super(title, author, pages);
        this.difficulty = difficulty;
        this.setting = setting;
    }

    getSummary() {
        return `${this.title} is an adventure book by ${this.author}, set in ${this.setting}. It has ${this.pages} pages and is ${this.difficulty} to read.`;
    }

    get getSummary() {
        return this.getSummary();
    }

    read() {
        return `${super.read()} It's an adventurous journey!`;
    }

    explore() {
        return `Exploring the world of ${this.title}...`;
    }
}

class SatireBook extends Book {
    constructor(title, author, pages, humorType, target) {
        super(title, author, pages);
        this.humorType = humorType;
        this.target = target;
    }

    getSummary() {
        return `${this.title} is a satire book by ${this.author}, targeting ${this.target}. It has ${this.pages} pages and uses ${this.humorType} humor.`;
    }
    
    get getSummary() {
        return this.getSummary();
    }

    read() {
        return `${super.read()} Prepare for some laughs!`;
    }

    laugh() {
        return `Laughing at the satire in ${this.title}...`;
    }
}

class FantasyBook extends Book {
    constructor(title, author, pages, magicSystem, world) {
        super(title, author, pages);
        this.magicSystem = magicSystem;
        this.world = world;
    }

    getSummary() {
        return `${this.title} is a fantasy book by ${this.author}, set in the world of ${this.world}. It has ${this.pages} pages and features a ${this.magicSystem} magic system.`;
    }

    read() {
        return `${super.read()} Entering a magical realm!`;
    }

    castSpell() {
        return `Casting spells from ${this.title}...`;
    }
}

const adventureBook = new AdventureBook('The Lost World', 'Arthur Conan Doyle', 320, 'medium', 'Amazon rainforest');
console.log(adventureBook.getSummary(), adventureBook.explore(), adventureBook.read());

const satireBook = new SatireBook('Animal Farm', 'George Orwell', 112, 'dark', 'totalitarian regimes');
console.log(satireBook.getSummary(), satireBook.read(), satireBook.laugh());

const fantasyBook = new FantasyBook('Harry Potter', 'J.K. Rowling', 500, 'wizardry', 'Hogwarts');
console.log(fantasyBook.getSummary(), fantasyBook.read(), fantasyBook.castSpell());
