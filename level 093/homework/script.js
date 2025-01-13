let CC = 0;
let GC = 0;
let CPerClick = 1;
let GPerClick = 1;

let fingerPrice = 25;
let minesPrice = 25;
let doublePrice = 50;

const cookieElement = document.getElementById("cookie");
const CCElement = document.getElementById("CC");
const GCElement = document.getElementById("gold");
const fingerBTN = document.getElementById("finger");
const minesBTN = document.getElementById("mines");
const doubleBTN = document.getElementById("double");

cookieElement.addEventListener("click", function(){
  CC += CPerClick;
  GC += GPerClick;
  update();
});

fingerBTN.addEventListener("click", function(){
  if (GC >= fingerPrice) {
    GC -= fingerPrice;
    CPerClick += 1;
    fingerPrice *= 2;
    fingerBTN.textContent = `Bigger Finger ${fingerPrice} Gold`;
    update();
  }
});

minesBTN.addEventListener("click", function(){
  if (CC >= minesPrice) {
    CC -= minesPrice;
    GPerClick += 1;
    minesPrice *= 2;
    minesBTN.textContent = `Better Mines ${minesPrice} Cookies`;
    update();
  }
});

doubleBTN.addEventListener("click", function(){
  if (GC >= doublePrice) {
    GC -= doublePrice;
    CPerClick *= 2;
    doublePrice *= 2;
    doubleBTN.textContent = `Double Cookies ${doublePrice} Gold`;
    update();
  }
});

function update() {
  CCElement.textContent = CC;
  GCElement.textContent = GC;

  if (CC == 100000 || GC == 100000) {
    alert("Congratulations you have no life");
  }
}

update();
