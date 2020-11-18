const organizeInstructors = function(instructors) {
  let courseObject = {};
  for (const instructor of instructors) {
    // If the current course has not yet been seen, add it to courseObject
    // If it has been seen, push the new teacher into the associated array
    if (!courseObject[instructor.course]) {
      courseObject[instructor.course] = [instructor.name];
    } else {
      courseObject[instructor.course].push(instructor.name);
    }
  }
  return courseObject;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));