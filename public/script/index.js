/**
 * function name : scrollToTop,
 * Description : Scrolls to top of the page
 */
var scrollToTop = () => {
  
    $("html, body").animate({scrollTop : 0},1000);
		return false;
}
/**
 * function name : triggerAnimation,
 * Description : Triggers animation for the sections
 * @param {*} section 
 * @param {*} className 
 */
function triggerAnimation (section, className) {
    let enableScrollAnimation = true;
    let $sessionElement = $(section);
    let $window = $(window);

    let checkIfInSessionView = function () {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        if (window_top_position <= 200) {
            enableScrollAnimation = true;
        }

        $.each($sessionElement, function () {
            let $element = $(this);
            let elementHeight = $element.outerHeight();
            let elementTopPosition = $element.offset().top;
			let elementBottomPosition = (elementTopPosition + elementHeight);
            if (((elementBottomPosition + 100) >= window_top_position) &&
                ((elementTopPosition + 100) <= window_bottom_position)) {
					$element.addClass(className);
                	enableScrollAnimation = false;
            } else {
                if (enableScrollAnimation) {
                    $element.removeClass(className);
                }
            }
        });

    };
    $window.on('scroll resize', checkIfInSessionView);
    $window.trigger('scroll');
};

$(document).ready(function(){

	//Triggers animation for footer,session,timer,schedule sections
	triggerAnimation('.footer-section','in-view');
	triggerAnimation('.session-card','session-in-view');
	triggerAnimation('.timer-section','in-view');
	triggerAnimation('.schedule-section','schedule-scroll-effects');

	//Scroll to top
    $('.allspark19 div').click(()=>{
        event.preventDefault();
        scrollToTop();  
    })
});


