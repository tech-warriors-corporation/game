const cutscene = {
    element: document.querySelector('[data-cutscene]'),
    text: document.querySelector('[data-cutscene-text]'),
    merlin: document.querySelector('[data-cutscene-merlin]'),
    activeClass: 'cutscene--show',
    hideClass: 'cutscene--none',
    show: function(text, urls){
        return new Promise((resolve, reject) => {
            this.element.classList.remove(this.hideClass);
            this.element.style.backgroundImage = `url(${urls.background})`;
            this.text.textContent = text;
            this.merlin.src = urls.merlin;

            setTimeout(() => {
                this.element.classList.add(this.activeClass);

                if(!home.isActive()){
                    const audioCutscene = audio.play(urls.audio);

                    audioCutscene.onended = () => {
                        resolve();

                        this.element.classList.remove(this.activeClass);

                        setTimeout(() => this.element.classList.add(this.hideClass), config._timeTransitionWindow)
                    };
                } else reject();
            }, config._timeTransitionWindow);
        });
    }
};
