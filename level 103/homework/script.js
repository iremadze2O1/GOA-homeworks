let score = 0;
let rangeStart = 1;
let rangeEnd = 2;

let randomNumber = generateRandomNumber(rangeStart, rangeEnd);
document.addEventListener('DOMContentLoaded', () => {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('displayName').innerText = userName;
        document.getElementById('mainContent').classList.remove('hidden');
    } else {
        document.getElementById('namePrompt').classList.remove('hidden');
    }
});
function saveName() {
    const userName = document.getElementById('userName').value;
    if (userName) {
        localStorage.setItem('userName', userName);
        document.getElementById('displayName').innerText = userName;
        document.getElementById('namePrompt').classList.add('hidden');
        document.getElementById('mainContent').classList.remove('hidden');
    }
}
function changeBackgroundColor() {
    const color = document.getElementById('colorPicker').value;
    document.body.style.backgroundColor = color;
}
function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start;
}
function checkGuess() {
    const guess = parseInt(document.getElementById('guessNumber').value);
    if (guess === randomNumber) {
        score++;
        document.getElementById('score').innerText = score;
        rangeEnd *= 2;
        randomNumber = generateRandomNumber(rangeStart, rangeEnd);
        document.getElementById('rangeEnd').innerText = rangeEnd;
        document.getElementById('feedback').innerText = 'Correct! Try the next one.';
    } else {
        document.getElementById('feedback').innerText = 'Incorrect, try again.';
    }
}
function logout() {
    localStorage.removeItem('userName');
    location.reload();
}