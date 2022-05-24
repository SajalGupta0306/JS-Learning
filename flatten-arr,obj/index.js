// https://jsfiddle.net/z0ktc4u5/6/

// Deep Clone of an obj
// https://jsfiddle.net/dkvrL094/3/
const obj = {
  name: {
    firstName: "ABC",
    lastName: "XYZ",
  },
  address: {
    street: {
      number: 10,
      name: "Street",
    },
    district: function () {
      return new Date();
    },
  },
  phoneNumber: [100000, 200000],
};

function deepClone(object) {
  var newObject = {};
  for (var key in object) {
    if (object[key] && typeof object[key] === "object") {
      if (Array.isArray(object[key])) {
        newObject[key] = object[key];
      } else {
        newObject[key] = deepClone(object[key]);
      }
    } else {
      newObject[key] = object[key];
    }
  }
  return newObject;
}

const clonedObj = deepClone(obj);

console.log(clonedObj.address.district());
