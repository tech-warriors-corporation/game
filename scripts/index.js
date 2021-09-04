const config = {
    _timeTransitionWindow: 250,
    element: document.querySelector('[data-game]'),
    hideClass: 'game--init',
    changeBackgroundImage: function(url){
        this.element.style.backgroundImage = `url(${url})`;
    },
    init: function(){
        this.element.classList.add(this.hideClass);

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
                progress.setTitle('Ajude o rei Arthur a atravessar a ponte, complete a ponte com uma forma geométrica', true);

                home.show(
                    'Em busca da coroa',
                    'Jogar',
                    {
                        imageUrl: './assets/images/home-arthur-and-merlin.png',
                        musicUrl: './assets/audios/home.mp3',
                        audioUrl: './assets/audios/help-home.mp3',
                    }
                );

                this.changeBackgroundImage('./assets/images/bridge-wallpaper.jpeg');
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
                        counter.init(30);
                        bridge.init();
                        bridge.conclude = () => {};
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
