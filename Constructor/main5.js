;(function () {
    function Student(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
        /*this.greeting = function () {
            console.log('hello, my name is ' + this.name + ', Im ' +this.age + 'years old. I got ' + this.score);
        }*/
    }

    Student.prototype.greeting = function() {
        console.log('hello, my name is ' + this.name + ', Im ' +this.age + ' years old. I got ' + this.score);
    };

    let student1 = new Student('小花', 12, 34);
    console.log(student1.greeting());
})();
