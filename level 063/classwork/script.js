//   if (hour < 18) {
//     greeting = "Good day";
//   }

//   const fruits = ["Banana", "Orange", "Apple", "Mango"];
//   fruits.push("Kiwi");

//   const cars = ["Saab", "Volvo", "BMW"];

function onlyEven(arr) {
    let Evens = [];
    let odds = [];
    for (let i = 0; i < arr.length; i++) {
        let sm = arr[i] % 2;
        if (sm == 1) {
            odds.push(arr[i]);
        } else {
            Evens.push(arr[i]);
        };
    };
    console.log(Evens);
};

onlyEven([1, 2, 3, 4]);


