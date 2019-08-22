//BEGIN :: Your session section JS goes here
$(document).ready(function(){ 

	$("#view-session-btn").click(function() {
		//Offset of 20px
	    var offset = 20; 

	    //Scroll to Day 1 of Schedule section
	    $('html, body').animate({
	        scrollTop: $("#schedule").offset().top + offset
	    }, 1000);
	   	$("#allspark-btn").click()
	});

	$('#view-kiosks-btn').click(function() {
		//Offset of 20px
		var offset = 20; 

		//Scroll to Day 2 of Schedule section
		$('html, body').animate({
	        scrollTop: $("#schedule").offset().top + offset
	    }, 1000);
	    $("#solution-space-btn").click()
	});
});
//END :: Your session section JS goes here