//BEGIN :: Your timeline section JS goes here

var TIMER = (function(){
    
    // Set the date we're counting down to
    var countDownTime = "08:00:00";
    var countDownDate = new Date("Sep 23, 2018 "+countDownTime).getTime();

    // Update the count down every 1 second
    var timeLoop = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var endTime = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(endTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((endTime % (1000 * 60)) / 1000);

        if (days.toString().length == 1) {
            days = "0" + days;
        }
        if (hours.toString().length == 1) {
            hours = "0" + hours;
        }
        if (minutes.toString().length == 1) {
            minutes = "0" + minutes;
        }
        if (seconds.toString().length == 1) {
            seconds = "0" + seconds;
        }

        $(".time.days").html(days);
        $(".suffix.days").html("D");
        $(".time.hours").html(hours);
        $(".suffix.hours").html("H");
        $(".time.mins").html(minutes);
        $(".suffix.mins").html("M");
        $(".time.secs").html(seconds);
        $(".suffix.secs").html("S");
        
        // If the count down is finished, clear it with allspark 
        if (endTime < 0) {
            clearInterval(timeLoop);
            $(".timer-container").html("<div class = 'hash-tag-symb'>#</div><div class = 'hash-tag-allspark'>SeeYouIn</div><div class = 'hash-tag-tx'>2019</div>");
        }
    }, 1000);
    
})();


//END :: Your timeline section JS goes here