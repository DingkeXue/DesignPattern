;(function () {
    let Form = document.getElementById('form');

    init();

    function init() {
        Form.addEventListener('submit', function (e) {
            e.preventDefault();

            let Name = document.getElementById('name').value;
            let type = document.getElementById('subject').value;

            let student = factory(Name, type);
            console.log(student);
        })
    }

    class Student {
        constructor(name, type) {
            this.name = name;
            this.subject = type;
        }
    }

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
})();