const config = {
    init: function(){
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

config.init();
