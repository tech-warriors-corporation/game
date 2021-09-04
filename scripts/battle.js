const battle = {
    element: document.querySelector('[data-battle]'),
    buttons: document.querySelectorAll('[data-battle-attack]'),
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
        arthur.attack(event.currentTarget.dataset.battleAttack).then(() => {});
    }
};
