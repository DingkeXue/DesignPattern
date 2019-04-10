function Resource() {
    if (Resource.instance) {
        return Resource.instance;
    } else {
        this.balance = 0;
        Resource.instance = this;
    }
}

Resource.prototype.add = function (num) {
    this.balance += 1999;
};

Resource.prototype.sub = function (num) {
    if (num <= 0) {
        this.balance = 0;
    } else {
        this.balance -= 1999;
    }
};

(function () {
    const update = document.getElementById('toll');

    init();

    function init() {
        new Division('.part.a');

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
            _this.elInput.innerText = _this.elInput.value ++;
            resource.add(_this.elInput.value);
            updateBalance();
        });

        this.elSub.addEventListener('click', function () {
            if (_this.elInput.value > 0) {
                _this.elInput.innerText = _this.elInput.value --;
                resource.sub(_this.elInput.value);
            } else {
                _this.elInput.innerText = 0;
                _this.elInput.value = 0;
                resource.sub(_this.elInput.value);
            }
            updateBalance();
        });
    }

})();








