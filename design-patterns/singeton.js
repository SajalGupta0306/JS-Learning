// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

// it becomes difficult to test as there is a single object consumed by other objects
// race condition issues - 2 objects trying to modify the global state at the same point of time, inconsistent data
//

class User {
  constructor() {
    if (!User._instance) {
      this._data = [];
      User._instance = this;
    }
    return User._instance;
  }
  add(item) {
    this._data.push(item);
  }
  get(id) {
    return this._data.find((d) => d.id === id);
  }
}

var instanceOne = new User(); // Executes succesfully
instanceOne.add({ name: "Sajal", id: 1 });

var instanceTwo = new User(); // it doesn't creates a new instance
instanceTwo.add({ name: "Gupta", id: 2 });

console.log(instanceOne);
console.log(instanceTwo);

/////////////////////////////////////////////////////////////////////

function User() {
  this.data = [];
  if (typeof User._instance === "object") {
    return User._instance;
  }
  this.add = function (val) {
    this.data.push(val);
  };
  User._instance = this;
}

const u1 = new User();
u1.add("welcome1");

const u2 = new User();
u2.add("welcome2");

console.log(u1.data);
console.log(u2.data);

/////////////////////////////////////////////////////////////////////
const DatabaseConnection = (() => {
  let isDatabaseInstanceAvailable = false;
  function createIntance() {
    if (!isDatabaseInstanceAvailable) {
      isDatabaseInstanceAvailable = true;
      console.log(`Database connection is now open`);
    } else {
      console.log(`Database connection is already opened.`);
    }
  }

  function closeIntance() {
    isDatabaseInstanceAvailable = false;
    console.log("Database connection successfully closed");
  }

  return {
    open: createIntance,
    close: closeIntance,
  };
})();

// const database = DatabaseConnection;
// database.open();
// database.open();
// database.close(); //close database
// database.open();
