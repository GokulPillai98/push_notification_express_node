$("document").ready(function(){
    function isIE(){
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > 0) // If Internet Explorer, return version number
        {
            if(msie < 9){
                $("#content").hide();
                $("ieContent").show();
            }
        }
        else  // If another browser, return 0
        {
        }
        return msie;
    }

    function isEdge(){
        var ua = window.navigator.userAgent;
        var edge = ua.indexOf("Edge/ ");
        var trident = ua.indexOf("Trident/");
        if (edge > 0 || trident > 0) // If Internet Explorer, return version number
        {
            return true;
        }
        else  // If another browser, return 0
        {
            return false;
        }
    }

    function checkBrowser(){
        var ieVersion = isIE();
        var edgeVersion = isEdge();

        if(ieVersion > 0){
            actionsForIE();
            if(ieVersion < 9){
                $("#container").hide();
                $("#ieContainer").show();
            }
        }else{
            if(edgeVersion){
                actionsForIE();
            }else{
                $("#allSparkLogoForIE").hide();
            }
            
        }
    }

    function actionsForIE(){
        $("#allSparkCube").hide();
        if(window.innerWidth > 500){
            $("#allSparkLogoForIE").show();
        }
        
    }

    checkBrowser();
});

var allSparkModule = angular.module('allSparkModule',[])

.controller('allSparkController', function($scope, $http){
    
    $scope.events = EVENTS2016;
    $scope.prevEvents = INDIA_EVENTS;
    $scope.timelines = FLASHBACK_EVENTS;
    $scope.guests = GUESTS;


    $scope.selectedEvent = {};

    $scope.showContent = function(content){
        $("#carousel > div").hide();
        $("#"+content).show();
    };

    $scope.displayCountDown = function(){
        var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var edge = ua.indexOf("Edge/ ");
        var trident = ua.indexOf("Trident/");

        if(isFirefox == true || msie > 0 || edge > 0 || trident > 0){
            return true;
        }else{
            return false;
        }
    };

    $scope.showCountDown = $scope.displayCountDown();

    $scope.getTimeRemaining = function(endtime){
        var t = Number(Date.parse(endtime) - Date.parse(new Date()));
        var seconds = Math.floor( (t/1000) % 60 );
        var minutes = Math.floor( (t/1000/60) % 60 );
        var hours = Math.floor( (t/(1000*60*60)) % 24 );
        var days = Math.floor( t/(1000*60*60*24) );
        
        
        if(Number(t) > 0){
	        return {
	            'total': t,
	            'days': days,
	            'hours': hours,
	            'minutes': minutes,
	            'seconds': seconds
	        };
        }else{
        	return {
	            'total': 0,
	            'days': 0,
	            'hours': 0,
	            'minutes': 0,
	            'seconds': 0
	        };
        }
    };

    $scope.showTopicDesc = function(data){
        $scope.selectedEvent = data;
        $(".eventOverlay").show();
        $("body").css("overflow","hidden");
    }; 

    $scope.closeTopicDesc = function(){
        $(".eventOverlay").hide();
        $("body").css("overflow","auto");
    } 

    setInterval(function(){
        $scope.remTime = $scope.getTimeRemaining(EVENT_START_TIME);
        $scope.$apply();
    }, 1000);
});