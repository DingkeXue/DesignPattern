;(function () {
    function Order() {
        this.originalPrice = 10;
        this.paidBy = null;
    }
    
    Order.prototype.setPaidBy = function (paidBy) {
        this.paidBy = paidBy;
    };
    
    Order.prototype.calc = function () {
        return this.paidBy.calc(this.originalPrice);
    };

    /*学生策略模式*/
    function Student() {}
    Student.prototype.calc = function (total) {
        return total;
    };

    /*教师策略模式*/
    function Teacher() {

    }
    Teacher.prototype.calc = function (total) {
        return total * .9;
    };

    /*其他人*/
    function Others() {

    }
    Others.prototype.calc = function (total) {
        return total * 1.1;
    };

    let order = new Order();
    order.setPaidBy(new Teacher());
    alert(order.calc());

})();