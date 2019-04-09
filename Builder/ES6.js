;(function () {
    let Form = document.getElementById('form');

    init();

    function init() {
        Form.addEventListener('submit', function (e) {
            e.preventDefault();
            let Name = document.querySelector('#name').value;
            let Gender = document.querySelector('[name=gender]:checked').value;
            let Age = document.querySelector('#age').value;

            try {
                var student = new StudentBuilder();
                student.setName(Name);
                student.setGender(Gender);
                student.setAge(Age);
                var st = student.build();
            } catch (e) {
                console.log(e);
            }
            console.log(st);
        })
    }

    class Student {}

    class StudentBuilder {
        constructor() {
            this.student = new Student();
        }

        setName(name) {
            if (!name) {
                alert('姓名有误');
                throw '姓名有误';
            } else {
                this.student.name = name;
            }
        }

        setGender(gender) {
            this.student.gender = gender;
        }

        setAge(age) {
            if (age > 0 && age < 120) {
                this.student.age = age;
            } else {
                alert('年龄有误');
                throw '年龄有误';
            }
        }

        build() {
            return this.student;
        }
    }
})();