const battle = {
    element: document.querySelector('[data-battle]'),
    buttons: document.querySelectorAll('[data-battle-attack]'),
    containerButtons: document.querySelector('[data-battle-attacks]'),
    hideContainerButtonsClass: 'battle__atacks--hide',
    hideClass: 'battle--hide',
    endAssets: function(){
        this.hide();
    },
    hide: function(){
        this.element.classList.add(this.hideClass)
    },
    init: function(){
        this.element.classList.remove(this.hideClass);
        arthur.init();
        this.watchSelection();
    },
    watchSelection: function(){
        this.buttons.forEach(button => button.onclick = this.select.bind(this));
    },
    select: function(event){
        // this.containerButtons.classList.add(this.hideContainerButtonsClass);
        // counter.stop();

        // arthur.walk(1000).then(() => {
        //     arthur.attack(event.target.dataset.battleAttack)
        //           .then(() => {
        //               arthur.walk(-1000).then(() => {
        //                   arthur.init();
        //                   this.containerButtons.classList.remove(this.hideContainerButtonsClass);
        //                   counter.continue();
        //               });
        //           });
        // });
    }
};
