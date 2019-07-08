/*
* 发布订阅者模式相比观察者模式多了个事件通道，订阅者和发布者不是直接关联的
* */
var pubsub = (() => {
   let topics = {};
   function subscribe(topic, fn) {
       if (!topics[topic]) {
           topics[topic] = [];
       }
       topics[topic].push(fn);
   }
   function publish(topic, ...args) {
       if (!topics[topic]) return;
       for (let fn of topics[topic]) {
           fn(...args);
       }
   }
   return {
       subscribe,
       publish
   }
})();

// 订阅者订阅了 test 事件
pubsub.subscribe('test', function (a, b) {
    console.log(a, b);
});

// 发布者发布了test事件
pubsub.publish('test', 1, 3);
