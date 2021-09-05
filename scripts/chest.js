const chest = {
    element: document.querySelector('[data-chest]'),
    key: document.querySelector('[data-chest-key]'),
    hideClass: 'chest--hide',
    showKeyClass: 'chest__key--show',
    foundKey: false,
    audio: null,
    conclude: () => {},
    hide: function(){
        this.element.classList.add(this.hideClass);
    },
    show: function(){
        this.element.classList.remove(this.hideClass);
    },
    endAssets: function(){
        this.hide();
        this.resetKey();

        if(this.audio) this.audio.end();
    },
    resetKey: function(){
        this.foundKey = false;
        this.key.classList.remove(this.showKeyClass)
    },
    upKey: function(){
        counter.stop();
        audio.play('./assets/audios/correct.mp3');
        this.foundKey = true;
        this.key.classList.add(this.showKeyClass);

        setTimeout(() => this.conclude(), 2000)
    },
    init: function(){
        this.audio = audio.play('./assets/audios/chest.mp3', { repeat: true });
        this.show();
        this.resetKey();
        this.key.onclick = () => !this.foundKey ? this.upKey() : null;
    }
};
