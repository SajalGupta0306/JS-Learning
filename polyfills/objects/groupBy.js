// group By
// groupBy


Object.groupBy = Object.groupBy || function (array, keyFn) {
  return array.reduce((acc, item) => {
    const key = keyFn(item);
    (acc[key] ||= []).push(item);
    return acc;
  }, {});
};

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Bob', age: 21 },
  { name: 'Charlie', age: 25 },
];

const groupedByAge = Object.groupBy(people, person => person.age);

console.log(groupedByAge);
