/*情况更复杂时*/
;(function () {

    /*放假时*/
    var onHoliday = false;
    /*教师节*/
    var teacherDay = true;

    function Order() {
        this.originalPrice = 10;
        this.paidBy = null;
    }

    Order.prototype.setPaidBy = function (paidBy) {
        this.paidBy = paidBy;
    };

    Order.prototype.calc = function () {
        if (onHoliday) {
            this.originalPrice *= .9;
        }
        else
            this.originalPrice *= 1;
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
        if (teacherDay)
            total *= .5;
        else
            total *= 1;
        return total;
    };

    /*其他人*/
    function Others() {

    }
    Others.prototype.calc = function (total) {
        if (onHoliday)
            return total * 1;
        else
            return total * 1.1;
    };

    let order = new Order();
    order.setPaidBy(new Teacher());
    alert(order.calc());

})();