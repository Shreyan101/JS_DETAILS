function* getData() {
  yield 1;
  yield 2;
  yield 3;
}

const callData = getData();

console.log(callData.next());
console.log(callData.next());
console.log(callData.next());
console.log(callData.next());
