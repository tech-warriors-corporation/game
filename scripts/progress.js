const progress = {
    element: document.querySelector('[data-progress]'),
    items: document.querySelectorAll('[data-progress-item]'),
    bar: document.querySelector('[data-progress-bar]'),
    title: document.querySelector('[data-progress-title]'),
    lightTitleClass: 'progress__title--light',
    activeItemClass: 'progress__item--active',
    setTitle: function(title, light){
        this.title.textContent = title;

        if(light) this.title.classList.add(this.lightTitleClass);
        else this.title.classList.remove(this.lightTitleClass);
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
    }
};
