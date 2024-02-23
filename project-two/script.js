$(document).ready(function() {
  
    const audio = new Audio('1994.mp3'); 


    const enterLink = document.getElementById('enterLink');
    enterLink.addEventListener('mouseover', function() {
        audio.currentTime = 13;
        audio.play();
    });


    $('.one').on('load', function() {
        audio.play();
    });
});
