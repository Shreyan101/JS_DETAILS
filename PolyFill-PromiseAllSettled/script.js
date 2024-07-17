function myPromiseAllSettled(promises) {
  return Promise.all(
    promises.map((promise) => {
      return promise
        .then((res) => ({ status: 'fullfilled', value: res }))
        .catch((err) => ({ status: 'rejected', reason: err }));
    })
  );
}

myPromiseAllSettled([
  Promise.resolve(1),
  Promise.reject('New Err'),
  Promise.resolve(3),
]).then((res) => {
  console.log(res);
});
