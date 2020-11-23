const squareCode = function(message) {
  // Remove spaces from the message
  const noSpaceMessage = message.replace(/\s+/g, '');
  const messageLength = noSpaceMessage.length;
  const numColumns = Math.ceil(Math.sqrt(messageLength));
  const numRows = Math.ceil(messageLength / numColumns);
  let rowsArray = [];
  let messageIndex = 0;

  // Create the square message in rowsArray
  for (let i = 0; i < numRows; i++) {
    let rowString = '';
    for (let j = 0; j < numColumns && messageIndex < messageLength; j++) {
      rowString = rowString.concat(noSpaceMessage[messageIndex]);
      messageIndex++;
    }
    rowsArray[i] = rowString;
  }

  // Create the final square code
  let outputString = '';
  for (let i = 0; i < numColumns; i++) {
    for (let j = 0; j < numRows; j++) {
      if (rowsArray[j][i]) {
        outputString = outputString.concat(rowsArray[j][i]);
      }
    }
    // Add a space in between square code words
    if (i < numColumns - 1) {
      outputString = outputString.concat(' ');
    }
  }
  return outputString;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));