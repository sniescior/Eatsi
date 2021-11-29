// scrollspy
// ...

// scrolling-wrapper scroll on button click 

// check if touch screen device
function is_touch_enabled() {
    return ( 'ontouchstart' in window ) || 
           ( navigator.maxTouchPoints > 0 ) ||
           ( navigator.msMaxTouchPoints > 0 );
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

if(is_touch_enabled()) {
    buttonRight.classList.add('touch-screen');
    buttonLeft.classList.add('touch-screen');
}

var wrapper = document.getElementById('scrolling-wrapper');
buttonRight.onclick = function () {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
        wrapper.scrollLeft += 10;
        scrollAmount += 10;
        if(scrollAmount >= 600) {
            window.clearInterval(slideTimer);
        }
    }, 2);
}

buttonLeft.onclick = function () {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
        wrapper.scrollLeft -= 10;
        scrollAmount += 10;
        if(scrollAmount >= 600) {
            window.clearInterval(slideTimer);
        }
    }, 2);
}

wrapper.onscroll = (()=> {
    if(wrapper.scrollLeft <= 20) {
        buttonLeft.classList.add('disableLeft');
    } else {
        buttonLeft.classList.remove('disableLeft');
    }
    if(wrapper.scrollWidth - wrapper.scrollLeft - wrapper.offsetWidth == 0) {
        buttonRight.classList.add('disableRight');
    } else {
        buttonRight.classList.remove('disableRight');
    }
});

// 3530px

var elem = document.getElementById('menu-slider');
var inner = document.getElementById('wrapper');
