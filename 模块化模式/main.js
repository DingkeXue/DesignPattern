/*
* 我们可以通过在一个单一的对象中包含共有/私有的方法和变量，从而使全局范围中屏蔽特定的部分
* 这个结果可以减少对全局变量的污染
* 优点：
* 模块模式相对于真正的封装概念更清晰
* 模块模式支持私有数据
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


/*
* 实例2 购物车
* */
let basketModule = (function () {
    // private
    let basket = [];

    function doSomethingPrivate() {
        // ...
    }

    function doSomethingElsePrivate() {
        // ...
    }

    // return an object exposed to the public
    return {
        // add items to the basket
        addItem: function (item) {
            basket.push(item)
        },

        // get the count of items in basket
        getItemCount: function () {
            return basket.length;
        },

        // public methods
        doSomethingPublic: doSomethingPrivate,

        // get total price
        getTotal: function () {
            let count = this.getItemCount(), price = 0;

            while (count --) {
                price += basket[count].price;
            }
            return price;
        }
    }
})();

// usage
basketModule.addItem({name: 'Apple', price: 22});
basketModule.addItem({name: 'bread', price: 45});
console.log(basketModule.getTotal());

