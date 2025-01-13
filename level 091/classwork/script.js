function checkPasswords() {
    const Rpass = document.getElementById("Rpass").value;
    const passv = document.getElementById("passv").value;
    const message = document.getElementById("message");
    if(Rpass === ""){
        if (Rpass === passv) {
            message.style.color = "green";
            message.textContent = "Passwords match!";
        } else {
            message.style.color = "red";
            message.textContent = "Passwords do not match!";
        }
    }
    else{
        message.style.color = "red";
        message.textContent = "need to input Passwords!";
    }
}

function validate(event) {
    const Rmail = document.getElementById("Rmail").value;
    const message2 = document.getElementById("message2");


    const atPosition = Rmail.indexOf('@');
    const dotPosition = Rmail.indexOf('.com', atPosition);

    if (atPosition > 0 && dotPosition > atPosition) {
        message2.style.color = "green";
        message2.textContent = "Valid email address!";
    } else {
        message2.style.color = "red";
        message2.textContent = "Invalid email address!";
        event.preventDefault(); 
    }
}