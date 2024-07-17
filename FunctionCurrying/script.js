// Function Currying
// Implement currSum(1)(2)(3)(4)();
// result should be 1 + 2 + 3 + 4 + 5

const currSum = (a) => {
  return (b) => {
    return b ? currSum(a + b) : a;
  };
};

console.log(currSum(1)(2)(3)(3)(5)());
