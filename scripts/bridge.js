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
    endAudio: function (){
        this.audio.end();
    },
    endAssets: function(){
        this.forms.classList.add(this.hideFormsClass);
        counter.stop();

        if(config.lost) this.endAudio();
    },
    conclude: () => {},
    init: function(){
        this.audio = audio.play('./assets/audios/bridge.mp3', true);
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

            arthur.walk(28).then(() => {
                this.endAudio();
                this.conclude();
            });

            return;
        }

        life.lessOne();
    }
};
