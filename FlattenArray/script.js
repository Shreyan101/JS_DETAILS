// Flatten Array

const array = [1, 2, 3, [4, 5, [6, 7], 8], 9];

// output - [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flattenArray = (array) => {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      temp.push(...flattenArray(array[i]));
    } else {
      temp.push(array[i]);
    }
  }
  return temp;
};

console.log(flattenArray(array));



/*
     *******  What if we have some depth value ?  ******
     *******  Followup Question -->  ******

You are given a nested array of numbers and a depth value. 
Write a function flattenArray that takes the nested array and the depth value as arguments.
The function should flatten the array up to the given depth. If the depth is 0, return the array as it is.
If the depth is undefined, completely flatten the array.

const array = [1, 2, 3, [4, 5, [6, 7], 8], [4,5, [10, 11 , [22,11]]]];

const flattenArray = (array, depth = Infinity) => {
  let temp = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      temp.push(...flattenArray(array[i], depth - 1));
    } else {
      temp.push(array[i]);
    }
  }
  return temp;
};

console.log(flattenArray(array)); // Flatten completely by default
console.log(flattenArray(array, 1)); // Flatten to depth 1
console.log(flattenArray(array, 2)); // Flatten to depth 2

*/

