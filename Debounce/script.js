// Debounce

const getData = () => {
  console.log('Get Data - API Called');
};

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
};

const betterFn = debounce(getData, 1000);

document.querySelector('#search').addEventListener('keyup', () => {
  betterFn();
});
