// So Aarray is a Object Type Designed to Store a Data Collection

/*Dynamic size: Arrays can grow or shrink as elements are added or removed.

Heterogeneous: Arrays can store elements of different data types
 (numbers, strings, objects and other arrays).
*/

// An array can hold many values under a single name, 
// and you can access the values by referring to an index number.

const arr = ["Porche","Lamborgini","BMW","Audi","Rolls Royals","Sparta"]

console.log(arr)
// Acces the element

console.log(arr[1])
// To know array size

/***********Array Methods */

// console.log(arr.length)

// array to string 
let tostring = arr.toString();
console.log(tostring)

// Push and Pop Methods 

let newElement = arr.push("Hunday")

console.log(newElement);
console.log(arr);

arr.pop();
console.log(arr);


