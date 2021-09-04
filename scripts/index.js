const config = {
    _timeTransitionWindow: 250,
    element: document.querySelector('[data-game]'),
    hideClass: 'game--init',
    changeBackgroundImage: function(url){
        this.element.style.backgroundImage = `url(${url})`;
    },
    init: function(showHome){
        this.element.classList.add(this.hideClass);
        this.lost = false;
        config.next(1, showHome);
    },
    next: function(nextStep, showHome){
        this.step = nextStep;

        setTimeout(() => this.element.classList.remove(this.hideClass), this._timeTransitionWindow * 2);

        switch(this.step){
            case 1:
                if(showHome)
                    home.show(
                        'Em busca da coroa',
                        'Jogar',
                        {
                            imageUrl: './assets/images/home-arthur-and-merlin.png',
                            musicUrl: './assets/audios/home.mp3',
                            audioUrl: './assets/audios/help-home.mp3',
                        }
                    );

                cutscene
                    .show(
                        'Primeiro desafio',
                        'Ajude o Rei Arthur a atravessar a ponte completando com a forma geométrica correta.',
                        {
                            background: './assets/images/cutscene-bridge.jpg',
                            merlin: './assets/images/cutscene-merlin-one.png',
                            audio: './assets/audios/cutscene-one.mp3'
                        }
                    )
                    .then(() => {
                        life.reset();
                        progress.reset();

                        this.changeBackgroundImage('./assets/images/bridge-wallpaper.jpeg');

                        progress.setTitle('Ajude o rei Arthur a atravessar a ponte, complete a ponte com uma forma geométrica', true);
                        counter.init(30);
                        bridge.init();
                        bridge.conclude = () => this.next(2);
                    });
                break;
            case 2:
                cutscene
                    .show(
                        'Segundo desafio',
                        'Ajude o Rei Arthur a passar por seu inimigo com suas habilidades.',
                        {
                            background: './assets/images/cutscene-battle.jpg',
                            merlin: './assets/images/cutscene-merlin-two.png',
                            audio: './assets/audios/cutscene-two.mp3'
                        }
                    )
                    .then(() => {
                        bridge.hide();
                        progress.next();
                        progress.setTitle('Ajude o rei Arthur a passar por seu inimigo');

                        this.changeBackgroundImage('./assets/images/battle.png');

                        counter.init(20);
                    });
                break;
        }
    },
    lose: function(){
        this.lost = true;
        bridge.endAssets();
        home.show(
            'Infelizmente você perdeu todas as vidas',
            'Tentar novamente',
            {
                imageUrl: './assets/images/home-arthur.png',
                musicUrl: './assets/audios/lose.mp3',
                audioUrl: './assets/audios/help-lose.mp3',
            }
        );
    },
    win: function(){

    }
};

config.init(true);
