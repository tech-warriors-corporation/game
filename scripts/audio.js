const audio = {
    play: function(url, repeat, onEnded){
        const audioPlayed = new Audio(url);

        audioPlayed.volume = 0.15;
        audioPlayed.play();

        audioPlayed.onended = () => {
            if(onEnded) onEnded();
            if(repeat) audioPlayed.play();
        };

        return {
            yourself: audioPlayed,
            end: () => audioPlayed.pause()
        }
    }
}
