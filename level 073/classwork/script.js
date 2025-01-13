const p =document.getElementById("par");
const pArr = document.getElementsByClassName("parButArr");

for(let i = 0; i < 3; i++){
    pArr[i].textContent = "hello"; 
    pArr[i].style.color = "red";
};

function myName(){
    alert("ilia iremadze");
};

p.addEventListener("click", myName) ;