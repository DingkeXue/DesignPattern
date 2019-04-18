;(function () {
    class Student {
        constructor(term) {
            this.termId = term;
        }
    }

    class StudentList {
        constructor() {
            this.list = [];
        }
        add(student) {
            this.list.push(student);
        }
        remove(index) {
            this.list.splice(index, 1);
        }
        removeByTerm(term) {
            this.list = this.list.filter(function (student) {
                return student.termId != term;
            })
        }
    }

    let list = new StudentList();
    list.add(new Student(1));
    list.add(new Student(2));
    list.add(new Student(2));
    console.log(list);
    list.removeByTerm(2);
    console.log(list);
    list.remove(0);
    console.log(list);
})();