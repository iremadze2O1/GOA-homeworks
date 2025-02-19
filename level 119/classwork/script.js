function mergeSets(setsArray) {
    let merged = new Set();
    for (let set of setsArray) {
        for (let value of set) {
            merged.add(value);
        }
    }
    return merged;
}

function difference(a, b) {
    let result = new Set(a);
    for (let value of b) {
        if (result.has(value)) {
            result.delete(value);
        } else {
            result.add(value);
        }
    }
    return result;
}

function frequency(str) {
    let freqMap = new Map();
    for (let char of str) {
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char) + 1);
        } else {
            freqMap.set(char, 1);
        }
    }
    return freqMap;
}