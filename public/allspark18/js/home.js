//BEGIN :: Your Home section JS goes here
/**
 * Closure for Landing Page Animation
 * @returns @function animateRocket
 */
var LANDING_PAGE = function(){
    //Query Logo Components
    var $trail = $('.logo__trail');
    var $rocket = $('.logo__rocket');
    var $sparks = $('.logo__sparks');
    //Animation related variables
    var animationClass = 'animation';
    /**
     * @function to animate logo components
     */
    var animateRocket = function() {
        $trail.show();
        $rocket.show();
        $trail.addClass(animationClass);
        $rocket.addClass(animationClass);
        $sparks.addClass(animationClass);
    }

    return {
        animateRocket: animateRocket
    }

}();
/**
 * On Document Ready
 */
$(document).ready(function(){
   LANDING_PAGE.animateRocket();
})
//END :: Your Home section JS goes here

