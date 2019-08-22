$(document).ready((function(){
    //Displaying IE browser content 
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
    {
        document.getElementById("ie-content-wrapper").setAttribute("class", "display-block");
        document.getElementsByClassName("allspark-main-wrapper")[0].classList.add("display-none");
    }else{
        document.getElementById("ie-content-wrapper").setAttribute("class", "display-none");
        document.getElementsByClassName("allspark-main-wrapper")[0].classList.add("display-block");
    }
    $(".internal-link").click(function(){
        //Footer link scroll animation
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
})()
);
