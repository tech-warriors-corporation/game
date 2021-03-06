const config = {
    _timeTransitionWindow: 250,
    element: document.querySelector('[data-game]'),
    hideClass: 'game--init',
    widthSprites: 140,
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
                if(showHome){
                    home.show(
                        'Em busca da coroa',
                        'Jogar',
                        {
                            imageUrl: './assets/images/home-arthur-and-merlin.jpeg',
                            musicUrl: './assets/audios/home.mp3',
                            audioUrl: './assets/audios/help-home.mp3',
                            showManual: true
                        }
                    );
                }

                cutscene
                    .show(
                        'Primeiro desafio',
                        'Ajude o Rei Arthur a atravessar a ponte completando com a forma geométrica correta.',
                        {
                            background: './assets/images/cutscene-bridge.jpeg',
                            merlin: './assets/images/cutscene-merlin-one.png',
                            audio: './assets/audios/cutscene-one.mp3'
                        }
                    )
                    .then(() => {
                        life.reset();
                        progress.reset();
                        this.changeBackgroundImage('./assets/images/bridge-wallpaper.jpeg');
                        arthur.show();
                        progress.setTitle('Ajude o rei Arthur a atravessar a ponte, complete a ponte com uma forma geométrica', true);
                        bridge.init();
                        bridge.conclude = () => this.next(2);
                        counter.init(null, 15);
                    });
                break;
            case 2:
                cutscene
                    .show(
                        'Segundo desafio',
                        'Ajude o Rei Arthur a passar por seu inimigo com suas habilidades.',
                        {
                            background: './assets/images/cutscene-battle.jpeg',
                            merlin: './assets/images/cutscene-merlin-two.png',
                            audio: './assets/audios/cutscene-two.mp3'
                        }
                    )
                    .then(() => {
                        bridge.hide();
                        this.changeBackgroundImage('./assets/images/battle.jpeg');
                        arthur.show();
                        progress.next();
                        progress.setTitle('Ajude o rei Arthur a passar por seu inimigo');
                        battle.init();
                        battle.conclude = () => this.next(3);
                        counter.init(battle.userHitted.bind(battle), 8);
                    });
                break;
            case 3:
                cutscene
                    .show(
                        'Terceiro desafio',
                        'Ajude o Rei Arthur a achar a chave do castelo no meio dos objetos.',
                        {
                            background: './assets/images/cutscene-chest.jpeg',
                            merlin: './assets/images/cutscene-merlin-three.png',
                            audio: './assets/audios/cutscene-three.mp3'
                        }
                    )
                    .then(() => {
                        arthur.hide();
                        battle.hide();
                        this.changeBackgroundImage('./assets/images/chest-grass.jpeg');
                        progress.next();
                        progress.setTitle('Ajude o rei Arthur encontrar a chave do castelo', true);
                        chest.init();
                        chest.conclude = () => this.next(4);
                        counter.init(null, 5);
                    });
                break;
            case 4:
                cutscene
                    .show(
                        'Último desafio',
                        'Ajude o Rei Arthur a retirar a espada da pedra e voltar ao trono.',
                        {
                            background: './assets/images/cutscene-castle.jpeg',
                            merlin: './assets/images/cutscene-merlin-four.png',
                            audio: './assets/audios/cutscene-four.mp3'
                        }
                    )
                    .then(() => {
                        chest.endAssets();
                        arthur.hide();
                        this.changeBackgroundImage('./assets/images/castle.jpeg');
                        progress.next();
                        progress.setTitle('Ajude o rei Arthur a tirar a espada da pedra para ele voltar ao trono', true);
                        castle.init();
                        castle.conclude = () => this.win();
                        counter.init(null, 12);
                    });
                break;
        }
    },
    lose: function(){
        this.lost = true;
        this.endAssets();
        home.show(
            'Infelizmente você perdeu todas as vidas',
            'Recomeçar',
            {
                imageUrl: './assets/images/home-merlin.jpeg',
                musicUrl: './assets/audios/lose.mp3',
                audioUrl: './assets/audios/help-lose.mp3',
            }
        );
    },
    win: function(){
        this.endAssets();
        home.show(
            'Parabéns, você ajudou o rei Arthur',
            'Jogar novamente',
            {
                imageUrl: './assets/images/home-arthur.jpeg',
                musicUrl: './assets/audios/win.mp3',
                audioUrl: './assets/audios/help-win.mp3',
            }
        );
    },
    endAssets: function(){
        bridge.endAssets();
        battle.endAssets();
        chest.endAssets();
        castle.endAssets();
    }
};

config.init(true);
