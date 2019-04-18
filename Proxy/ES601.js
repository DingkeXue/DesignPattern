;(function () {
    class Person {
        constructor() {
            this.log = [];
        }
        receive(msg) {
            this.log.push(msg);
        }
    }

    class Proxy {
        constructor() {
            this.log = [];
        }
        send(from, to, msg) {
            this.log.push({
                from,
                to,
                msg
            });
            to.receive(msg);
            console.log(this.log);
        }
    }

    let lbb = new Person();
    let zff = new Person();
    let proxy = new Proxy();
    proxy.send(lbb, zff, '你好');
    proxy.send(zff, lbb, '世界');
})();