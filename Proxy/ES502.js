;(function () {
    function Bike() {}
    Bike.prototype.go = function (destination) {
        console.log('正在前往' + destination );
    };
    function User(balance) {
        this.balance = balance;
    }

    function BikeManager() {

    }
    BikeManager.prototype.send = function (user, destination) {
        var bike = new Bike();
        if (user.balance < 2) {
            alert('您的余额不足，请充值');
            return false;
        } else {
            bike.go(destination);
        }
    };

    let lbb = new User(1);
    let bikeManager = new BikeManager();
    bikeManager.send(lbb, '重庆路');
})();