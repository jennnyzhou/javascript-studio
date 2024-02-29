$(document).ready(function() {
  
    const audio1994 = new Audio('1994.mp3');
    const audio2004 = new Audio('2004.mp3');
    const audio2014 = new Audio('2014.mp3');
    const audio2023 = new Audio('2023.mp3');
    const audio2024 = new Audio('2024.mp3');

    audio1994.currentTime = 23;
    audio2004.currentTime = 15;
    audio2014.currentTime = 2;
    audio2023.currentTime = 37;
    audio2024.currentTime = 10;


    function handleAudioPlayback() {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.target.classList.contains('one')) {

                    audio1994.play();
                } else if (!entry.isIntersecting && entry.target.classList.contains('one')) {
          
                    audio1994.pause();
                }
                if (entry.isIntersecting && entry.target.classList.contains('two')) {

                    audio2004.play();
                } else if (!entry.isIntersecting && entry.target.classList.contains('two')) {

                    audio2004.pause();
                }
                if (entry.isIntersecting && entry.target.classList.contains('three')) {
  
                    audio2014.play();
                } else if (!entry.isIntersecting && entry.target.classList.contains('three')) {

                    audio2014.pause();
                }
                if (entry.isIntersecting && entry.target.classList.contains('four')) {
  
                    audio2023.play();
                } else if (!entry.isIntersecting && entry.target.classList.contains('four')) {

                    audio2023.pause();
                }
                if (entry.isIntersecting && entry.target.classList.contains('five')) {
  
                    audio2024.play();
                } else if (!entry.isIntersecting && entry.target.classList.contains('five')) {

                    audio2024.pause();
                }
            });
        }, { threshold: 0.5 }); 

    
        observer.observe(document.querySelector('.one'));
        observer.observe(document.querySelector('.two'));
        observer.observe(document.querySelector('.three'));
        observer.observe(document.querySelector('.four'));
        observer.observe(document.querySelector('.five'));
    }

    
    

    handleAudioPlayback();
});


var countDownDate = new Date("December 25, 2024").getTime(); // Define the target date

var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


  
        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop();
            $('.snow').css('transform', 'rotateY(' + scrollPosition + 'deg)');
        });

        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop();
            $('.tree').css('transform', 'rotateY(' + scrollPosition + 'deg)');
        });

        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop();
            $('.cane').css('transform', 'rotateY(' + scrollPosition + 'deg)');
        });

        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop();
            $('.boot').css('transform', 'rotateY(' + scrollPosition + 'deg)');
        });

        $(window).scroll(function() {
            var scrollPosition = $(window).scrollTop();
            $('.gingerbread').css('transform', 'rotateY(' + scrollPosition + 'deg)');
        });