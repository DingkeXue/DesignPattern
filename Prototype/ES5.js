/*
* 原型模式：基于现在对象模板创建新的对象，新的对象继承了原型的属性和方法；缺点是创建的过程中不能传参。
* */

;(function () {
    var Stuedent = {
        name: '刘备',
        greeting: function () {
            alert("hello， 我叫" + this.name);
        }
    };

    var student = Object.create(Stuedent);
    console.log(student.greeting());

    // 原型模式封装
    function Teacher(name) {
        this.name = name;
    }
    Teacher.prototype = {
        Constructor: Teacher,
        getName: function () {
            return this.name;
        }
    };
    let t1 = new Teacher('lbb');
    t1.getName();
})();
