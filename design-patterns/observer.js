function Observable() {
  this.observersList = [];
}

Observable.prototype.addObserver = function (observer) {
  this.observersList.push(observer);
};

Observable.prototype.removeObserver = function (observer) {
  var self = this;
  this.observersList.forEach(function (el, index) {
    if (el === observer) {
      self.observersList.splice(index, 1);
    }
  });
};

Observable.prototype.notify = function (context) {
  for (var i = 0; i < this.observersList.length; i++) {
    this.observersList[i].update(context);
  }
};

function Observer(name) {
  this.name = name;
}

Observer.prototype.update = function (context) {
  console.log(this.name + " is invoked with the context as " + context);
};

var observable = new Observable();

var observerA = new Observer("A");
var observerB = new Observer("B");

observable.addObserver(observerA);
observable.addObserver(observerB);
observable.notify("hello");

observable.removeObserver(observerA);
observable.notify("hello");