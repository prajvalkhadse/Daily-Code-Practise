// JavaScripty artray Methods

// Length - REturns thr number of elements in an array

let arr = ["HTML", "CSS", "JavaScript", "NodeJs", "Express", "Mongo", "React"];

console.log(arr.length);

// Array toString() - Seprated by array comma using string
let myList = arr.toString();

console.log(myList);

// ForEach() - xerecutes a provided function once for each array element.
//  It is a great tool for iterating through arrays without the need for a traditional loop.
arr.forEach((lang) => {
  console.log(lang);
});

// Map - method creates a new array populated with the
// results of calling a provided function on every element in the calling array.
//  It’s perfect for transforming data.

const numbers = [1, 2, 3, 4, 5];

const doubleNum = numbers.map((number) => number * 2);

console.log(doubleNum);

// Filter Function  - method creates a new array with all elements that pass
// the test implemented by the provided function.
// It’s ideal for removing unwanted items from an array.

const age = [15, 30, 12, 30, 18];

const adults = age.filter((age) => age >= 18);

console.log(adults);

// Reduce - method executes a reducer function on each element of the array,
// resulting in a single output value. It is particularly useful for aggregating values.

const values = [1, 2, 3, 4];

const sum = values.reduce((acumulater, num) => acumulater + num, 0);
console.log(sum);

// Find Method -  method returns the value of the first element that passes a test.
//  If no values match, it returns undefined.'
const users = [
  { name: "Prajval", age: 25 },
  { name: "Bob", age: 34 },
];
const user = users.find((u) => u.name == "Praval");
console.log(user);

