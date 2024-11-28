function countArea(args) {
    if (args.length === 2) {

      const [width, height] = args;
      return width * height;
    } else if (args.length === 1) {

      const [radius] = args;
      return Math.PI * radius ** 2;
    } else if (args.length === 3) {

      const [a, b, c] = args;
      const s = (a + b + c) / 2; 
      return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    } else {
      retutn("Invalid number of arguments. Pass an array of 1, 2, or 3 numbers.");
    }
}
  

console.log(countArea([5, 10]));
console.log(countArea([7])); 
console.log(countArea([3, 4, 5]));
  