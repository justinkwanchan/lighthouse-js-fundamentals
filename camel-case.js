const camelCase = function(input) {
  // Seperate all distinct words into an array
  const inputArray = input.split(' ');
  // The first word is not capitalized so it can be concatenated immediately
  let newString = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    // Capitalized the first letter of the chosen word
    newString = newString.concat(inputArray[i].charAt(0).toUpperCase());
    // Returns the remainder of the word beginning at index 1
    newString = newString.concat(inputArray[i].slice(1));
  }
  return newString;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));