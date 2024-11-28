// // ასოციაცური - იგი წარმოადგენს ინდექსებს str-ებით და მასივის ფუნქციას ვერ გამოვიყენებთ
// // ობიექტი - როგორც ასოციაცური მასივი მაგრამ უბრალოდ გამოიყენება str ინდექსებზე


// console.log(Math.sqrt(Math.PI));
// // gives us PI
// console.log(Math.E(5));
// // returns euler number constant
// console.log(Math.floor(2.101));
// // rounds down the number
// console.log(Math.trunc(5.675));
// // removes numbers after decimal
// console.log(Math.round(2.56));
// // rounds float to cloesest int
// console.log(Math.ceil(6.43));
// // rounds up the float
// console.log(Math.pow(5,5));
// // makes number power to the second number inputed
// console.log(Math.round(Math.random()));
// // it chooses random number 1-3
// console.log(Math.abs(-47))
// // takes number and make sit positive
// console.log(Math.sqrt(6));
// // findes the squre root of number



function choseRock(){
    // 1 = rock 2 = paper 3 = scissors
    theyChose = Math.round(Math.random());
    if(theyChose === 1){
        alert("draw");
    }
    else if (theyChose === 2){
        alert("lose");
    }
    else (theyChose === 3);{
        alert("win");
    }
}

function chosePaper(){
    // 1 = rock 2 = paper 3 = scissors
    theyChose = Math.round(Math.random());
    if(theyChose === 1){
        alert("win");
    }
    else if (theyChose === 2){
        alert("draw");
    }
    else (theyChose === 3);{
        alert("lose");
    }
}

function choseSicissors(){
    // 1 = rock 2 = paper 3 = scissors
    theyChose = Math.round(Math.random());
    if(theyChose === 1){
        alert("lose");
    }
    else if (theyChose === 2){
        alert("win");
    }
    else (theyChose === 3);{
        alert("draw");
    }
}

// const myScoreP = document.getElementById("myScore");
// const compScoreP = document.getElementById("compScore");
// const winsP = document.getElementById("winner");
// const btnDiv = document.getElementById("options");
// const computerChoiceP = document.getElementById("compPicked");

// const compOptions = ["rock", "paper", "scissors"];

// let compScore = 0;
// let myScore = 0;

// function play(e) {
//     const btnId = e.target.id;

//     const compChoice = compOptions[Math.floor(Math.random() * 3)]
    
//     if(btnId === compChoice) {
//         winsP.textContent = "Tie!"
//     } else if((btnId === "rock" && compChoice === "paper") || (btnId === "paper" && compChoice === "scissors") || (btnId === "scissors " && compChoice === "rock")) {
//         compScore++;
//         winsP.textContent = "You lost!";
//         compScoreP.textContent = "Comp score: " + compScore;
//     }
    
//     else {
//         myScore++;
//         winsP.textContent = "You won!";
//         myScoreP.textContent = "My score: " + myScore;
//     }
//     computerChoiceP.textContent = "Computer choice: " + compChoice;
// }

// btnDiv.addEventListener("click", play);