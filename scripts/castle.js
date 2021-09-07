const castle = {
    element: document.querySelector('[data-castle]'),
    sword: document.querySelector('[data-castle-sword]'),
    click: document.querySelector('[data-castle-click]'),
    _defaultSwordBottom: -16,
    _defaultUpDownValue: 15,
    audio: null,
    interval: null,
    hideClass: 'hide',
    upSwordClass: 'castle__sword--up',
    conclude: () => {},
    win: function(){
        audio.play('./assets/audios/correct.mp3');
        this.click.onclick = null;
        counter.stop();
        this.sword.classList.add(this.upSwordClass);

        setTimeout(() => {
            this.conclude();
            this.endAudio();
        }, 5000)
    },
    endAssets: function(){
        this.element.classList.add(this.hideClass);
        this.endAudio();
    },
    endAudio: function(){
        if(this.audio) this.audio.end();
    },
    getCurrentSwordBottom: function(){
        return utils.pxToNumber(getComputedStyle(this.sword).bottom);
    },
    setSwordBottom: function(value){
        if(value < this._defaultSwordBottom) value = this._defaultSwordBottom;

        this.sword.style.bottom = `${value}px`;
    },
    init: function(){
        this.sword.classList.remove(this.upSwordClass);
        this.element.classList.remove(this.hideClass);
        this.audio = audio.play('./assets/audios/castle.mp3', { repeat: true });
        this.click.onclick = this.onClick.bind(this);
        this.setSwordBottom(this._defaultSwordBottom);
    },
    onClick: function(){
        if(this.interval) clearInterval(this.interval);

        const bottom = this.getCurrentSwordBottom() + this._defaultUpDownValue;

        if(bottom >= 115){
            this.win();

            return;
        }

        this.setSwordBottom(bottom);

        this.interval = setInterval(() => {
            this.setSwordBottom(this.getCurrentSwordBottom() - (this._defaultUpDownValue * 2));
        }, 150);
    }
};
