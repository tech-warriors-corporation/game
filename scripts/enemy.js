const enemy = {
    element: document.querySelector('[data-enemy]'),
    runX: 50,
    classes: ['enemy--100', 'enemy--50', 'enemy--0'],
    _life: 100,
    _defaultLife: 100,
    _defaultRight: 0,
    _moveTime: 200,
    setLife: function(life){
        this._life = life;

        this.element.classList.remove(...this.classes);
        this.element.classList.add(`enemy--${this._life}`);
    },
    setRight: function(value){
        this.element.style.left = `${value}px`;
    },
    walk: function(size){
        return new Promise(resolve => {})
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
