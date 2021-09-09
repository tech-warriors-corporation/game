const preload = {
    images: () => {
        const urls = [
            './assets/images/favicon.ico',
            './assets/images/home-arthur-and-merlin.jpeg',
            './assets/images/home-arthur.jpeg',
            './assets/images/home-merlin.jpeg',
            './assets/images/cutscene-merlin-four.png',
            './assets/images/cutscene-merlin-one.png',
            './assets/images/cutscene-merlin-three.png',
            './assets/images/cutscene-merlin-two.png',
            './assets/images/cutscene-battle.jpeg',
            './assets/images/cutscene-bridge.jpeg',
            './assets/images/cutscene-castle.jpeg',
            './assets/images/cutscene-chest.jpeg',
            './assets/images/icon-bridge.png',
            './assets/images/icon-castle.png',
            './assets/images/icon-chest.png',
            './assets/images/icon-click.png',
            './assets/images/icon-sword.png',
            './assets/images/icon-block.png',
            './assets/images/bridge-circle.png',
            './assets/images/bridge-grass.jpeg',
            './assets/images/bridge-square.png',
            './assets/images/bridge-triangle.png',
            './assets/images/bridge-wallpaper.jpeg',
            './assets/images/sprite-arthur.png',
            './assets/images/sprite-enemy.png',
            './assets/images/battle.jpeg',
            './assets/images/battle-spear.png',
            './assets/images/battle-sword.png',
            './assets/images/chest-down.jpeg',
            './assets/images/chest-grass.jpeg',
            './assets/images/chest-key.png',
            './assets/images/castle.jpeg',
            './assets/images/castle-rock.png',
            './assets/images/castle-sword.png',
        ];

        for(const url of urls){
            const image = new Image();

            image.src = url;
        }
    },
    audios: () => {
        const urls = [
            './assets/audios/home.mp3',
            './assets/audios/help-home.mp3',
            './assets/audios/cutscene-one.mp3',
            './assets/audios/correct.mp3',
            './assets/audios/bridge.mp3',
            './assets/audios/cutscene-two.mp3',
            './assets/audios/hit-him.mp3',
            './assets/audios/hit-me.mp3',
            './assets/audios/battle.mp3',
            './assets/audios/cutscene-three.mp3',
            './assets/audios/chest.mp3',
            './assets/audios/cutscene-four.mp3',
            './assets/audios/castle.mp3',
            './assets/audios/help-lose.mp3',
            './assets/audios/help-win.mp3',
            './assets/audios/lose.mp3',
            './assets/audios/win.mp3',
            './assets/audios/storytelling.mp3',
        ];

        for(const url of urls){
            const preAudio = new Audio();

            preAudio.src = url;
        }
    },
    init: function(){
        this.audios();
        this.images();
    }
}

preload.init();
