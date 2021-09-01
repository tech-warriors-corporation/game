const config = {
    init: function(first){
        if(first){
            home.show('Em busca da coroa', 'Jogar', './assets/home-arthur-and-merlin.png');

            return;
        }

        this.step = 1;
        this.lost = false;

        life.reset();
        progress.reset();
        counter.init(15);
    },
    lose: function(){
        this.lost = true;
        home.show('Infelizmente você perdeu todas as vidas', 'Tentar novamente', './assets/home-arthur.png');
    },
    win: function(){

    }
};

config.init(true);
