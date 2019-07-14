/*
* 构造器模式：使用 new 关键字来创建新的对象，可以根据对象的不同传入的参数不同
* 缺点：构造器创建的对象中每个新对象的方法都是新建的，这很浪费内存；可以结合原型模式使用
* */

;(function () {
    function Student(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
        // 定义在构造函数中的方法会为每个对象新建该方法
        /*this.greeting = function () {
            console.log('hello, my name is ' + this.name + ', Im ' +this.age + 'years old. I got ' + this.score);
        }*/
    }

    // 使用原型模式，所有对象共享该方法
    Student.prototype.greeting = function() {
        console.log('hello, my name is ' + this.name + ', Im ' +this.age + ' years old. I got ' + this.score);
    };

    let student1 = new Student('小花', 12, 34);
    console.log(student1.greeting());

})();
