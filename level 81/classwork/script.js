const circle = document.getElementById("circle");
const btn = document.getElementById("btn");

circle.style.height = "100px";
circle.style.width = "100px";
circle.style.borderRadius = "50%";
circle.style.backgroundColor = "red";
circle.style.margin = "200px";
circle.style.transition = "transform 900ms ease";


btn.addEventListener("click", function(){
    circle.style.transform = "translate(0, -100px)";
    setTimeout(function() {
        circle.style.transform = "translate(0, 100px)";
    }, 600);
});
