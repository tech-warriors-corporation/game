const arthur = {
    element: document.querySelector('[data-arthur]'),
    runX: 50,
    _defaultY: -161.35,
    _defaultLeft: 0,
    _moveTime: 200,
    setLeft: function(value){
        this.element.style.left = `${value}px`;
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

            this.setBackgroundPositionY(isBack ? this._defaultY * 9 : this._defaultY * 11);

            if(!times) resolve();

            let counter = 0;

            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(0);
                    clearInterval(interval);
                    resolve();
                } else{
                    const left = utils.pxToNumber(getComputedStyle(this.element).left, true) || utils.pxToNumber(this.element.style.left, true);
                    const backgroundPositionX = utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX, true) ||
                                                utils.pxToNumber(this.element.style.backgroundPositionX, true);

                    this.setLeft(isBack ? left - this.runX : left + this.runX);
                    this.setBackgroundPositionX(backgroundPositionX - 150);
                }

                isBack ? counter-- : counter++;
            }, this._moveTime);
        })
    },
    attack: function(type){
        let times = 0;
        let row = null;
        let counter = 0;
        const adjustX = -15;

        switch(type){
            case "sword":
                times = 5;
                row = 15;
                break;
            case "spear":
                times = 7;
                row = 7;
                break;
        }

        this.setBackgroundPositionY(this._defaultY * row);
        this.setBackgroundPositionX(adjustX);

        return new Promise(resolve => {
            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(adjustX);
                    clearInterval(interval);
                    resolve();
                } else{
                    const backgroundPositionX = utils.pxToNumber(this.element.style.backgroundPositionX) ||
                                                utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX);

                    this.setBackgroundPositionX(backgroundPositionX - 161.25);
                }

                counter++
            }, this._moveTime);
        });
    },
    init: function(){
        this.setLeft(this._defaultLeft);
        this.walk(0);
    }
};
