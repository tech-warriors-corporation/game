const audio = {
    play: function(url){
        const audioPlayed = new Audio(url);

        audioPlayed.volume = 0.25;
        audioPlayed.play();

        return {
            yourself: audioPlayed,
            end: () => audioPlayed.pause(),
            onended: audioPlayed.onended
        }
    }
}
