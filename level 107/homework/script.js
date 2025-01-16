// N1
function mupltiBiggest(x , y){
    const xBig = Math.max(x);
    const yBig = Math.max(y);
    return xBig + yBig;
}

// N2
function lastRepeated(n, arr) {
    const seen = [];
    let last = null;

    for (let i = n - 1; i >= 0; i--) {
        let isRepeated = false;

        for (let j = 0; j < seen.length; j++) {
            if (seen[j] === arr[i]) {
                isRepeated = true;
                break;
            }
        }

        if (isRepeated) {
            last = arr[i];
            break;
        }

        seen.push(arr[i]);
    }

    if (last !== null) {
        console.log(last);
    } else {
        console.log("no number is repeated");
    }
}


// N3
function compareToPrevious(n, arr) {
const result = [];

for (let i = 0; i < n; i++) {
    let count = 0;

    for (let j = 0; j < i; j++) {
        if (arr[j] < arr[i]) {
            count++;
        }
    }

    result.push(count);
}

console.log(result.join(","));
}
