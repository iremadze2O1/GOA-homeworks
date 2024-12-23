// შექმენით ობიექტი და გამოიტანეთ მისი ინფორმაცია შემდეგი ფორმატით ( key: value )

const language = {
    markup: "html",
    programming: "java",
    real: "English"
}

for (const key in person) {
    const value = String(person[key]);
    if (value.length < 5) {
        console.log(value);
    }
}

// for (const key in language) {
//     console.log(key, language[key]);
// }