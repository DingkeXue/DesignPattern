/*
* 抽象工厂模式
* */

;(function () {
    function Student(name) {
        this.name = name;
    }

    function Teacher() {
        this.name = name;
    }

    function StudentFactory() {
        return new Student();
    }

    function TeacherFactory(name) {
        this.name = name;
        return new Teacher(this.name);
    }

    function userProducer(factory) {
        switch (factory) {
            case 'student':
                return StudentFactory;
                break;
            case 'teacher':
                return TeacherFactory;
                break;
            default:
                throw '错误';
                break;
        }
    }

    var factory = userProducer('teacher');
    var st = factory('刘备备');
    console.log(st);
})();