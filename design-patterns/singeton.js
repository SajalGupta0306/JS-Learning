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

var instanceOne = new MySingletonClass(); // Executes succesfully
console.log(instanceOne);
var instanceTwo = new MySingletonClass(); // Throws error
console.log(instanceTwo);
