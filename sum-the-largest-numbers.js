const sumLargestNumbers = function(data) {
  let large1; // Largest value
  let large2; // 2nd largest value
  for (const value of data) {
    // Assigns the 0th index value to large1 then begins next iteration of loop
    if (!large1) {
      large1 = value;
      continue;
    }
    // Assigns the 1st index value to large2 then begins next iteration of loop
    if (!large2) {
      large2 = value;
      continue;
    }
    // At each iteration, the largest value of the 2 variables is assigned to large1
    if (large2 > large1) {
      const temp = large1;
      large1 = large2;
      large2 = temp;
    }
    // If the current array value is larger than the largest seen value, the largest seen
    // value is assigned to large2 while the current array value is assigned to large1 
    if (value > large1) {
      large2 = large1;
      large1 = value;
      continue;
    }
    // If the current array value is larger than the 2nd largest seen value,
    // then it is assigned to large2
    if (value > large2) {
      large2 = value;
      continue;
    }
  }
  return (large1 + large2);
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
