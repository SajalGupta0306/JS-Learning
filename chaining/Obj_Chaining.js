const ComputeValue = {
  value: 0,
  units: function (num) {
    this.value += num;
    return this;
  },
  tens: function (num) {
    this.value += num * 10;
    return this;
  },
  hundreds: function (num) {
    this.value += num * 100;
    return this;
  },
  thousands: function (num) {
    this.value += num * 1000;
    return this;
  },
  lakhs: function (num) {
    this.value += num * 100000;
    return this;
  },
  getValue: function () {
    return this.value;
  },
};

console.log(ComputeValue.tens(5).tens(2).hundreds(3).thousands(4).getValue());
