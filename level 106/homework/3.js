function sort(initialArray, sortingArray) {
    let sortedArray = [];
    for (let i = 0; i < sortingArray.length; i++) {
      sortedArray.push(initialArray[sortingArray[i]]);
    }
    return sortedArray;
}

// ვერ გავიგე  https://www.codewars.com/kata/59dc8288fc3c49cc3f000039  
