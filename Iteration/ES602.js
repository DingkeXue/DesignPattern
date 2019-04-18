;(function () {
    class Music {
        constructor(name, hot) {
            this.name = name;
            this.hot = hot;
        }
        play() {
            console.log(this.name + '正在播放...');
        }
    }

    class MusicList {
        constructor() {
            this.list = [];
            this.current = 0;
        }
        add(music) {
            this.list.push(music);
        }
        remove(index) {
            this.list.splice(index, 1);
        }
        next() {
            return this.list[this.current++];
        }
        prev() {
            return this.list[this.current--];
        }
        hot() {
            return this.list.filter(function (music) {
                return music.hot;
            })
        }
    }

    let list = new MusicList();
    list.add(new Music('时光机-五月天', true));
    list.add(new Music('浮夸-陈奕迅', true));
    list.add(new Music('江南-林俊杰', false));
    console.log(list.next().play());
    console.log(list.prev().play());
    console.log(list.hot());
})();