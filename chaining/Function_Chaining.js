function ComputeValue() {
  let value = 0;
  this.units = function (num) {
    value += num;
    return this;
  };
  this.tens = function (num) {
    value += num * 10;
    return this;
  };
  this.hundreds = function (num) {
    value += num * 100;
    return this;
  };
  this.thousands = function (num) {
    value += num * 1000;
    return this;
  };
  this.lakhs = function (num) {
    value += num * 100000;
    return this;
  };
  this.getValue = function () {
    return value;
  };
}
const result = new ComputeValue();
console.log(result.tens(5).tens(2).hundreds(3).thousands(4).getValue());

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// Without creating instance of Function
function CalculateValue() {
  let value = 0;
  return {
    units: function (num) {
      value += num;
      return this;
    },
    tens: function (num) {
      value += num * 10;
      return this;
    },
    hundreds: function (num) {
      value += num * 100;
      return this;
    },
    thousands: function (num) {
      value += num * 1000;
      return this;
    },
    lakhs: function (num) {
      value += num * 100000;
      return this;
    },
    getValue: function () {
      return value;
    },
  };
}

const answer = CalculateValue();
console.log(answer.tens(5).tens(2).hundreds(3).thousands(4).getValue());
