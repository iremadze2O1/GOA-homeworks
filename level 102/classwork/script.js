// const display = document.getElementById('counter');
// const plus = document.getElementById('plus');
// const minus = document.getElementById('minus');
// const reset = document.getElementById('reset');

// let counterValue = parseInt(localStorage.getItem('counter')) || 0;
// display.textContent = counterValue;

// function updateCounter(value) {
//     counterValue = value;
//     localStorage.setItem('counter', counterValue);
//     display.textContent = counterValue;
// }

// plus.addEventListener('click', () => updateCounter(counterValue + 1));
// minus.addEventListener('click', () => updateCounter(counterValue - 1));
// reset.addEventListener('click', () => updateCounter(0));


localStorage.clear();
localStorage.setItem("1899", "phone",);
localStorage.setItem("1900", "laptop");
localStorage.setItem("1901", "tablet");
localStorage.setItem("1902", "monitor");
localStorage.setItem("1903", "keyboard");
localStorage.setItem("1904", "mouse");
localStorage.setItem("1905", "printer");
localStorage.setItem("1906", "router");
localStorage.setItem("1907", "speaker");
localStorage.setItem("1908", "headphones");

for (let i=0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}
