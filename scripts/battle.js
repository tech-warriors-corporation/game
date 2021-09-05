const battle = {
    element: document.querySelector('[data-battle]'),
    buttons: document.querySelectorAll('[data-battle-attack]'),
    containerButtons: document.querySelector('[data-battle-attacks]'),
    hideContainerButtonsClass: 'battle__atacks--hide',
    hideClass: 'battle--hide',
    audio: null,
    conclude: () => {},
    showAttacks: function(){
        this.containerButtons.classList.remove(this.hideContainerButtonsClass);
    },
    hideAttacks: function(){
        this.containerButtons.classList.add(this.hideContainerButtonsClass);
    },
    endAssets: function(){
        this.hide();

        if(this.audio) this.audio.end();
    },
    hide: function(){
        this.element.classList.add(this.hideClass)
    },
    init: function(){
        this.audio = audio.play('./assets/audios/battle.mp3', { repeat: true });
        this.showAttacks();
        this.element.classList.remove(this.hideClass);
        enemy.init();
        arthur.init();
        this.watchSelection();
    },
    watchSelection: function(){
        this.buttons.forEach(button => button.onclick = this.select.bind(this));
    },
    select: function(event){
        this.hideAttacks();
        counter.stop();

        const positionEnemy = enemy.getPositionLeft();

        arthur.walk(positionEnemy).then(() => {
            arthur.attack(event.target.dataset.battleAttack).then(() => {
                enemy.hitMe().then(killedHim => {
                    if(killedHim) enemy.died();

                    arthur.walk(-positionEnemy).then(() => {
                        arthur.init();

                        if(killedHim){
                            battle.endAssets();
                            this.conclude();
                        } else{
                            this.showAttacks();
                            counter.continue();
                        }
                    });
                });
          });
        });
    },
    userHitted: function(){
        const distance = enemy.getPositionLeft();

        this.hideAttacks();

        enemy.walk(distance).then(() => {
            enemy.punch().then(() => {
                life.lessOne();

                if(!config.lost){
                    enemy.walk(-distance).then(() => {
                        counter.restart();
                        enemy.resetPosition();
                        this.showAttacks();
                    });
                }
            });

            arthur.hitMe();
        });
    }
};
