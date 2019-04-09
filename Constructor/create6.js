;(function () {
    let Root = document.getElementById('root');
    
    class Student {
        constructor(name, age, score) {
            this.name = name;
            this.age = age;
            this.score = score;
            
            this.mount();
        }
    }
    
    Student.prototype.mount = function () {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + this.name + '</td>' + '<td>' + this.age + '</td>'+ '<td>' + this.score + '</td>';
        Root.appendChild(tr);
    };

    new Student('小强', 23, 45);
    new Student('小花', 54, 23);
})();