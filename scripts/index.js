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
    },
    win: function(){

    }
};

config.init(true);
