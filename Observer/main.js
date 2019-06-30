/*
* 发布订阅者模式
* */
// 一个简单的邮件处理器
// 接收的消息的计数器
let mailCounter = 0;

// 初始化一个订阅者，这个订阅者监听名叫“inbox/newMessage” 的频道

// 渲染新消息的粗略信息
let subscriber1 = subscribe('inbox/newMessage', function (topic, data) {
    // 日志记录主题，用于调试
    console.log(topic);
});

// 另一个订阅者
let subscriber2 = subscribe('inbox/newMessage', function (topic, data) {
    console.log(mailCounter++)
});

publish('inbox/newMessage', [{
    sender: '123@mail.com',
    body: 'hello'
}]);
