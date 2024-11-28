const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const images = [
    'download (1).png', 
    'download.jpeg', 
    'download.png'
];

let num = 0;

next.addEventListener("click" , function(){
    num++;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
})

prev.addEventListener("click" , function(){
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.src = images[num];
})