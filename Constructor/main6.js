;(function () {
    class Student {
        constructor(name, age, score) {
            this.name = name;
            this.age = age;
            this.score = score;
        }
        greeting() {
            console.log('hello, my name is ' + this.name + ', Im ' +this.age + 'years old. I got ' + this.score);
        }
    }

    let student2 = new Student('xiaoqiang', 23, 44);
    console.log(student2.greeting());
})();