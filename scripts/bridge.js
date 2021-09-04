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
    endAssets: function(stopAudio){
        this.forms.classList.add(this.hideFormsClass);
        counter.stop();

        if(config.lost || stopAudio) this.audio.end();
    },
    conclude: () => {},
    init: function(){
        this.audio = audio.play('./assets/audios/bridge.mp3', true);
        this._wellDone = false;
        this.forms.classList.remove(this.hideFormsClass);
        this.complete.classList.remove(this.showBridgeClass);
        this.buttons.forEach(button => button.onclick = this.select.bind(this));

        arthur.init();
        arthur.walk(28);
    },
    select: function(event){
        if(this._wellDone) return;

        if(event.target.dataset.bridgeForm === this._correctValue){
            this._wellDone = true;
            this.complete.classList.add(this.showBridgeClass);

            this.endAssets(true); // after character moves
            this.conclude(); // after character moves

            return;
        }

        life.lessOne();
    }
};
