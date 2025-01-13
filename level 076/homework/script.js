const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

function sumArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));


function extractNames(arr) {
  return arr.map(obj => obj.name);
}

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

console.log(extractNames(users));
  

const person = {
    name: "John",
    age: 30,
    job: "Engineer",
  
    greet: function() {
      console.log("Hello, my name is " + this.name);
    },
  
    celebrateBirthday: function() {
      this.age++;
      console.log("Happy Birthday! I am now " + this.age + " years old.");
    },
  
    changeJob: function(newJob) {
      this.job = newJob;
      console.log("I am now a " + this.job);
    }
};

person.greet();
person.celebrateBirthday(); 
person.changeJob("Developer"); 
 

function findMinMaxWords(sentence) {
    const words = sentence.split(' ');
    let minWord = words[0];
    let maxWord = words[0];
  
    words.forEach(word => {
      if (word.length < minWord.length) minWord = word;
      if (word.length > maxWord.length) maxWord = word;
    });
  
    return [minWord, maxWord];
}
  

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(findMinMaxWords(sentence));
