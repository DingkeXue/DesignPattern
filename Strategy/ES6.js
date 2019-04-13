;(function () {
    class Order {
        constructor() {
            this.originalPrice = 10;
            this.paidBy = null;
        }

        setPaidBy(paidBy) {
            this.paidBy = paidBy;
        }

        calc() {
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
            return total * .9;
        }
    }

    let order = new Order();
    order.setPaidBy(new Student());
    alert(order.calc());

})();