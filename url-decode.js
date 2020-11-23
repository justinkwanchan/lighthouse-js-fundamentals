const urlDecode = function(text) {
  // Split all key-value pairs and put them into urlArray
  const urlArray = text.split('&');
  // To contain the JS object to be returned
  let returnObject = {};
  // Iterates over each key/value pair in urlArray
  for (const item of urlArray) {
    // Split the key and the value into an array
    const keyValue = item.split('=');
    // Looks at the key and then looks at the value
    for (let i = 0; i < keyValue.length; i++) {
      let spaceString = "";
      // Replaces any instances of %20 with a whitespace
      for (let j = 0; j < keyValue[i].length; j++) {
        if (keyValue[i][j] === '%' && keyValue[i][j + 1] === '2' && keyValue[i][j + 2] === '0') {
          spaceString = spaceString.concat(' ');
          j = j + 2;
        } else {
          spaceString = spaceString.concat(keyValue[i][j]);
        }
      }
      keyValue[i] = spaceString;
    }
    returnObject[keyValue[0]] = keyValue[1];
  }
  return returnObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);