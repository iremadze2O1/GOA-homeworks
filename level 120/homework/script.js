function isSubset(A, B) {
    for (let elem of A) {
        if (!B.has(elem)) {
            return false;
        }
    }
    return true;
}

function invertMap(originalMap) {
    let invertedMap = new Map();
    originalMap.forEach((value, key) => {
        invertedMap.set(value, key);
    });
    return invertedMap;
}
function findMaxKeys(map) {
    let max = Math.max(...map.values());
    return [...map.entries()].filter(([key, value]) => value === max).map(([key]) => key);
}