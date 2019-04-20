;(function() {

    function Version(content) {
        this.content = content;
    }

    function Chat() {
        this.content = '';
        this.version = [];
    }
    Chat.prototype.send = function (content) {
        this.content += content;
    };
    Chat.prototype.getContent = function () {
        return this.content;
    };
    Chat.prototype.save = function () {
        let save = new Version(this.getContent());
        this.version.push(save);
    };

    let lbb = new Chat();
    lbb.send('hello');
    lbb.save();
    lbb.send('world');
    lbb.save();
    console.log(lbb);

})();