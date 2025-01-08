document.getElementById("generate").addEventListener("click", generateID);
document.getElementById("check").addEventListener("click", checkID);

const idStorage = {};

function generateID(){
    const idLength = 8;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let newID = "";

    for(let i = 0; i < idLength; i++){
        const randomIndex = Math.floor(Math.random() * characters.length);
        newID += characters[randomIndex];
    }

    const index = Object.keys(idStorage).length;
    idStorage[newID] = index;

    document.getElementById("NewID").innerText = `New ID: ${newID} (${index})`;
}


function checkID(){
    const inputID = document.getElementById("inputID").value;

    if(idStorage[inputID] !== undefined){
        document.getElementById("result").innerHTML = `ID "${inputID}" exists<br> key-ID: value-index (${idStorage[inputID]})`;
    }else{
        document.getElementById("result").innerText = `ID "${inputID}" Doesn't exist!`;
    }
}


