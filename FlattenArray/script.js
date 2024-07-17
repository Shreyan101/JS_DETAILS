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
