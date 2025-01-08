const items = ["laptop", "mobile", "tablet", "laptop", "pc", "monitor", "keyboard", "mouse"];

const obj = {};
for(let i = 0; i < items.length; i++){
    obj[i] = items[i];
}

console.log(obj);