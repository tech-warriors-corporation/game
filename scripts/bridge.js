const bridge = {
    element: document.querySelector('[data-bridge]'),
    complete: document.querySelector('[data-bridge-complete]'),
    buttons: document.querySelectorAll('[data-bridge-form]'),
    forms: document.querySelector('[data-bridge-forms]'),
    bridgeRight: document.querySelector('[data-bridge-right]'),
    hideClass: 'hide',
    hideFormsClass: 'hide',
    showBridgeClass: 'brige__floor--way',
    _correctValue: 'square',
    _wellDone: false,
    audio: null,
    correctAudio: null,
    hide: function(){
        this.element.classList.add(this.hideClass);
    },
    endAudios: function (){
        if(this.audio) this.audio.end();
        if(this.correctAudio) this.correctAudio.end();
    },
    endAssets: function(){
        this.complete.classList.add(this.showBridgeClass);
        this.forms.classList.add(this.hideFormsClass);
        counter.stop();

        if(config.lost) this.endAudios();
    },
    conclude: () => {},
    init: function(){
        this.element.classList.remove(this.hideClass);
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
            this.endAssets();
            this.correctAudio = audio.play('./assets/audios/correct.mp3');

            arthur.walk(this.bridgeRight.offsetLeft)
                  .then(() => {
                       this.endAudios();
                       this.conclude();
                   });

            return;
        }

        life.lessOne();
    }
};
