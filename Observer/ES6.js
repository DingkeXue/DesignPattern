;(function () {
    class User {
        constructor(name) {
            this.name = name;
        }
        notify(content) {
            console.log(content);
        }
    }

    class Department {
        constructor() {
            this.subs = [];
        }
        subscribe(user) {
            this.subs.push(user);
        }
        newMessage(content) {
            this.subs.forEach( user => {
                console.log(user);
                user.notify(content);
            })
        }
    }

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