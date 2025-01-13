const para = document.getElementById("timer");
let second = 20;

const t = setInterval(function() {
    para.textContent = second;
    console.log(second);
    second--;

    if(second < 0) {
        para.textContent = "Time is over!";
        clearInterval(t);
    }
}, 1000);