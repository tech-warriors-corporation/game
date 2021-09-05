const counter = {
    element: document.querySelector('[data-counter]'),
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
        this.init(this._seconds);
    },
    init: function(seconds){
        if(config.lost) return;
        if(this.interval) clearInterval(this.interval);

        this.element.classList.remove(this.alertClass);
        this._stop = false;
        this._seconds = seconds;
        this.seconds = seconds;

        this.setSecondsText(this.seconds);

        this.interval = setInterval(() => {
            if(this._stop) return;

            this.setSecondsText(this.seconds);

            if(this.seconds <= 10) this.element.classList.add(this.alertClass);
            else this.element.classList.remove(this.alertClass);

            if(this.seconds === 0){
                clearInterval(this.interval);

                life.lessOne();

                this.init(this._seconds);

                return;
            }

            this.seconds--;
        }, 1000)
    }
};
