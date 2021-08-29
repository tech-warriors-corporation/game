const progress = {
    element: document.querySelector('[data-progress]'),
    items: document.querySelectorAll('[data-progress-item]'),
    bar: document.querySelector('[data-progress-bar]'),
    title: document.querySelector('[data-progress-title]'),
    activeItemClass: 'progress__item--active',
    setTitle: function(title){
        this.title.textContent = title;
    },
    currentBarWidth: function(reset){
        if(reset) return '0px';

        const separatedSpace = this.element.offsetWidth / this.items.length;

        return `${this.bar.offsetWidth + separatedSpace + (this.items[0].offsetWidth / 1.5)}px`;
    },
    reset: function(){
        this.setTitle('');
        this.bar.style.width = this.currentBarWidth(true);
        this.items.forEach((item, index) =>
            item.classList[index === 0 ? 'add' : 'remove'](this.activeItemClass)
        );
    },
    next: function(){
        let nextItem = null;
        let nextIndexItem = null;

        this.items.forEach((item, index) => {
            if(!nextItem && !item.classList.contains(this.activeItemClass)){
                nextItem = item;
                nextIndexItem = index;
            }
        });

        if(nextItem){
            this.bar.style.width = this.currentBarWidth();
            nextItem.classList.add(this.activeItemClass);
        }

        if(!nextIndexItem) config.win();
    }
};
