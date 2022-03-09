// 1. The pub/sub pattern involves a middleware that is also referred to as the pub/sub broker.
// 2. The pub/sub broker also enables loose decoupling and it supports m:n relationships between the publishers and the subscribers.


const pubsub = {
  events: {},
  subscribe: function (evName, fn) {
    console.log(`PUBSUB: someone just subscribed to know about ${evName}`);
    this.events[evName] = this.events[evName] || [];
    this.events[evName].push(fn);
  },
  unsubscribe: function (evName, fn) {
    console.log(`PUBSUB: someone just UNsubscribed from ${evName}`);
    if (this.events[evName]) {
      this.events[evName] = this.events[evName].filter((f) => f !== fn);
    }
  },
  publish: function (evName, ...data) {
    console.log(`PUBSUB: Making an broadcast about ${evName} with ${data}`);
    if (this.events[evName]) {
      this.events[evName].forEach((f) => {
        f(data);
      });
    }
  },
};
