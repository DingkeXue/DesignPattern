/*
* 封装，继承，多态 的实现
* */
//==========================封装===============================
// 私有属性，私有方法，特权方法，对象共有属性和对象共有方法，构造器
var Book = function (id, name, price) {
    // 私有属性，私有方法
  var num = 1;
  function chechId() {}

  // 特权方法
    this.getName = function () {
        return this.name;
    };
    this.setName = function (name) {
        this.name = name;
    };

    // 对象共有属性
    this.id = id;

    // 构造器
    this.setName(name);
};

// 创建对象的安全模式，忘了 new 关键字也可以创建
function Book2(name, price) {
    //判断实例化对象是否是通过 new 关键字创建的
    if (this instanceof Book) {
        this.name = name;
        this.price = price;
    }else {
        return new Book(name, price);
    }
}

//==========================继承===============================
// 类式继承,某一个 child 修改 Parent 会对其他 child 有影响
function Parent1() {
    this.name = true;
}
Parent1.prototype.getName = function () {
    return this.name;
};

function Child1() {
    this.age = 11;
}
Child1.prototype = new Parent1();
Child1.prototype.getAge = function () {
    return this.age;
};

let child1 = new Child1();
child1.getAge();  // 11
child1.getName();  // true;

// 构造函数继承， 每一个child 都有其对应的 Parent，修改互不影响
function Parent2(id) {
    this.name = [1, 2, 3];
    this.id = id;
}
Parent2.prototype.getName = function () {
    console.log(this.name);
};

function Child2(id) {
    Parent2.call(this, id);
}
var child2 = new Child2(1);
var child3 = new Child2(2);
console.log(child2.id);
console.log(child3.id);
console.log(child2.name.push(4));
console.log(child2.name);
console.log(child3.name);
// console.log(child2.getName());  报错，原因是没有继承 Parent 上的原型对象上的属性

// 组合继承
function Parent3(id) {
    this.name = [1, 2, 3];
    this.id = id;
}
Parent3.prototype.getName = function () {
    return this.name;
};

function Child3(id) {
    Parent3.call(this, id);
}
Child3.prototype = new Parent3();

let child4 = new Child3(1);
let child5 = new Child3(2);
child4.name.push(5);
console.log(child4.id, child4.getName());
console.log(child5.id, child5.getName());


// 组合寄生继承
function inheritObject(o) {
    function F() {

    }
    F.prototype = o;
    return new F();
}

function inheritPrototype(child, parent) {
    let p = inheritObject(parent.prototype);
    // 修改因重写子类原型导致子类的 constructor 属性被修改
    p.constructor = child;
    // 设置子类的原型
    child.prototype = p;
}

//==========================多继承===============================
// extends 方法：历遍父级属性并复制，只对原始数据类型有效
function extend(child, parent) {
    for (let property in parent) {
        child[property] = parent[property];
    }
    return child;
}

// 多继承
function mix() {
    let i = 1, len = arguments.length, child = arguments[0], arg;
    for (; i < len; i++) {
        // 缓存当前对象
        arg = arguments[i];
        // 历遍被继承对象中的属性
        for (let property in arg) {
            child[property] = arg[property];
        }
    }
    return child;
}

//==========================多态===============================
// 多态：同一个方法多种调用方式
function Add() {
    function zero() {
        return 0;
    }
    function one(num) {
        return num;
    }
    function two(n1, n2) {
        return n1 + n2;
    }
    this.add = function () {
        let len = arguments.length;
        switch (len) {
            case 0:
                return zero();
            case 1:
                return one(arguments[0]);
            case 2:
                return two(arguments[0], arguments[1]);
        }
    }
}
let add = new Add();
console.log(add.add(), add.add(1), add.add(2, 3));