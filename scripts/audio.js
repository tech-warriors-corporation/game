const audio = {
    play: function(url){
        let audioPlayed = new Audio(url);

        audioPlayed.play();

        return {
            yourself: audioPlayed,
            end: () => {
                audioPlayed.pause();
                audioPlayed = null;
            }
        }
    }
}
