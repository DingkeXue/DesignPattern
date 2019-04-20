;(function () {
    class Version {
        constructor(content) {
            this.content = content;
        }
    }

    class Chat {
        constructor() {
            this.content = '';
            this.version = [];
        }
        send(str) {
            this.content += str;
        }
        getContent() {
            return this.content;
        }
        save() {
            let save = new Version(this.getContent());
            this.version.push(save);
        }
    }

    let lbb = new Chat();
    lbb.send('hello');
    lbb.save();
    lbb.send('世界');
    lbb.save();
    console.log(lbb);
})();