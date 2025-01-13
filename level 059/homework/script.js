let text = document.getElementById("tetx").textContent;
alert(text);

let P = document.getElementById("para");
let styleObject = {
  "color": P.style.color,
  "bg-color": P.style.backgroundColor,
  "font-weight": P.style.fontWeight,
  "font-size": P.style.fontSize
};

console.log(styleObject);

let divBlock = document.getElementById("myDiv");
divBlock.style.display = "flex";
divBlock.style.width = "300px";
divBlock.style.height = "200px";
divBlock.style.backgroundColor = "lightblue";
