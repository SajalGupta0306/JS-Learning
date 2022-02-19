// Revealing module pattern is a design pattern, which let you organise your javascript code in modules, and gives better code structure. It gives you power to create public/private variables/methods (using closure), and avoids polluting global scope

const employee = (function () {
  let name = "";

  function getName() {
    return name;
  }

  function setName(newName) {
    name = newName;
  }

  return { _name: getName, _setN: setName };
})();

employee.setName("Sajal");
console.log(employee._name());
console.log(employee.name); // prints undefined, scope of name is limited within the function
