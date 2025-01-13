const input = document.getElementById('input');
const count = document.getElementById('count');

input.oninput = function () {
    count.textContent = input.value.length;
};




const textInput = document.getElementById('textInput');
const errorMessage = document.getElementById('errorMessage');

const allowedCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' , 
    ' ', ',', '.', '-'
];

textInput.addEventListener('input', function() {
    const inputValue = textInput.value;
    let isValid = true;

    for (let i = 0; i < inputValue.length; i++) {
        const char = inputValue[i];
        if (!allowedCharacters.includes(char)) {
            isValid = false;
            break;
        }
    }

    if (!isValid) {
        errorMessage.style.display = 'inline'; 
    } else {
        errorMessage.style.display = 'none'; 
    }
});