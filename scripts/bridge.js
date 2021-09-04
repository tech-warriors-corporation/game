const bridge = {
    element: document.querySelector('[data-bridge]'),
    complete: document.querySelector('[data-bridge-complete]'),
    buttons: document.querySelectorAll('[data-bridge-form]'),
    forms: document.querySelector('[data-bridge-forms]'),
    hideFormsClass: 'brige__forms--hide',
    showBridgeClass: 'brige__floor--way',
    _correctValue: 'square',
    _wellDone: false,
    audio: null,
    correctAudio: null,
    endAudios: function (){
        if(this.audio) this.audio.end();
        if(this.correctAudio) this.correctAudio.end();
    },
    endAssets: function(){
        this.forms.classList.add(this.hideFormsClass);
        counter.stop();

        if(config.lost) this.endAudios();
    },
    conclude: () => {},
    init: function(){
        this.audio = audio.play('./assets/audios/bridge.mp3', { repeat: true });
        arthur.init();
        this._wellDone = false;
        this.forms.classList.remove(this.hideFormsClass);
        this.complete.classList.remove(this.showBridgeClass);
        this.buttons.forEach(button => button.onclick = this.select.bind(this));
    },
    select: function(event){
        if(this._wellDone) return;

        if(event.target.dataset.bridgeForm === this._correctValue){
            this._wellDone = true;
            this.complete.classList.add(this.showBridgeClass);
            this.endAssets();
            this.correctAudio = audio.play('./assets/audios/correct.mp3');

            arthur.walk(28).then(() => {
                this.endAudios();
                this.conclude();
            });

            return;
        }

        life.lessOne();
    }
};
