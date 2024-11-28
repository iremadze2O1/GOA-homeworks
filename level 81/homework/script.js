let fadeState = false;

function toggleFade() {
  const box = document.getElementById("fadeBox");
  let opacity = parseFloat(window.getComputedStyle(box).opacity);
  const interval = 50;
  const increment = fadeState ? -0.1 : 0.1;

  const fade = setInterval(() => {
    opacity += increment;
    box.style.opacity = opacity;

    if (opacity <= 0 || opacity >= 1) {
      clearInterval(fade);
      fadeState = !fadeState;
    }
  }, interval);
}



let isSliding = false;

function slideIn() {
  const box = document.getElementById("slideBox");
  let position = isSliding ? 0 : -150;
  const target = isSliding ? -150 : 0;
  const increment = isSliding ? -5 : 5;

  const slide = setInterval(() => {
    position += increment;
    box.style.left = position + "px";

    if (position === target) {
      clearInterval(slide);
      isSliding = !isSliding;
    }
  }, 20);
}



let ballMovingRight = true;

function moveBall() {
  const ball = document.getElementById("ball");
  let position = parseInt(window.getComputedStyle(ball).left, 10);
  const target = ballMovingRight ? 400 : 0;
  const increment = ballMovingRight ? 5 : -5;

  const move = setInterval(() => {
    position += increment;
    ball.style.left = position + "px";

    if (position === target) {
      clearInterval(move);
      ballMovingRight = !ballMovingRight;
    }
  }, 10);
}



let textGrowing = true;

function resizeText() {
  const text = document.getElementById("text");
  let fontSize = parseInt(window.getComputedStyle(text).fontSize, 10);
  const target = textGrowing ? 32 : 16;
  const increment = textGrowing ? 1 : -1;

  const resize = setInterval(() => {
    fontSize += increment;
    text.style.fontSize = fontSize + "px";

    if (fontSize === target) {
      clearInterval(resize);
      textGrowing = !textGrowing;
    }
  }, 20);
}



let rotationAngle = 0;

function rotateBox() {
  const box = document.getElementById("rotatingBox");
  const targetAngle = rotationAngle + 360;
  const increment = 5;

  const rotate = setInterval(() => {
    rotationAngle += increment;
    box.style.transform = `rotate(${rotationAngle}deg)`;

    if (rotationAngle >= targetAngle) {
      clearInterval(rotate);
    }
  }, 20);
}
