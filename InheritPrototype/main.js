/*
* 寄生模式继承来得到父类原型对象上的方法
* */
// 创建父类
function Parent(name) {
    this.name = name;
}
// 创建父类原型方法
Parent.prototype.say = function () {
    console.log(this.name)
};

// 创建子类
function Children(name, age) {
    // 调用父类，将父类的作用域赋值给子类，并且将父类属性添加到子类
    Parent.call(this, name);
    // 子类自己的属性
    this.age = age;
}

// 创建寄生继承方法
function inheritPrototype(subType, superType) {
    // 将父类原型作为基础创建对象
    let protoType = Object.create(superType.prototype);
    // 指定该对象的构造函数为子类
    protoType.constructor = subType;
    // 将这个对象赋值给子类原型
    subType.prototype = protoType;
}

inheritPrototype(Children, Parent);

// 子类自己的原型方法(一定要在继承后创建)
Children.prototype.sayAge = function() {
    console.log(this.age);
};

let child = new Children('lbb', 22);
child.say(); // lbb
child.sayAge(); // 22
