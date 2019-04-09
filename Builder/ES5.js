;(function () {

    const Form = document.getElementById('form');

    init();

    function init() {
        Form.addEventListener('submit', function (e) {
            e.preventDefault();

            let Name = document.querySelector('#name').value;
            let Gender = document.querySelector('[name=gender]:checked').value;
            let Age = document.querySelector('#age').value;
            console.log(Name);

            try {
                var student = new StudentBuilder();
                student.setName(Name);
                student.setGender(Gender);
                student.setAge(Age);
                var st = student.build();
            } catch (e) {
               console.log(e);
            }
            console.log(st)
        })
    }

    function Student() {}

    function StudentBuilder() {
        this.student = new Student();

        this.setName = function (name) {
            if (!name) {
                alert('姓名有误！');
                throw '姓名有误';
            }
            else
                this.student.name = name;
        };

        this.setGender = function (gender) {
          if (gender !== '男' && gender !== '女') {
              alert('性别有误！');
              throw '性别有误';
          }   else {
              this.student.gender = gender;
          }
        };

        this.setAge = function (age) {
          if (age > 0 && age < 120) {
              this.student.age = age;
          }   else {
              alert('年龄有误！');
              throw '年龄有误！';
          }
        };

        this.build = function () {
            return this.student;
        }
    }
})();