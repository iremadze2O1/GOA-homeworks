function longestNoRepeat(arr){
    let maxLen = 0;
    start = 0;
    seen = {};
    result = [];

    for (let i = 0; i < arr.length; i++){
        if (seen[arr[i]] >= start){
            start = seen[arr[i]] + 1;
        }
        seen[arr[i]] = i;
        if (i - start + 1 > maxLen){
            maxLen = i - start + 1;
            result = arr.slice(start, i + 1);
        }
    }

    return result;
}

console.log(longestNoRepeat([1, 2, 3, 1, 2, 3]));