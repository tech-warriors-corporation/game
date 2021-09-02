const config = {
    _timeTransitionWindow: 250,
    element: document.querySelector('[data-game]'),
    hideClass: 'game--init',
    init: function(){
        this.step = 1;
        this.lost = false;

        config.next();
    },
    next: function(){
        setTimeout(() => this.element.classList.remove(this.hideClass), this._timeTransitionWindow * 2);

        switch(this.step){
            case 1:
                life.reset();
                progress.reset();
                home.show('Em busca da coroa', 'Jogar', './assets/images/home-arthur-and-merlin.png');
                cutscene.show(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    {
                        background: './assets/images/home-arthur.png',
                        merlin: './assets/images/cutscene-merlin-three.png'
                    }
                );
                break;
        }
    },
    lose: function(){
        this.lost = true;
        home.show('Infelizmente você perdeu todas as vidas', 'Tentar novamente', './assets/images/home-arthur.png');
    },
    win: function(){

    }
};

config.init(true);
