/*
* 简单工厂模式
* */

;(function () {
    let Form = document.getElementById('form');

    init();

    function init() {
        Form.addEventListener('submit', function (e) {
            e.preventDefault();

            let Name = document.getElementById('name').value;
            let subject = document.getElementById('subject').value;

            let student = factory(Name, subject);
            console.log(student);
        })
    }

    function Student(name, subject) {
        this.name = name;
        this.subject = subject;
    }

    // 为不同类型的学生创建不同的实例化对象
    function factory(name, type) {
        switch (type) {
            case '文科':
                return new Student(name, ['地理', '政治', '历史']);
                break;
            case '理科':
                return new Student(name, ['生物', '物理', '化学']);
                break;
            case '艺术生':
                return new Student(name, ['跑步']);
                break;
            default:
                alert("文理科错误");
                break;
        }
    }

    // 实例二
    function Teacher() {
        this.intro = "我是老师";
    }
    function Student1() {
        this.intro = "我是学生";
    }

    function Factory(type) {
        switch (type) {
            case "teacher":
                return new Teacher();
            case "student":
                return new Student1();
        }
    }

    let lbb = new Factory('teacher');
    let zff = new Factory('student');
    console.log(lbb, zff);

    // 安全工厂模式
    function SecureFactory(type, content) {
        if (this instanceof SecureFactory) {
            let res = new this[type](content);
            return res;
        } else {
            return new SecureFactory(type, content);
        }
    }

    SecureFactory.prototype = {
        Java: function (content) {
            console.log(content);
        },
        JavaScript: function (content) {
            console.log(content);
        }
    };

    let java = SecureFactory('Java', '我是java');
    let javascript = SecureFactory('JavaScript', '我是javascript');
    console.log(java, javascript);
})();