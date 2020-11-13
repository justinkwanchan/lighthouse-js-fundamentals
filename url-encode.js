const urlEncode = function(text) {
  let textArray = text.split(" ");
  let newText = "";
  for (const value of textArray) {
    // This special case skips any spaces at beginning or end of String
    if (!value) {
      continue;
    }
    // The first iteration adds only the first word to the newText String
    // Each subsequent iteration adds %20 immediately followed by the next word
    if (!newText) {
      newText = newText.concat(value);
    } else {
      newText = newText.concat(`%20${value}`);
    }
  }
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));