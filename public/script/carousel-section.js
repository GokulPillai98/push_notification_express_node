var container = document.getElementById('carousel-wrapper');
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;
var isMobile = false;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 1;
        isMobile = true;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
            isMobile = true;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
                isMobile = true;
            } else {
                slidesPerPage = 4;
                isMobile = false;
            }
        }
    }
    slidesCount = slides - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    if(w < 551 || w < 901 || w < 1101 ) {
        currentMargin = - currentPosition * (100 / slidesPerPage);
    } else {
        currentMargin = 10;
    }
    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
       
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';

        currentMargin += (100 / slidesPerPage);
        currentPosition--;
        if(document.getElementById('prev').style.display == "none" || document.getElementById('prev').style.display == "") {
            document.getElementById('prev').style.display = "block";
        }  
        if(document.getElementById('next').style.display == "none" || document.getElementById('next').style.display == "") {
            document.getElementById('next').style.display = "block";
        }   
    };
    if (currentPosition === 0) {
        document.getElementById('prev').style.display = "none";
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        if(currentPosition+1 == slidesCount && !isMobile) {
            var carousalWidth = $(".carousal-section").width();
            var lastElemPos = $("#slider .slide:last-child").position().left;
            var lastElemWidth = $("#slider .slide:last-child").width();
            var lastElemMarginLeft = lastElemPos + lastElemWidth - carousalWidth;
            var sliderLeftPos = $("#slider").css("margin-left").replace(/[^-\d\.]/g, '');
            var marginLeftVal = sliderLeftPos - lastElemMarginLeft ; 

            slider.style.marginLeft = marginLeftVal + "px";
            currentMargin -= (100 / slidesPerPage);
        } else {
            slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
            currentMargin -= (100 / slidesPerPage);
        }
        currentPosition++;
        if(document.getElementById('next').style.display == "none" || document.getElementById('next').style.display == "") {
            document.getElementById('next').style.display = "block";
        }  
        if(document.getElementById('prev').style.display == "none" || document.getElementById('prev').style.display == "") {
            document.getElementById('prev').style.display = "block";
        }  
    };
    if (currentPosition == slidesCount) {
        document.getElementById('next').style.display = "none";
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};