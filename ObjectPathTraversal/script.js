// Object Path Traversal
// Given an object make a function such that on console this result should come
// console.log(path(object, 'a.b.c')); // 30
// console.log(path(object, 'a.b.c.d')); // undefined
// console.log(path(object, 'e.g')); //40
// console.log(path(object, 'e.f')); //20

const object = {
  a: {
    b: {
      c: 30,
      d: 20,
    },
  },
  e: {
    f: 20,
    g: 40,
  },
};

const path = (obj, path) => {
  let splitKeys = path.split('.');
  let current = obj;
  for (let i = 0; i < splitKeys.length; i++) {
    if (!current[splitKeys[i]]) {
      return undefined;
    } else {
      current = current[splitKeys[i]];
    }
  }
  return current;
};

console.log(path(object, 'a.b.c')); // 30
console.log(path(object, 'a.b.c.d')); // undefined
console.log(path(object, 'e.g')); //40
console.log(path(object, 'e.f')); //20
