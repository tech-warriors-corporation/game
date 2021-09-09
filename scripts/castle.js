const castle = {
    element: document.querySelector('[data-castle]'),
    sword: document.querySelector('[data-castle-sword]'),
    click: document.querySelector('[data-castle-click]'),
    _defaultSwordBottom: -15,
    _defaultUpValue: 35,
    _defaultDownValue: 15,
    audio: null,
    interval: null,
    hideClass: 'hide',
    upSwordClass: 'castle__sword--up',
    canClickButtonClass: 'castle__button--click',
    hideClickButtonClass: 'hide',
    conclude: () => {},
    clearInterval: function(){
        clearInterval(this.interval);
    },
    removeCanClickButton: function(){
        this.click.classList.remove(this.canClickButtonClass);
    },
    addCanClickButton: function(){
        this.click.classList.add(this.canClickButtonClass);
    },
    hasCanClickButton: function(){
        return this.click.classList.contains(this.canClickButtonClass);
    },
    hideClickButton: function(){
        this.click.classList.add(this.hideClickButtonClass);
    },
    showClickButton: function(){
        return this.click.classList.remove(this.hideClickButtonClass);
    },
    win: function(){
        audio.play('./assets/audios/correct.mp3');
        this.click.onclick = null;
        counter.stop();
        this.sword.classList.add(this.upSwordClass);
        this.clearInterval();
        this.hideClickButton();

        setTimeout(() => {
            this.conclude();
            this.endAudio();
        }, 5000)
    },
    endAssets: function(){
        this.element.classList.add(this.hideClass);
        this.sword.classList.remove(this.upSwordClass);
        this.setSwordBottom(this._defaultSwordBottom);
        this.hideClickButton();
        this.clearInterval();
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
        this.clearInterval();
        this.showClickButton();
        this.sword.classList.remove(this.upSwordClass);
        this.element.classList.remove(this.hideClass);
        this.removeCanClickButton();
        this.audio = audio.play('./assets/audios/castle.mp3', { repeat: true });
        this.click.onclick = this.onClick.bind(this);
        this.setSwordBottom(this._defaultSwordBottom);
        this.initInterval();
    },
    initInterval: function(){
        this.removeCanClickButton();

        this.interval =
            setInterval(() =>
                this.hasCanClickButton() ? this.removeCanClickButton() : this.addCanClickButton()
            , 2000);
    },
    onClick: function(){
        const hasClass = this.hasCanClickButton();
        const currentValue = this.getCurrentSwordBottom();
        const bottom = hasClass ? currentValue + this._defaultUpValue : currentValue - this._defaultDownValue;

        if(bottom >= 100){
            this.win();

            return;
        }

        this.setSwordBottom(bottom);

        if(hasClass){
            this.clearInterval();
            this.initInterval();
        }
    }
};
