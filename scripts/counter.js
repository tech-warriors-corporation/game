const counter = {
    element: document.querySelector('[data-counter]'),
    _callbackLessOne: null,
    _seconds: null,
    seconds: null,
    interval: null,
    _stop: false,
    alertClass: 'counter--alert',
    setSecondsText: function(seconds){
        this.element.textContent = `${seconds}s`;
    },
    stop: function(){
        this._stop = true;
    },
    continue: function(){
        this._stop = false;
    },
    toggle: function(){
        this._stop = !this._stop;
    },
    restart: function(){
        this.init(this._callbackLessOne, this._seconds);
    },
    init: function(callbackLessOne, seconds){
        if(config.lost) return;
        if(this.interval) clearInterval(this.interval);

        this.element.classList.remove(this.alertClass);
        this._stop = false;
        this._callbackLessOne = callbackLessOne;
        this._seconds = seconds;
        this.seconds = this._seconds;

        this.setSecondsText(this.seconds);

        this.interval = setInterval(() => {
            if(this._stop) return;

            this.setSecondsText(this.seconds);

            if(this.seconds <= 5) this.element.classList.add(this.alertClass);
            else this.element.classList.remove(this.alertClass);

            if(this.seconds === 0){
                clearInterval(this.interval);

                if(callbackLessOne) callbackLessOne();
                else {
                    life.lessOne();

                    this.init(callbackLessOne, this._seconds);
                }

                return;
            }

            this.seconds--;
        }, 1000)
    }
};
