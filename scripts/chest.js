const chest = {
    element: document.querySelector('[data-chest]'),
    key: document.querySelector('[data-chest-key]'),
    hideClass: 'chest--hide',
    showKeyClass: 'chest__key--show',
    foundKey: false,
    hide: function(){
        this.element.classList.add(this.hideClass);
    },
    show: function(){
        this.element.classList.remove(this.hideClass);
    },
    endAssets: function(){
        this.hide();
        this.resetKey();
    },
    resetKey: function(){
        this.foundKey = false;
        this.key.classList.remove(this.showKeyClass)
    },
    upKey: function(){
        this.foundKey = true;
        this.key.classList.add(this.showKeyClass)
    },
    init: function(){
        this.show();
        this.resetKey();
        this.key.onclick = () => !this.foundKey ? this.upKey() : null;
    }
};
