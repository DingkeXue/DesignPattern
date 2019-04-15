;(function () {

    function Payment(balance) {
        this.balance = balance;
        this.next = null;
    }

    var changed = new Payment(100);
    var scholarship = new Payment(100);
    var subvention = new Payment(200);

    Payment.prototype.setNext = function (payment) {
        if (payment)
            return this.next = payment;
        else
            return false;
    };

    Payment.prototype.canPay = function (balance) {
        return this.balance >= balance;
    };

    Payment.prototype.pay = function (balance) {  // 如果当前支付则尝试下一个
        if (!this.canPay(balance)) {
            console.log(this.balance);
            if (!this.next) {
                return false;
            } else {
                console.log(this.balance);
                return this.next.pay(balance);
            }
        } else {
            this.balance -= balance;
            console.log(this.balance);
        }
    };

    changed.setNext(subvention).setNext(scholarship);
    changed.pay(200);

})();