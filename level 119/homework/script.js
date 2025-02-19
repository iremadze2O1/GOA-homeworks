function createStudentMap(students) {
    let studentMap = new Map();
    students.forEach(student => {
        studentMap.set(student.name, student.score);
    });
    return studentMap;
}

function removeDuplicates(array) {
    return [...new Set(array)];
}

function increaseScores(studentMap) {
    let newMap = new Map(studentMap);
    newMap.forEach((score, name) => {
        newMap.set(name, score + 5);
    });
    return newMap;
}