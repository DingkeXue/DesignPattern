;(function () {
    function Person() {
        this.list = [];
    }
    Person.prototype.receive = function (msg) {
        this.list.push(msg);
        console.log(this.list);
    };

    function Proxy() {
        this.log = [];
    }
    Proxy.prototype.send = function (from, to, msg) {
        this.log.push({
            from: from,
            to: to,
            msg: msg
        });
        to.receive(msg);
        console.log(this.log);
    };

    let lbb = new Person();
    let zff = new Person();
    let proxy = new Proxy();
    proxy.send(lbb, zff, 'hello');
    proxy.send(zff, lbb, 'world');
})();