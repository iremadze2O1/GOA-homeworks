function frequency(str) {
    const letterCount = {};

    for (let char of str) {
        if (letterCount[char]) {
          letterCount[char]++;
        } else {
          letterCount[char] = 1;
        }
      }
  
    console.log(letterCount);
}

frequency('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi inventore, laudantium itaque natus ullam, ut enim officia voluptatibus harum quasi obcaecati aperiam. Illum repellendus accusantium quisquam amet quaerat error.');