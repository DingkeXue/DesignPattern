/*
* 继承组合继承最大的问题是无论在什么情况下，都会调用两次构造函数：一次是在创建子类原型时，一次是在子类构造函数内部
* */
function SuperType(name) {
    this.name = name;
}
SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    // 第二次调用父类构造函数
    SuperType.call(this, name);

    this.age = age;
}

// 创建子类原型，第一次调用父类构造函数
SubType.prototype = new SuperType();

// 子类原型方法，一定要在指定原型之后创建
SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let child = new SubType('lbb', 22);
child.sayAge();  // 22
child.sayName();  // lbb
