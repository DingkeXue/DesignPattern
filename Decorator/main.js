/*
* 装饰者模式：动态的给对象或类添加职责的模式。它在不改变类的基础上动态添加属性
* 这种模式符合敏捷开发思想：MVP（Minimum Visible Product:最小开发原型)，再在其基础上添加职责
* */
function Car(brand, color, price) {
    this.brand = brand || 'ford';
    this.color = color || 'white';
    this.price = price || 11111;

    this.drive = function () {
        console.log('I can Drive', this.brand, this.color, this.price);
    }
}

let car = new Car('ford', 'tomato');
console.log(car.drive());

// 动态添加属性
car.setBrake = function (isHas) {
    this.brake = isHas;
};
car.getBrake = function() {
    console.log(this.brake);
};

car.setBrake(true);
car.getBrake();

car.setBrake(true);
