const repeatNumbers = function(data) {
  let numbers = "";
  for (let i = 0; i < data.length; i++) {
    // This loop iterates from 0 until the 2nd number within an inner array
    // It concatenates to 'numbers' the first number within an inner array
    for (let j = 0; j < data[i][1]; j++) {
      numbers = numbers.concat(data[i][0]);
    }
    // If there is still an inner array to be considered, this concatenates a comma and space
    if (i < data.length - 1) {
      numbers = numbers.concat(", ");
    }
  }
  return numbers;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));