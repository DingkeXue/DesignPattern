(function () {
    const update = document.getElementById('toll');

    init();

    function init() {
        new Division('.part.a');
        new Division('.part.b');

    }

    function updateBalance() {
        var resource = new Resource();
        update.innerText = resource.balance;
    }

    function Division(selector) {

        var resource = new Resource();
        let _this = this;

        this.el = document.querySelector(selector);
        this.elInput = this.el.querySelector('.input');
        this.elAdd = this.el.querySelector('.add');
        this.elSub = this.el.querySelector('.sub');


        this.elAdd.addEventListener('click', function () {
            resource.add(_this.elInput.value);
            _this.elInput.value = '';
            updateBalance();
        });

        this.elSub.addEventListener('click', function () {
            _this.elInput.value = '';
            resource.sub(_this.elInput.value);
            updateBalance();
        });
    }

    function Resource() {
        if (Resource.instance) {
            return Resource.instance;
        } else {
            this.balance = 1000;
            Resource.instance = this;
        }
    }

    Resource.prototype.add = function (num) {
        if (!num)
            return
        else {
            this.balance += parseFloat(num);
        }
    };

    Resource.prototype.sub = function (num) {
        if (!num) return;
        else {
            if (this.balance > 0) {
                this.balance -= parseFloat(num);
            }
        }
    };

})();
