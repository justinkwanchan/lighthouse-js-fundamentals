const calculateRectangleArea = (length, width) => {
  const area = length * width;
  if (area <= 0) {
    return undefined;
  }
  return area;
}
const calculateTriangleArea = (base, height) => {
  const area = base * height / 2;
  if (area <= 0) {
    return undefined;
  }
  return area;
}
const calculateCircleArea = radius => {
  const area = Math.PI * radius**2;
  if (radius <= 0) {
    return undefined;
  }
  return area;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined