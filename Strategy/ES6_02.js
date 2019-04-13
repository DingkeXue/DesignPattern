;(function () {

    let onHoliday = false;
    let teacherDay = true;

    class Order {
        constructor() {
            this.originalPrice = 10;
            this.paidBy = null;
        }

        setPaidBy(paidBy) {
            this.paidBy = paidBy;
        }

        calc() {
            if (onHoliday)
                this.originalPrice *= .9;
            else
                this.originalPrice *= 1;
            return this.paidBy.calc(this.originalPrice);
        }
    }

    class Student {
        calc(total) {
            return total;
        }
    }

    class Teacher {
        calc(total) {
            if (teacherDay)
                total *= .5;
            else
                total *= .9;
            return total;
        }
    }

    let order = new Order();
    order.setPaidBy(new Teacher());
    alert(order.calc());

})();