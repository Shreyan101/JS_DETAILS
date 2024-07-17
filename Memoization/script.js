/* Memoization;

 Question:
Write a memoized version of the multiply function. The memoized
function should store the results of previous calculations and return the
cached result when the same parameters are passed again.

*/

const multiply = (a, b) => {
  console.log('Costly Operation!');
  return a * b;
};

const memoizedFn = (fn) => {
  let cache = {};
  return (...args) => {
    let strigifiedArg = JSON.stringify(args);
    if (!cache[strigifiedArg]) {
      cache[strigifiedArg] = fn(...args);
    }
    return cache[strigifiedArg];
  };
};

const betterFn = memoizedFn(multiply);

console.log(betterFn(2, 3));
console.log(betterFn(2, 3));
console.log(betterFn(2, 3));
