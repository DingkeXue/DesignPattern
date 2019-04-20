;(function () {

    /*========视图部分开始=========*/

    class UserForm {
        constructor(selector, callback) {
            this.callBack = callback;
            this.el = document.querySelector(selector);
            this.bindEvents();
        }
        bindEvents() {
            this.el.addEventListener('submit', e => {
                e.preventDefault();

                let data = {};
                data.name = this.el.querySelector('#name').value;
                data.gender = this.el.querySelector('#gender').value;
                data.score = this.el.querySelector('#score').value;
                data.quality = this.el.querySelector('#quality').value;

                this.callBack(data);

                this.reset();
            })
        }
        reset() {
            this.el.reset();
        }
    }

    class UserTable {
        constructor(selector, list) {
            this.el = document.querySelector(selector);
            this.Tbody = this.el.querySelector('tbody');
            this.List = list;
        }
        render() {
            this.List.allUsers().forEach(user => {
                let row = new Row(user);
                this.Tbody.appendChild(row.render());
            })
        }
    }

    class Row {
        constructor(user) {
            this.User = user;
        }
        render() {
            let user = this.User;
            let tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.gender}</td>
            <td>${user.score}</td>
            <td>${user.quality}</td>
            `;
            return tr;
        }
    }
    /*========数据部分结束=========*/

    /*========数据部分开始=========*/
    /*
    * User
    * 创建用户*/
    class User {
        constructor(name, gender, score, quality) {
            this.name = name;
            this.gender = gender;
            this.score = score;
            this.quality = quality;
        }
    }

    /*
    * 用户列表*/
    class UserList {
        constructor() {
            this.list = [];
            this.normalize();
        }
        add(user) {
            this.list.push(user);
            this.normalize();
        }
        remove(index) {
            this.list.splice(index, 1);
        }
        allUsers() {
            return this.list;
        }
        normalize() {
            this.list.forEach((user, index) => {
                if (user instanceof  User)
                    return;
                this.list[index] = new User(user.name, user.gender, user.score, user.quality);
            })
        }
    }

    /*========数据部分结束=========*/
    let userList = new UserList();
    let userTable = new UserTable('.table', userList);

    new UserForm('form', data => {
        userList.add(data);
        userTable.render();
    })
})();