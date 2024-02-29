$(document).ready(function() {
  
    const audio = new Audio('time.mp3'); 
    


    const enterLink = document.getElementById('enterLink');
    enterLink.addEventListener('mouseover', function() {
        audio.currentTime = 13;
        audio.play();
    });

});

