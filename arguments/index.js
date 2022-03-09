// arguments object: holds set of arguments which are used during a function call index starting at 0
// not an array except for the "length" property

function displayName() {
  //   window.document.write(arguments[1]);
  console.log(arguments[0]);
}
displayName("Welcome");

// assignment to arguments is also allowed
function displayName1(name) {
  arguments[0] = "test";
  console.log(arguments[0]);
  // internally changes the value of function parameters also
  console.log(name);
  console.log(arguments.length); // based on the number of function arguments passed while calling the function: refer line 18
  console.log(arguments.callee); // gives information about the function where callee is called
}
displayName1("Welcome");
