const numberOfVowels = function(data) {
  // Array containing all of the vowels
  vowels = ['a', 'e', 'i', 'o', 'u'];
  sum = 0;
  for (const letter of data) {
    // If the current letter appears in the vowels array, increase the sum variable
    if (vowels.includes(letter)) {
      sum++;
    }
  }
  return sum;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));