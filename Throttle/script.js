// Throttle;

const getData = () => {
  console.log('BTN CLICKED');
};

const throttle = (fn, delay) => {
  let flag = true;
  return (...args) => {
    if (flag) {
      flag = false;
      fn();
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};

const betterFn = throttle(getData, 3000);

document.querySelector('#btn').addEventListener('click', () => {
  betterFn();
});
