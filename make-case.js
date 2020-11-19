const camelCase = input => {
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
}

const pascalCase = input => {
  // Seperate all distinct words into an array
  const inputArray = input.split(' ');
  let newString = "";
  for (let i = 0; i < inputArray.length; i++) {
    // Capitalized the first letter of the chosen word
    newString = newString.concat(inputArray[i].charAt(0).toUpperCase());
    // Returns the remainder of the word beginning at index 1
    newString = newString.concat(inputArray[i].slice(1));
  }
  return newString;
}

const snakeCase = input => {
  // Seperate all distinct words into an array
  const inputArray = input.split(' ');
  let newString = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    // Concatenate each new word preceded by an underscore
    newString = newString.concat('_' + inputArray[i]);
  }
  return newString;
}

const kebabCase = input => {
  // Seperate all distinct words into an array
  const inputArray = input.split(' ');
  let newString = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    // Concatenate each new word preceded by an underscore
    newString = newString.concat('-' + inputArray[i]);
  }
  return newString;
}

const titleCase = input => {
  // Seperate all distinct words into an array
  const inputArray = input.split(' ');
  let newString = inputArray[0].charAt(0).toUpperCase() + inputArray[0].slice(1);
  for (let i = 1; i < inputArray.length; i++) {
    // Concatenate each new word preceded by an underscore
    newString = newString.concat(' ' + inputArray[i].charAt(0).toUpperCase());
    newString = newString.concat(inputArray[i].slice(1));
  }
  return newString;
}

const vowelCase = input => {
  let vowelString = "";
  const vowels = 'aeiou';
  for (const letter of input) {
    if (vowels.includes(letter)) {
      vowelString = vowelString.concat(letter.toUpperCase());
    } else {
      vowelString = vowelString.concat(letter);
    }
  }
  return vowelString;
}

const consonantCase = input => {
  let consonantString = "";
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  for (const letter of input) {
    if (consonants.includes(letter)) {
      consonantString = consonantString.concat(letter.toUpperCase());
    } else {
      consonantString = consonantString.concat(letter);
    }
  }
  return consonantString;
}

const upperCase = input => {
  return input.toUpperCase();
}

const lowerCase = input => {
  return input.toLowerCase();
}

const makeCase = function(input, newCase) {
  
  // If there are multiple case arguments in an array
  if (Array.isArray(newCase)) {
    let newString = input;
    for (const caseInstance of newCase) {
      newString = eval(caseInstance + 'Case')(newString);
    }
    return newString;
  } else {
    return eval(newCase + 'Case')(input);
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));