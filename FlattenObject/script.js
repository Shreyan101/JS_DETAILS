// Flatten Object:
const obj = {
  name: 'test',
  address: {
    personal: 'abc',
    office: {
      building: 'random',
      street: 'some street',
    },
  },
};

const flattenObject = (obj, parent, result = {}) => {
  for (let key of Object.keys(obj)) {
    let prop = parent ? parent + '.' + key : key;
    if (typeof obj[key] === 'object') {
      flattenObject(obj[key], prop, result);
    } else {
      result[prop] = obj[key];
    }
  }
  return result;
};

console.log(flattenObject(obj));
