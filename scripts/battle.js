const battle = {
    element: document.querySelector('[data-battle]'),
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
    }
};
