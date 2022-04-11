// The observer pattern is a design pattern in which you define a one-to-many relationship from one object known as the subject to many objects known as the observers
// An example is the model-view-controller architecture. When the view updates the model changes.

// Example:

// Consider a website that posts interesting articles.
// Every day, you visit the site to check for new articles and if there is none, you revisit after some time/days.
//  What if you get a subscription to the website instead? Once you have the subscription, you’ll get notified every time a new article is posted. 
//  So now, instead of checking the site every few hours, you just wait for the notification about a new article.


function Observable() {
  this.observersList = [];
}

Observable.prototype.getIndex = function (observer) {
  return this.observersList.indexOf(observer);
};

Observable.prototype.addObserver = function (observer) {
  this.observersList.push(observer);
};

Observable.prototype.removeObserver = function (observer) {
  this.observersList = this.observersList.filter((val) => val !== observer);
};

Observable.prototype.notify = function (observer, context) {
  const obsvrIdx = this.getIndex(observer);
  if (obsvrIdx > -1) {
    this.observersList[obsvrIdx].update(context);
  }
};

Observable.prototype.notifyAll = function (context) {
  this.observersList.forEach((observer) => {
    observer.update(context);
  });
};

Observable.prototype.count = function () {
  console.log("total observers: " + this.observersList.length);
};

function Observer(name) {
  this.name = name;
}

Observer.prototype.update = function (context) {
  console.log(this.name + " is invoked with context as " + context);
};

var observable = new Observable();

var observerA = new Observer("A");
var observerB = new Observer("B");

observable.addObserver(observerA);
observable.addObserver(observerB);
observable.notify(observerA, "hello");
observable.removeObserver(observerA);
// observable.notifyAll("welcome");
// observable.addObserver(observerA);
observable.notifyAll("welcome");
observable.count();
