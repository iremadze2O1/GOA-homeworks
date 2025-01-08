const form = document.getElementById('personForm');
const tableBody = document.getElementById('personTable').querySelector('tbody');

function generateEmail(firstName, lastName, age) {
    const randomSuffix = Math.floor(Math.random() * 1000);
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${age}${randomSuffix}@gmail.com`;
}

function saveDataToLocalStorage(data) {
    localStorage.setItem('persons', JSON.stringify(data));
}

function getDataFromLocalStorage() {
    return JSON.parse(localStorage.getItem('persons')) || [];
}

function displayData() {
    tableBody.innerHTML = '';
    const data = getDataFromLocalStorage();
    data.forEach(person => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.age}</td>
            <td>${person.idNumber}</td>
            <td>${person.height}</td>
            <td>${person.description}</td>
            <td>${person.email}</td>
        `;
        tableBody.appendChild(row);
    });
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = document.getElementById('age').value;
    const idNumber = document.getElementById('idNumber').value;
    const height = document.getElementById('height').value;
    const description = document.getElementById('description').value;
    const email = generateEmail(firstName, lastName, age);
    const person = {
        firstName,
        lastName,
        age,
        idNumber,
        height,
        description,
        email
    };
    const data = getDataFromLocalStorage();
    data.push(person);
    saveDataToLocalStorage(data);
    displayData();
    form.reset();
});

displayData();