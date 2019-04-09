;(function () {
    var Stuedent = {
        name: '刘备',
        greeting: function () {
            alert("hello， 我叫" + this.name);
        }
    };

    var student = Object.create(Stuedent);
    console.log(student.greeting());
})();