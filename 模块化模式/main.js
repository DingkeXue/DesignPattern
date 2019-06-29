/*
* 我们可以通过在一个单一的对象中包含共有/私有的方法和变量，从而使全局范围中屏蔽特定的部分
* 这个结果可以减少对全局变量的污染
* */

/*
* 例1
* */
let testModule = (function () {
    let counter = 0;

    return {
        incrementCounter: function () {
            return counter++;
        },

        resetCounter: function () {
            console.log('counter value prior to reset:' + counter);
            counter = 0;
        }
    }
})();

// usage
// output: undefined  counter是私有变量
console.log(testModule.counter);

testModule.incrementCounter();
// Output: 1
testModule.resetCounter();
