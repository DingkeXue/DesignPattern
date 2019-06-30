/*
* 单例模式限制一个类只能有一个实例化对象
* 经典的实现方法是：创建一个类，这个类包含一个方法，这个方法在没有对象存在的情况下，将会创建一个新的实例化对选对象
* 如果对象存在，这个方法返回这个对象的引用
* */

let SingletonTester = (function () {
    // 一个包含属性和方法的单例模式
    function Singleton(options) {
        // 设置 options
        options = options || {};

        // 设置其他属性
        this.name = 'Singleton';
        this.pointX = options.pointX || 5;
        this.pointY = options.pointY || 10;
    }

    // 实例
    let instance;

    // 静态方法和变量
    let _static = {
        name: 'Singleton',
        getInstance: function (options) {
            if (instance === undefined) {
                instance = new Singleton(options);
            } else {
                return instance;
            }
        }
    };

    return _static;
})();

let singleton = SingletonTester.getInstance({
    pointX: 11
});

console.log(singleton.pointX);
