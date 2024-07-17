Array.prototype.myMap = function (cbArray) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cbArray(this[i], i, this));
  }
  return temp;
};

const result = [1, 2, 3, 4].myMap((item) => item * 2);

console.log(result);
