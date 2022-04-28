// splice
// makes changes in the original array
// only works on arrays
// can be used for deletion and addition of elements

// addition
var arr = [1, 2, 3, 4, 5];
// first param: index where to add/delete
// second param: no of elements to delete, if 0 means nothing to delete
// third param: actual values which needs to be added in the index. It can be comma seperated values
arr.splice(5, 0, 6);
arr.splice(6, 0, 7, 8, 9);
console.log(arr);

// deletion
// first param: index where to add/delete
// second param: no of elements to delete, if 0 means nothing to delete
// elements deleted are inclusive of index value too
arr.splice(5, 2);
console.log(arr);

// slice
// works both on arrays and strings
// doesnt changes the original array. THe computation can be stored in a new array
var test = "dummy";
var testArr = [1, 2, 3, 4, 5];
// returns a portion of string
// firt param: starting index from where to start slicing
// second param: imdex till where to slice. it is exclusive
var data = test.slice(0, 3); // returns dum
console.log(data);

var dummy = testArr.slice(-1);
console.log(dummy);
