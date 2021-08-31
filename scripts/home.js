const home = {
    element: document.querySelector('[data-home]'),
    button: document.querySelector('[data-home-button]'),
    title: document.querySelector('[data-home-title]'),
    activeClass: 'home--show',
    show: function(title, buttonName, imageUrl){
        this.element.style.backgroundImage = `url(${imageUrl})`
        this.title.textContent = title;
        this.button.textContent = buttonName;
        this.element.classList.add(this.activeClass);
        this.button.onclick = () => this.element.classList.remove(this.activeClass);
    }
};
