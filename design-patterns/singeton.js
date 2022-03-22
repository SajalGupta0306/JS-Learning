// Singletons are classes which can be instantiated once, and can be accessed globally.
// This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

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
Object.freeze(instanceOne);
instanceOne.add({ name: "Sajal", id: 1 });
console.log(instanceOne);
var instanceTwo = new User(); // Throws error
instanceTwo.add({ name: "Gupta", id: 2 });
console.log(instanceTwo);

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
