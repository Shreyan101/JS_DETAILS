Array.prototype.myReduce = function (cbArray, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? cbArray(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const result = [1, 2, 3, 4, 5].reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(result);
