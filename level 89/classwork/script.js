const N1 = document.getElementById("N1")
const N2 = document.getElementById("N2")
const N3 = document.getElementById("N3")

const BN1 = document.getElementById("BN1")
const BN2 = document.getElementById("BN2")
const BN3 = document.getElementById("BN3")

BN1.addEventListener("click", function(){
    N1.style.gridColumn = "3 / 4"
    N1.style.opacity = "1";
    N2.style.gridColumn = "4 / 4"
    N2.style.opacity = "0.5";
    N3.style.gridColumn = "1 / 4"
    N3.style.opacity = "0.5";
})
BN2.addEventListener("click", function(){
    N2.style.gridColumn = "3 / 4"
    N2.style.opacity = "1";
    N3.style.gridColumn = "4 / 4"
    N3.style.opacity = "0.5";
    N1.style.gridColumn = "1 / 4"
    N1.style.opacity = "0.5";
})
BN3.addEventListener("click", function(){
    N3.style.gridColumn = "3 / 4"
    N3.style.opacity = "1";
    N1.style.gridColumn = "4 / 4"
    N1.style.opacity = "0.5";
    N2.style.gridColumn = "1 / 4"
    N2.style.opacity = "0.5";
})