let obj1 = {
  name: 'shreyan',
};

function printName(place) {
  console.log('My name is ' + this.name + ' from ' + place);
}

printName.bind(obj1)(['Bangalore']);

// Polyfill

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return (...args2) => {
    obj.apply(args[0], [...params, ...args2]);
  };
};

printName.myBind(obj1)(['Bangalore']);
