$(document).ready(function() {
  
    const audio = new Audio('time.mp3'); 
    
    let snowflakes = document.querySelector('.snowflakes');
    let img = document.querySelector('.open');
    img.addEventListener('click', function(){
        img.style.opacity = '0';
        img.style.zIndex = '-100';
        audio.currentTime = 13;
        audio.play();
        setTimeout(() => {snowflakes.style.opacity = "1";
    }, 500);
    })

});


