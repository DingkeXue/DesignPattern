;(function () {
    let Table = document.getElementById('table');

    function Student(name, age, score) {
        this.name = name;
        this.age = age;
        this.score = score;
        this.mount();
    }

    Student.prototype.mount = function () {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + this.name + '</td>' + '<td>' +this.age + '</td>' + '<td>' + this.score + '</td>';
        Table.appendChild(tr);
    };

    new Student('刘备', 34, 53);
    new Student('张飞', 23, 55);
})();