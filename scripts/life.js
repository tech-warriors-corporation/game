const life = {
    element: document.querySelector('[data-life]'),
    items: document.querySelectorAll('[data-life-item]'),
    activeItemClass: 'life__item--active',
    reset: function(){
        this.items.forEach(item => item.classList.add(this.activeItemClass))
    },
    lessOne: function(){
        let lastItem = null;
        let lastIndex = null;

        this.items.forEach((item, index) => {
            if(item.classList.contains(this.activeItemClass)){
                lastItem = item;
                lastIndex = index;
            }
        });

        if(lastItem) lastItem.classList.remove(this.activeItemClass);
        if(lastIndex === 0) config.lose();
    }
};
