const calculateChange = function(total, cash) {
  let remainder = cash - total;
  // Array of objects representing each money piece amount and
  // the quantity to be returned in change
  let change = [
    {
      value: 2000,
      name: 'twentyDollar',
      quantity: 0
    },
    {
      value: 1000,
      name: 'tenDollar',
      quantity: 0
    },
    {
      value: 500,
      name: 'fiveDollar',
      quantity: 0
    },
    {
      value: 200,
      name: 'twoDollar',
      quantity: 0
    },
    {
      value: 100,
      name: 'oneDollar',
      quantity:0
    },
    {
      value: 25,
      name: 'quarter',
      quantity: 0
    },
    {
      value: 10,
      name: 'dime',
      quantity: 0
    },
    {
      value: 5,
      name: 'nickel',
      quantity: 0
    },
    {
      value: 1,
      name: 'penny',
      quantity: 0
    }
  ];
  
  let returnChange = {};
  // Begins at the highest value piece of money and checks to see
  // if it can be returned in change or not, then moves on to next highest
  for (const piece of change) {
    if (remainder / piece.value >= 1) {
      piece.quantity += Math.floor(remainder / piece.value);
      remainder = remainder % piece.value;
      // Add a new key:value pair to returnChange object
      // This is to adhere to the return type specification from the assignment
      returnChange[piece.name] = piece.quantity;
    }
  }
  return returnChange;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));