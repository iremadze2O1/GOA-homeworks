// const LD = document.getElementById("lighthDark")

const Cace = document.getElementById("Cace")
const card = document.getElementById("card")
const club = document.getElementById("clubs")

card.addEventListener("mouseover" , function appear(){
    Cace.style.display = "block";
    club.style.display = "none";

})

card.addEventListener("mouseout" , function appear(){
    Cace.style.display = "none";
    club.style.display = "block";
})