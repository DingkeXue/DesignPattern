/*
* 策略模式：定义一系列算法，并把他们封装起来，他们之间可以相互替换
* 优点：1.封装起来易于使用 2.减少不必要的if判断 3.扩展性好
* 缺点：1.策略类会增多 2.所有策略都会对外暴露
* */
// 根据传入的策略不同，计算出的奖金不同
// 方法一：使用if判断
function calcuBonus1(Level, bonus) {
    if (Level === 'A') {
        return bonus * 3;
    }
    if (Level === 'B') {
        return bonus * 2;
    }
    if (Level === 'C') {
        return bonus * 1;
    }
}
calcuBonus1('B', 10000); // 20000

// 方法二：使用策略模式,首先定义三个算法，然后定义策略模式
/*==============定义算法开始===========*/
function LevelA() {}
LevelA.prototype.calc = function (bonus) {
  return  bonus * 3;
};

function LevelB() {}
LevelB.prototype.calc = function (bonus) {
    return bonus * 2;
};

function LevelC() {}
LevelC.prototype.calc = function (bonus) {
    return bonus * 1;
};
/*==============定义算法结束===========*/
/*==============定义策略开始===========*/
function Strategy() {
    this.bonus = null;
    this.strategy = null;
}
Strategy.prototype.setStrategy = function (strategy) {
    this.strategy = strategy;
};
Strategy.prototype.getBonus = function (bonus) {
    return this.strategy.calc(bonus);
};
/*==============定义策略结束===========*/
let st = new Strategy();
st.setStrategy(new LevelA());
st.getBonus(10000);  // 30000

