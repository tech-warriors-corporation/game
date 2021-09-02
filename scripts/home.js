const home = {
    element: document.querySelector('[data-home]'),
    button: document.querySelector('[data-home-button]'),
    title: document.querySelector('[data-home-title]'),
    activeClass: 'home--show',
    hideClass: 'home--none',
    isActive: function(){
        return this.element.classList.contains(this.activeClass);
    },
    show: function(title, buttonName, imageUrl){
        if(this.isActive()) return;

        this.element.classList.remove(this.hideClass);
        this.element.style.backgroundImage = `url(${imageUrl})`
        this.title.textContent = title;
        this.button.textContent = buttonName;

        setTimeout(() => this.element.classList.add(this.activeClass), config._timeTransitionWindow)

        this.button.onclick = () => {
            config.init();
            this.element.classList.remove(this.activeClass);

            setTimeout(() => this.element.classList.add(this.hideClass), config._timeTransitionWindow)
        }
    }
};
