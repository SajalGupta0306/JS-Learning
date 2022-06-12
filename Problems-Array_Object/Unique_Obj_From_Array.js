// unique objects from array
const objArr = [
  {
    name: "Test1",
    age: 21,
  },
  {
    name: "Test2",
    age: 22,
  },
  {
    name: "Test3",
    age: 23,
  },
  {
    name: "Test1",
    age: 22,
  },
  {
    name: "Test4",
    age: 21,
  },
];

const uniqueObjArr = [
  ...new Map(objArr.map((item) => [item["age"], item])).values(),
];
console.log(uniqueObjArr);
