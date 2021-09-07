const cutscene = {
    element: document.querySelector('[data-cutscene]'),
    text: document.querySelector('[data-cutscene-text]'),
    merlin: document.querySelector('[data-cutscene-merlin]'),
    loading: document.querySelector('[data-cutscene-loading]'),
    title: document.querySelector('[data-cutscene-title]'),
    activeClass: 'cutscene--show',
    hideClass: 'hide',
    setLoading: function(){
        const text = 'Carregando';
        const currentText = this.loading.textContent;

        if(currentText.includes('...')) this.loading.textContent = text;
        else if(currentText.includes('..')) this.loading.textContent = `${text}...`;
        else if(currentText.includes('.')) this.loading.textContent = `${text}..`;
        else this.loading.textContent = `${text}.`;
    },
    show: function(title, text, urls){
        return new Promise((resolve, reject) => {
            this.element.classList.remove(this.hideClass);
            this.element.style.backgroundImage = `url(${urls.background})`;
            this.title.textContent = title;
            this.text.textContent = text;
            this.merlin.src = urls.merlin;

            const loadingInterval = setInterval(() => this.setLoading(), 1000);

            setTimeout(() => {
                this.element.classList.add(this.activeClass);

                if(!home.isActive()){
                    audio.play(
                        urls.audio,
                        { repeat: false, volume: 1 },
                        () => {
                            clearInterval(loadingInterval);

                            resolve();

                            this.element.classList.remove(this.activeClass);

                            setTimeout(() => this.element.classList.add(this.hideClass), config._timeTransitionWindow)
                        }
                    );
                } else reject();
            }, config._timeTransitionWindow);
        });
    }
};
