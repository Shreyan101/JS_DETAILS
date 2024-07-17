Array.prototype.myFilter = function (cbArray) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cbArray(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

const result = [1, 2, 3, 4].myFilter((item) => item > 2);

console.log(result);
