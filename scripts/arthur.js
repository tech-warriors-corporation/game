const arthur = {
    element: document.querySelector('[data-arthur]'),
    defaultPositionX: -150,
    defaultPositionY: -161.6,
    runX: 50,
    _defaultLeft: 0,
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

            this.setBackgroundPositionY(this.defaultPositionY * 11);

            if(!times) resolve();

            let counter = 0;

            const interval = setInterval(() => {
                if(counter === times){
                    this.setBackgroundPositionX(0);
                    clearInterval(interval);
                    resolve();
                } else{
                    const left = utils.pxToNumber(getComputedStyle(this.element).left) || utils.pxToNumber(this.element.style.left);
                    const backgroundPositionX = utils.pxToNumber(getComputedStyle(this.element).backgroundPositionX) ||
                                                utils.pxToNumber(this.element.style.backgroundPositionX);

                    this.setLeft(left + this.runX);
                    this.setBackgroundPositionX(backgroundPositionX + this.defaultPositionX);
                }

                counter++
            }, 250);
        })
    },
    init: function(){
        this.setLeft(this._defaultLeft);
        this.walk(0);
    }
};
