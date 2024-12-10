// manual sort

function manualSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let l = 0; l < arr.length - 1; l++) {
            if (arr[l] > arr[l + 1]) {

                let temp = arr[l];
                arr[l] = arr[l + 1];
                arr[l + 1] = temp;
            }
        }
    }
    return arr;
}

const arr = [5, 3, 8, 1, 2];
console.log(manualSort(arr)); 

// manual filter

function manualFilter(array, minV) {
    const filtered = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= minV) {
            filtered.push(array[i]);
        }
    }
    return filtered;
}


const arr2 = [5, 3, 8, 1, 2];
const minV = 4;
console.log(manualFilter(arr2, minV));
