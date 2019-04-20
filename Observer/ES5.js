;(function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.notify = function (str) {
        alert('尊敬的' + this.name + "您好，您有新消息： "+str);
    };

    function Department() {
        this.subs = [];
    }
    Department.prototype.subscribe = function (user) {
        this.subs.push(user);
    };
    Department.prototype.newMessage = function (content) {
        this.subs.forEach(function (user) {
            user.notify(content);
        })
    };

    let Teacher = new Department();
    let lbb = new User('刘备备');
    let zff = new User('张飞飞');
    Teacher.subscribe(lbb);
    Teacher.subscribe(zff);
    Teacher.newMessage("今天教师节放假！");

    let stuff = new Department();
    let ll = new User('老李');
    stuff.subscribe(ll);
    stuff.newMessage('教职工今天休息!');
})();