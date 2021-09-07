const enemy = {
    element: document.querySelector('[data-enemy]'),
    runX: 50,
    classes: ['enemy--100', 'enemy--50', 'enemy--0'],
    upClass: 'enemy--up',
    _life: 100,
    _defaultY: -151,
    _defaultLife: 100,
    _defaultRight: 0,
    _moveTime: 125,
    _adjustX: 6,
    getPositionLeft: function(){
        return this.element.offsetLeft - (config.widthSprites / 2);
    },
    getBackgroundPositionX: function(){
        return utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX) ||
               utils.pxToNumber(this.element.style.backgroundPositionX);
    },
    setLife: function(life){
        this._life = life;

        this.element.classList.remove(...this.classes);
        this.element.classList.add(`enemy--${this._life}`);
    },
    setRight: function(value){
        this.element.style.right = `${value}px`;
    },
    setBackgroundPositionX: function(value){
        this.element.style.backgroundPositionX = `${value}px`;
    },
    setBackgroundPositionY: function(value){
        this.element.style.backgroundPositionY = `${value}px`;
    },
    walk: function(size){
        return new Promise(resolve => {
            const times = Math.round(size / this.runX);
            const isBack = times < 0;
            const leftover = -105;

            this.setBackgroundPositionY((isBack ? this._defaultY * 11 : this._defaultY * 9) + leftover);
            this.setBackgroundPositionX(this._adjustX);

            if(!times){
                resolve();

                return;
            }

            let counter = 0;

            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(this._adjustX);
                    clearInterval(interval);
                    resolve();
                } else{
                    const right = utils.pxToNumber(getComputedStyle(this.element).right, true) || utils.pxToNumber(this.element.style.right, true);
                    const backgroundPositionX = utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX, true) ||
                                                utils.pxToNumber(this.element.style.backgroundPositionX, true);

                    this.setRight(isBack ? right - this.runX : right + this.runX);
                    this.setBackgroundPositionX(backgroundPositionX - 150);
                }

                isBack ? counter-- : counter++;
            }, this._moveTime);
        })
    },
    punch: function(){
        this.element.classList.add(this.upClass);

        return new Promise(resolve => {
            const leftover = 36;
            const times = 12;
            let counter = 0;

            this.setBackgroundPositionX(this._adjustX);
            this.setBackgroundPositionY((this._defaultY * 18) + leftover);

            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(this._adjustX);
                    this.element.classList.remove(this.upClass);
                    clearInterval(interval);
                    resolve();

                    return;
                }

                this.setBackgroundPositionX(this.getBackgroundPositionX() - 152);

                counter++;
            }, this._moveTime);
        })
    },
    died: function (){
        return new Promise(resolve => {
            audio.play('./assets/audios/correct.mp3');

            const leftover = 30;
            const times = 5;
            let counter = 0;

            this.setBackgroundPositionX(this._adjustX);
            this.setBackgroundPositionY((this._defaultY * 21) + leftover);

            const interval = setInterval(() => {
                if(counter === times){
                    clearInterval(interval);
                    resolve();

                    return;
                }

                this.setBackgroundPositionX(this.getBackgroundPositionX() - 152);

                counter++;
            }, this._moveTime);
        })
    },
    hitMe: function(){
        const times = 6;
        const leftover = -95;
        let counter = 0;

        this.setLife(this._life - 50);
        this.setBackgroundPositionY(this._defaultY + leftover);
        this.setBackgroundPositionX(this._adjustX);

        audio.play('./assets/audios/hit-him.mp3');

        return new Promise(resolve => {
            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(this._adjustX);

                    const killedHim = this._life === 0;

                    clearInterval(interval);
                    resolve(killedHim);

                    return;
                }

                this.setBackgroundPositionX(this.getBackgroundPositionX() - 152);

                counter++;
            }, this._moveTime);
        })
    },
    init: function(){
        this.setLife(this._defaultLife);
        this.resetPosition();
    },
    resetPosition: function(){
        this.setRight(this._defaultRight);
        this.walk(0);
    }
};
