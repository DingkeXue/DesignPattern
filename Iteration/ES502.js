/*音乐表单问题*/

;(function () {
    function Music(name, hot) {
        this.hot = hot;
        this.name = name;
    }

    Music.prototype.play = function () {
        console.log(this.name + '正在播放...');
    };

    function MusicList() {
        this.list = [];
        this.current = 0;
    }

    MusicList.prototype.add = function (music) {
        this.list.push(music);
    };
    MusicList.prototype.remove = function (index) {
        this.list.splice(index, 1);
    };
    MusicList.prototype.next = function () {
       return  this.list[++this.current];
    };
    MusicList.prototype.prev = function () {
        return this.list[--this.current];
    };
    MusicList.prototype.Hot = function () {
        return this.list.filter(function (music) {
            return music.hot;
        })
    };

    let list = new MusicList();
    list.add(new Music('时光机-五月天', true));
    list.add(new Music('浮夸-陈奕迅', true));
    list.add(new Music('江南-林俊杰', false));
    console.log(list.next().play());
    console.log(list.prev().play());
    console.log(list.Hot());
})();