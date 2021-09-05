const battle = {
    element: document.querySelector('[data-battle]'),
    buttons: document.querySelectorAll('[data-battle-attack]'),
    containerButtons: document.querySelector('[data-battle-attacks]'),
    hideContainerButtonsClass: 'battle__atacks--hide',
    hideClass: 'battle--hide',
    audio: null,
    endAssets: function(){
        this.hide();

        if(this.audio) this.audio.end();
    },
    hide: function(){
        this.element.classList.add(this.hideClass)
    },
    init: function(){
        this.audio = audio.play('./assets/audios/battle.mp3', { repeat: true });
        this.element.classList.remove(this.hideClass);
        enemy.init();
        arthur.init();
        this.watchSelection();
    },
    watchSelection: function(){
        this.buttons.forEach(button => button.onclick = this.select.bind(this));
    },
    select: function(event){
        this.containerButtons.classList.add(this.hideContainerButtonsClass);
        counter.stop();

        const positionEnemy = enemy.getPositionLeft();

        arthur.walk(positionEnemy).then(() => {
            arthur.attack(event.target.dataset.battleAttack).then(() => {
                enemy.hitMe().then(killedHim => {
                    if(killedHim) enemy.died();

                    arthur.walk(-positionEnemy).then(() => {
                        arthur.init();

                        if(killedHim) this.killedHim();
                        else{
                            this.containerButtons.classList.remove(this.hideContainerButtonsClass);
                            counter.restart();
                        }
                    });
                });
          });
        });
    },
    killedHim: function(){

    }
};
