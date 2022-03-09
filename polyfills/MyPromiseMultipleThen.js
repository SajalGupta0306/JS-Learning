class MyPromiseMultipleThens {
  resolvedData;
  resolvedMethodChain = [];
  isResolved = false;

  constructor(executor) {
    const resolve = (value) => {
      this.resolvedData = value;
      this.isResolved = true;

      if (this.resolvedMethodChain.length) {
        this.resolvedMethodChain.reduce((acc, fn) => {
          return fn(acc);
        }, this.resolvedData);
      }
    };
    executor(resolve);
  }

  then(callback) {
    this.resolvedMethodChain.push(callback);
    if (this.isResolved) {
      this.resolvedMethodChain.reduce((acc, fn) => {
        return fn(acc);
      }, this.resolvedData);
    }
    return this; // this is used when there and multiple then statements
  }
}

module.exports = MyPromiseMultipleThens;
