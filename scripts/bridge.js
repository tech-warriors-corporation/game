const bridge = {
    element: document.querySelector('[data-bridge]'),
    complete: document.querySelector('[data-bridge-complete]'),
    buttons: document.querySelectorAll('[data-bridge-form]'),
    forms: document.querySelector('[data-bridge-forms]'),
    hideFormsClass: 'brige__forms--hide',
    _correctValue: 'square',
    _wellDone: false,
    init: function(){
        this._wellDone = false;
        this.forms.classList.remove(this.hideFormsClass);
        this.buttons.forEach(button => button.onclick = this.select.bind(this));
    },
    select: function(event){
        if(this._wellDone) return;

        if(event.target.dataset.bridgeForm === this._correctValue){
            this._wellDone = true;
            this.forms.classList.add(this.hideFormsClass);

            return;
        }

        life.lessOne();
    }
};
