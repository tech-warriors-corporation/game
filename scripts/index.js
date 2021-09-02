const config = {
    _timeTransitionWindow: 250,
    init: function(first){
        if(first){
            home.show('Em busca da coroa', 'Jogar', './assets/images/home-arthur-and-merlin.png');

            return;
        }

        this.step = 1;
        this.lost = false;

        config.next();
    },
    next: function(){
        switch(this.step){
            case 1:
                life.reset();
                progress.reset();
                cutscene.show(
                    'dasdsaasdadsadsdas',
                    {
                        background: './assets/images/home-arthur.png',
                        merlin: './assets/images/cutscene-merlin-three.png'
                    }
                )
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
