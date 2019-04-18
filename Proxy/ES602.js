;(function () {
    class User {
        constructor(balance) {
            this.balance = balance;
        }
    }

    class Bike {
        go(destination) {
            console.log('正在前往' + destination);
        }
    }

    class BikeManager {
        send(user, destination) {
            if (user.balance < 2) {
                alert('您的余额不足，请充值');
                return false;
            } else {
                let bike = new Bike();
                bike.go(destination);
            }
        }
    }

    let lbb = new User(3);
    let bikeManager = new BikeManager();
    bikeManager.send(lbb, '清明街');
})();