class MySingletonClass {
  constructor() {
    if (MySingletonClass._instance) {
      throw new Error(
        "Singleton classes can't be instantiated more than once."
      );
    }
    MySingletonClass._instance = this;
    // Further code
  }
}

// var instanceOne = new MySingletonClass(); // Executes succesfully
// console.log(instanceOne);
// var instanceTwo = new MySingletonClass(); // Throws error
// console.log(instanceTwo);
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

const database = DatabaseConnection;
database.open();
database.open();
database.close(); //close database
database.open();
