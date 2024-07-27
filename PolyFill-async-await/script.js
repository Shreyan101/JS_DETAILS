// Simulate an asynchronous operation
function fetchData(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Fetched ${data}`);
    }, 1000);
  });
}

// Run function to handle the generator and promises
function run(generatorFunction) {
  const iterator = generatorFunction();

  function handle(iteratorResult) {
    if (iteratorResult.done) return Promise.resolve(iteratorResult.value);

    const iteratorValue = iteratorResult.value;

    return Promise.resolve(iteratorValue).then(
      (res) => handle(iterator.next(res)),
      (err) => handle(iterator.throw(err))
    );
  }

  try {
    return handle(iterator.next());
  } catch (ex) {
    return Promise.reject(ex);
  }
}

// Async function to wrap around the generator
function async(generatorFunction) {
  return function (...args) {
    return run(generatorFunction.bind(this, ...args));
  };
}

// Define a generator function to handle async operations
const getData = async(function* () {
  try {
    const data1 = yield fetchData('data1');
    console.log(data1); // Fetched data1

    const data2 = yield fetchData('data2');
    console.log(data2); // Fetched data2

    const data3 = yield fetchData('data3');
    console.log(data3); // Fetched data3

    return 'All data fetched';
  } catch (error) {
    console.error(error);
  }
});

// Execute the generator function
getData().then((result) => console.log(result)); // All data fetched
