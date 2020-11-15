const multiplicationTable = function(maxValue) {
  // The multiplication table will be a multi-lined string
  let row = "";
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      // Adds table line-by-line
      row = row.concat(`${i * j} `);
    }
    // Table formatting
    row = row.concat("\n\n");
  }
  return row;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));