function myPromiseAll(promises) {
  let fullfilled = [];
  let result = [];

  return new Promise((resolve, reject) => {
    if (!promises.length) {
      resolve([]);
      return;
    }
    promises.map((promise, index) => {
      promise
        .then((res) => {
          fullfilled.push(true);
          result[index] = res;
          if (fullfilled.length === promises.length) {
            resolve(result);
            return;
          }
        })
        .catch((err) => reject(err));
    });
  });
}

myPromiseAll([
  Promise.resolve(1),
  Promise.reject('New Err'),
  Promise.resolve(3),
])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
