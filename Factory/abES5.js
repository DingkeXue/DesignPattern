/*
* 抽象工厂模式
* 根据不同的对象选择不同的工厂再进行工厂模式创建实例
* */

;(function () {
    // 创建学生、老师实例
    function Student(name) {
        this.name = name;
    }

    function Teacher() {
        this.name = name;
    }

    // 创建学生、老师工厂
    function StudentFactory() {
        return new Student();
    }

    function TeacherFactory(name) {
        this.name = name;
        return new Teacher(this.name);
    }

    // 对不同对象选择不同工厂
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
