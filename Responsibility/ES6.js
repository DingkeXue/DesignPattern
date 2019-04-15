;(function () {

    class Payment {
        constructor(balance) {
            this.balance = balance;
            this.next = null;
        }
        canPay(balance) {
            return this.balance >= balance;
        }
        setNext(payment) {
            if (payment)
                return this.next = payment;
            else
                return false;
        }
        pay(balance) {
            if (!this.canPay(balance)) {
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
        }
    }

    let scholarship = new Payment(20);
    let subvention = new Payment(30);
    let charged = new Payment(40);

    scholarship.setNext(subvention).setNext(charged);
    scholarship.pay(34);

})();