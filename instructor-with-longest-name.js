const instructorWithLongestName = function(instructors) {
  let index = 0;
  // Can begin the loop on index 1, comparing with 0th index
  for (let i = 1; i < instructors.length; i++) {
    // Accesses the name property in the instructors object and asks for its length
    if (instructors[i].name.length > instructors[index].name.length) {
      index = i;
    }
  }
  return instructors[index];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));