/*
* 递归函数是在一个函数通过名字调用自身的情况下构成的
* */
function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

/*
* 以上递归存在一个问题，当把 factorial 函数赋值给另一个函数的时候，内部的 factorial 会出错
* */
let fact = factorial;
factorial = null;
fact(3);  // 出错

// 解决方案一：非严格模式下
function factorial2(num) {
    if (num <= 1) {
        return 1;
    }
    return num * arguments.callee(num - 1);
}

// 解决方案二：严格模式下
let factorial3 = (function f(num) {
    if (num <= 1) {
        return 1;
    }
    return num * f(num - 1);
});

/*
* 尾递归优化
* 如果一个函数内部引用了另一个函数，那么会形成一个调用记录，所有的调用记录形成了一个 调用栈
* 只有最上面的调用栈弹出后，后面的调用栈才会挨个弹出，这回非常耗内存
* 上面计算 num 的阶乘，最多需要 num 个调用记录，复杂度为 O(n)
* 如果改写成下面这样，只保留一个调用记录，复杂度为 O(1)
* */
function factorial4(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
}
factorial4(4, 1);
