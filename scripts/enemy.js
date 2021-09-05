const enemy = {
    element: document.querySelector('[data-enemy]'),
    runX: 50,
    classes: ['enemy--100', 'enemy--50', 'enemy--0'],
    _life: 100,
    _defaultY: -95,
    _defaultLife: 100,
    _defaultRight: 0,
    _moveTime: 200,
    _adjustX: 6,
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

            this.setBackgroundPositionY(isBack ? this._defaultY * 11 : this._defaultY * 9);
            this.setBackgroundPositionX(this._adjustX);

            if(!times){
                resolve();

                return;
            }

            // let counter = 0;
            //
            // const interval = setInterval(() => {
            //     if(counter === times){
            //         this.setBackgroundPositionX(this._adjustX);
            //         clearInterval(interval);
            //         resolve();
            //     } else{
            //         const left = utils.pxToNumber(getComputedStyle(this.element).left, true) || utils.pxToNumber(this.element.style.left, true);
            //         const backgroundPositionX = utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX, true) ||
            //             utils.pxToNumber(this.element.style.backgroundPositionX, true);
            //
            //         this.setLeft(isBack ? left - this.runX : left + this.runX);
            //         this.setBackgroundPositionX(backgroundPositionX - 150);
            //     }
            //
            //     isBack ? counter-- : counter++;
            // }, this._moveTime);
        })
    },
    attack: function(){
        return new Promise(resolve => {})
    },
    died: function (){
        return new Promise(resolve => {})
    },
    hitMe: function(){
        this.setLife(this._life - 50);

        audio.play('./assets/audios/hit-him.wav');

        if(this._life === 0) this.died().then(() => battle.killHim());
    },
    init: function(){
        this.setLife(this._defaultLife);
        this.setRight(this._defaultRight);
        this.walk(0);
    }
};
