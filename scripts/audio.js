const audio = {
    play: function(url, assets, onEnded){
        if(!assets) assets = {};

        const audioPlayed = new Audio(url);

        audioPlayed.volume = assets.volume || 0.25;
        audioPlayed.play();

        audioPlayed.onended = () => {
            if(onEnded) onEnded();
            if(assets.repeat) audioPlayed.play();
        };

        return {
            yourself: audioPlayed,
            end: () => audioPlayed.pause()
        }
    }
}
