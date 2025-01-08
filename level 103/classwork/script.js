document.getElementById("generate").addEventListener("click", generateID);
document.getElementById("check").addEventListener("click", checkID);

function generateID() {
    const IDLength = 8;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";

    for (let i = 0; i < IDLength; i++) {
        const random = Math.floor(Math.random() * characters.length);
        newID += characters[random];
    }

    localStorage.setItem(newID, index);
    const generated = document.getElementById("generatedID");
    generated.textContent = `Generated ID: ${newID}`;
}

function checkID() {
    const inputID = document.getElementById("checkInput").value;

    const checked = document.getElementById("checked");

    if (localStorage.getItem(inputID) !== null) {
        checked.textContent = `Checked ID: "${inputID}" exists`;
    } else {
        checked.textContent = `Checked ID: "${inputID}" does not exist!`;
    }
}