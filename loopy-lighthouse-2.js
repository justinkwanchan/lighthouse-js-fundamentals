const loopyLighthouse = (range, multiples, words) => {
  // Iterates over entire range of number provided, inclusive
  for (let i = range[0]; i <= range[1]; i++) {
    let answer = '';
    if (i % multiples[0] === 0) {
      answer += words[0];
    }
    if (i % multiples[1] === 0) {
      answer += words [1];
    }
    console.log(answer === '' ? i : answer);
    answer = '';
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([1, 40], [3, 4], ["Jackie", "Chan"]);