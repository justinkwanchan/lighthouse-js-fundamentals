const merge = (array1, array2) => {
  let i = 0, j = 0;
  let newArray = [];
  // Loop goes until both input arrays have been completely iterated over
  while (i < array1.length || j < array2.length) {
    /*
      If array2 has been completely iterated over, then this will loop will finish array1.
      If array1 still has values to be considered and the current array1 element is less 
      than the current array2 element, push it to the newArray.
    */
    if (j === array2.length || (i !== array1.length && array1[i] < array2[j])) {
      newArray.push(array1[i++]);
    } else if (i == array1.length || j !== array2.length) {
      newArray.push(array2[j++]);
    }
  }
  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);