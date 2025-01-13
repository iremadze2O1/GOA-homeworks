const form = document.getElementById("firstFrom");
const tbody = document.getElementById("tableHead");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const firstName = form.firstname.value;
    const mail = form.mail.value;
    const pass = form.pass.value;
    const link = form.link.value;

    const data = [firstName , mail , pass , link];

    const tr = document.createElement("tr");

    for(let i = 0; i < data; i++){
        const td = documnet.createElement("td");
        td.textcontent = data[i];
        tr.appendChild(td);
    }

    form.firstname.value = "";
    form.mail.value = "";
    form.pass.value = "";
    form.link.value = "";

    tbody.appendChild(tr);

})

// const form = document.querySelector("form");
// const tbody = document.querySelector("tbody");


// form.addEventListener("submit", function(e) {
//     e.preventDefault();

//     const firstname = form.firstname.value;
//     const email = form.email.value;
//     const pass = form.pass.value;

//     // tbody.innerHTML = "<p>" + firstname + "</p>";
//     // tbody.innerHTML = `<p>${firstname}</p>`;

//     tbody.innerHTML += `
//         <tr>
//             <td>${firstname}</td>
//             <td>${email}</td>
//             <td>${pass}</td>
//         </tr>
//     `;

// })