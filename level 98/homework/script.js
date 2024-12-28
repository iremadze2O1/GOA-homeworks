function unqueChar(matrix){
    const counts = {}

    for (let row of matrix){
        for (const element of row){
            if (counts[element]) {
                counts[element] += 1;
            } else {
                counts[element] = 1;
            }
        }
    }

    const unique = []
    for (const element in counts){
        if (counts[element] === 1){
            unique.push(number(element));
        }
    }

}

const matrix = [
    [1, 2, 3],
    [4, 5, 3],
    [6, 2, 1]
];


function frequency(str) {
    const letterCount = {};
    for (let char of str) {
        letterCount[char] = (letterCount[char] || 0) + 1;
    }

    let maxFrequency = 0;
    for (let char in letterCount) {
        if (letterCount[char] > maxFrequency) {
            maxFrequency = letterCount[char];
        }
    }

    const mostFrequentChars = [];
    for (let char in letterCount) {
        if (letterCount[char] === maxFrequency) {
            mostFrequentChars.push(char);
        }
    }

    return mostFrequentChars;
}

console.log(frequency("hello world")); 
console.log(frequency("aabbcc"));




