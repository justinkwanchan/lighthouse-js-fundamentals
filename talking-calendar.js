const talkingCalendar = function(date) {
  const dateArray = date.split("/");
  const monthArray = ['January', 'February', 'March', 'April', 'May', 'June','July',
                      'August', 'September', 'October', 'November', 'December'];
  // Use the month taken from dateArray, subtract 1 in order to access correct
  // index from monthArray. Add a space to dateOutput for formatting.
  let dateOutput = monthArray[dateArray[1] - 1] + " ";

  // Add the day to dateOutput
  if (dateArray[2] < 10) {
    dateOutput = dateOutput.concat(dateArray[2].charAt(1));
  } else {
    dateOutput = dateOutput.concat(dateArray[2]);
  }

  // Add the correct suffix
  if (dateArray[2].charAt(0) === '1') {
    dateOutput = dateOutput.concat('th, ');
  } else if (dateArray[2].charAt(1) === '1') {
    dateOutput = dateOutput.concat('st, ');
  } else if (dateArray[2].charAt(1) === '2') {
    dateOutput = dateOutput.concat('nd, ');
  } else if (dateArray[2].charAt(1) === '3') {
    dateOutput = dateOutput.concat('rd, ');
  } else {
    dateOutput = dateOutput.concat('th, ');
  }
  
  // Add year
  dateOutput = dateOutput.concat(dateArray[0]);
  
  return dateOutput;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));