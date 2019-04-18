;(function () {
    function Student(term) {
        this.termId = term;
    }

    function StudentList() {
        this.list = [];
    }

    StudentList.prototype.add = function (student) {
        this.list.push(student);
    };
    StudentList.prototype.remove = function (index) {
      this.list.splice(index, 1);
    };
    StudentList.prototype.removeByTerm = function(term) {
        this.list = this.list.filter(function (student) {
            return student.termId != term;
        })
    };

    let list = new StudentList();
    list.add(new Student(1));
    list.add(new Student(2));
    console.log(list);
    list.removeByTerm(1);
    console.log(list);
})();