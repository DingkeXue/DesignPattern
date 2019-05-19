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