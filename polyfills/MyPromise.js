class MyPromise {
  resolvedData;
  executeAfterThenFunc;
  isResolved = false;

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;

      if (typeof this.executeAfterThenFunc === "function") {
        this.executeAfterThenFunc(this.resolvedData);
      }
    };
    executor(resolve);
  }

  then(callback) {
    this.executeAfterThenFunc = callback;
    if (this.isResolved) {
      this.executeAfterThenFunc(this.resolvedData);
    }
    return this; // this is used when there and multiple then statements
  }
}

module.exports = MyPromise;
