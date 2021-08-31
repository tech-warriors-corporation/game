const counter = {
    element: document.querySelector('[data-counter]'),
    _seconds: null,
    seconds: null,
    interval: null,
    _stop: false,
    alertClass: 'counter--alert',
    toggle: function(){
        this._stop = !this._stop;
    },
    init: function(seconds){
        if(config.lost) return;
        if(this.interval) clearInterval(this.interval);

        this._seconds = seconds;
        this.seconds = seconds;

        this.interval = setInterval(() => {
            if(this._stop) return;

            this.element.textContent = `${this.seconds}s`

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
