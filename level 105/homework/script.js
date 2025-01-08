// N1
function sumOf(num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            sum += num[i][j];
        }
    }
    return sum;
}

// N2
function changeColumn(num){
    let change = [];
    for (let i = 0; i < num.length; i++) {
        change[i] = [];
        for (let j = 0; j < num[i].length; j++) {
            change[i][j] = num[j][i];
        }
    }
    return change;
}

// N3
function diagonal(num){
    const n = num.length;
    let primary = 0;
    let secondary = 0;

    for (let i = 0; i < n; i++){
        primary += num[i][i];
        secondary += num[i][n - i - 1];
    }

    return [primary, secondary];
}