//BEGIN :: Your timeline section JS goes here

//BEGIN :: EVENT_SELECTOR function - populates the event dropdown selector
var EVENT_SELECTOR = (function(){
    var $event_selector = $("#event-selector");
    $.each(EVENT, function() {
        $event_selector.append($("<option />").val(this.name).text(this.display_name));
    });
})();
//END :: EVENT_SELECTOR function 

//BEGIN :: SESSION_SELECTOR function - populates the session dropdown selector
var SESSION_SELECTOR = (function(event_name){
    var $session_selector = $("#session-selector");
    $('#session-selector').html('');
    $session_selector.append("<option disabled='disabled' selected='selected'>Select session</option>");
    if (event_name == "ALLSPARK_SESSIONS"){
        for(let i = 0; i<ALLSPARK_SESSIONS.length ;i++){
            $session_selector.append($("<option />").val(ALLSPARK_SESSIONS[i].duration).text(ALLSPARK_SESSIONS[i].topic));
        }
    }
    if (event_name == "SOL_SPACE_EVENTS"){
        for(let i = 0; i<SOL_SPACE_EVENTS.length ;i++){
            $session_selector.append($("<option />").val(SOL_SPACE_EVENTS[i].duration).text(SOL_SPACE_EVENTS[i].topic));
        }
    }
    
});
//END :: SESSION_SELECTOR function 

//BEGIN :: SESSION_TIMER function - sets the duration of the session in timer 
var SETTIMER = (function(duration){
    var topic = $('#session-selector').find(":selected").text();
    $(".duration-value").html(duration);
    $(".section-heading").html(topic);
    duration = parseInt(duration);
    if(duration>60){
        var hour =  parseInt(duration/60);
        var min = duration%60;
        if (hour.toString().length == 1) {
            hour = "0" + hour;
        }
        if (min.toString().length == 1) {
            min = "0" + min;
        }
        $(".time.hours").html(hour);
        $(".suffix.hours").html("H");
        $(".time.mins").html(min);
        $(".suffix.mins").html("M");
    }
    else{
        $(".time.hours").html("");
        $(".suffix.hours").html("");
        if (duration.toString().length == 1) {
            duration = "0" + duration;
        }
        $(".time.mins").html(duration);
        $(".suffix.mins").html("M");
    }
    $(".time.secs").html("00");
    $(".suffix.secs").html("S");
});
//END :: SESSION_TIMER function


//BEGIN :: TIMER function  
var TIMER = (function(){
    var sessionDuration = $(".duration-value").html();
    sessionDuration = parseInt(sessionDuration);
    var finishTime = new Date();
    finishTime.setMinutes( finishTime.getMinutes() + sessionDuration);

    // Update the count down every 1 second
    var timeLoop = setInterval(function() {

        // Get todays date and time
        
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        
        var endTime = finishTime.getTime() - now;
       
        // Time calculations for minutes and seconds
        
        var minutes = Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((endTime % (1000 * 60)) / 1000);

        //Time calculations for hours
        var hours = 0;
        if(sessionDuration > 60){
            hours = Math.floor((endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            if (hours.toString().length == 1) {
                hours = "0" + hours;
            }
            $(".time.hours").html(hours);
            $(".suffix.hours").html("H");

        }
       
       
        if (minutes.toString().length == 1) {
            minutes = "0" + minutes;
        }
        if (seconds.toString().length == 1) {
            seconds = "0" + seconds;
        }


        $(".time.mins").html(minutes);
        $(".suffix.mins").html("M");
        $(".time.secs").html(seconds);
        $(".suffix.secs").html("S");
        
        var $timerContainer = $(".timer-container");
        var $timeUpContainer = $('.time-up-message');
        //If the count down is 5mins left, change backgroundcolor
        if (minutes < 5 && hours == 0) {
            $timerContainer.addClass("five-minute-intimation");
        }
        //If the count down is 1min left, start flashing the time
        if (minutes < 1 && hours == 0 ) {
            $timerContainer.removeClass("five-minute-intimation");
            $timerContainer.addClass("two-minute-intimation");
        }
        if(minutes <= 0 && seconds <= 0 && hours == 0){
            // $timerContainer.removeClass("five-minute-intimation two-minute-intimation");
            clearInterval(timeLoop);
            $timerContainer.hide();
            $timeUpContainer.show();
            
        }
        var resetTimer = (function(){
            clearInterval(timeLoop);
            $timeUpContainer.hide();
            $timerContainer.show();
            $timerContainer.removeClass("five-minute-intimation two-minute-intimation");
            
            
          });
        $('#event-selector').change(resetTimer);
        $('#session-selector').change(resetTimer);
        

    }, 1000);
    
});

