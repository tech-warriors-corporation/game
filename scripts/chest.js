const chest = {
    element: document.querySelector('[data-chest]'),
    hideClass: 'chest--hide',
    hide: function(){
        this.element.classList.add(this.hideClass);
    },
    show: function(){
        this.element.classList.remove(this.hideClass);
    },
    endAssets: function(){
        this.hide();
    },
    init: function(){
        this.show();
    }
};
