// write code here
const array1 = ['apple', 'banana', 'orange'];
const array2 = [1, 3, 4, 5, 6, 7, 8];
const array3 = [1, -3, 2, 8, -4, 5];

let result1 = array1.map(x => x.toUpperCase());
let result2 = array2.map(x => x%2 === 0 ? "even" : "odd");
let result3 = array3.map(x => Math.abs(x));

console.log(result1);
console.log(result2);
console.log(result3);