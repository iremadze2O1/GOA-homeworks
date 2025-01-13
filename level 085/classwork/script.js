document.getElementById("N1").addEventListener("click", function(){
    console.log("N1");
})

document.getElementById("N2").addEventListener("click", function(){
    console.log("N2");
    event.stopPropagation();
})

document.getElementById("N3").addEventListener("click", function(){
    console.log("N3");
})

document.getElementById("N4").addEventListener("click", function(){
    console.log("N4");
    event.stopPropagation();
})

document.getElementById("N5").addEventListener("click", function(){
    console.log("N5");
})

for(let i = 0; i >= 5; i++){
    
}