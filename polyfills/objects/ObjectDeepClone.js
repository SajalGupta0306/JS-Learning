// Deep Clone of an obj
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
  const output = {};
  for (var key in object) {
    const val = object[key];
    if (val && typeof val === "object") {
      if (Array.isArray(val)) {
        output[key] = val;
      } else {
        output[key] = deepClone(val);
      }
    } else {
      output[key] = val;
    }
  }
  return output;
}

const clonedObj = deepClone(obj);
