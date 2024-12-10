const passStrength = document.getElementById('strength');

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const passwordLength = password.length;
    const numbers = "0123456789";
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const specialCharacters = "!@#$%^&*(),.?\":{}|<>";

    let hasNumber = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        if (numbers.includes(char)) hasNumber = true;
        if (upperCaseLetters.includes(char)) hasUpperCase = true;
        if (specialCharacters.includes(char)) hasSpecialChar = true;
    }    

    let strengthText = '';
    let strengthColor = '';

    if (passwordLength >= 10 && hasUpperCase && hasNumber && hasSpecialChar) {
        strengthText = 'strong';
        strengthColor = 'green';
    } else if (passwordLength >= 8 && (hasNumber || hasUpperCase)) {
        strengthText = 'meh...';
        strengthColor = 'yellow';
    } else if (passwordLength >= 6) {
        strengthText = 'weak';
        strengthColor = 'red';
    } else {
        strengthText = '';
        strengthColor = '';
    }

    passStrength.textContent = strengthText; 
    passStrength.style.color = strengthColor;
}

  