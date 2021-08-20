
// auto hiding navbar
// detect scroll top or down
if ($('.smart-scroll').length > 0 && $('.logo-box').length > 0) { // check if element exists
    var last_scroll_top = 0;
    var media_menu = document.querySelector('.media-menu');
    $(window).on('scroll', function() {
        if(!media_menu.classList.contains('toggled')) {
            // console.log($(window).scrollTop());
            scroll_top = $(this).scrollTop();
            if($(window).scrollTop() > 700) {
                // show mini logo box
                $('.logo-mini-box').addClass('show');
            }
            if($(window).scrollTop() <= 700) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                // normalize logo box
                $('.logo-box').removeClass('minimize').addClass('normal-logo');
                $('.logo-mini-box').removeClass('show');
            } 
            else if(scroll_top < last_scroll_top) {
                // show navbar
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
                // minimize logo box
                $('.logo-box').removeClass('normal-logo').addClass('minimize');
                // show mini logo box
                $('.logo-mini-box').addClass('show');
            }
            else {
                // hide navbar
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        }
    });
}

// scrollspy
let menuSection = document.querySelectorAll('.supporting-nav a');
let mainSection = document.querySelectorAll('.myContainer section');

// for clickable event
menuSection.forEach(v=> {
    v.onclick = (()=> {
        setTimeout(()=> {
            menuSection.forEach(j=> j.classList.remove('active'));
            v.classList.add('active');
        },300);
    })
})

// for window scrolldown event
window.onscroll = (()=> {

    mainSection.forEach((v,i)=> {
        let rect = v.getBoundingClientRect().y
        if(rect < window.innerHeight-500) {
            menuSection.forEach(v=> v.classList.remove('active'));
            menuSection[i].classList.add('active');
        }
    })

    var d = document.documentElement;
    var offset = d.scrollTop + window.innerHeight;
    var height = d.offsetHeight;
    if (height - offset <= 80) {
        $('footer').addClass('active-footer');
    } else {
        $('footer').removeClass('active-footer');
    }
});

function toggleMenu() {
    var close_icon = document.getElementById('close-button');
    var open_icon = document.getElementById('open-button');

    if(close_icon.style.opacity == '0') {
        close_icon.style.transitionDelay = '.3s';
        close_icon.style.opacity = '1';
    }
    else if(close_icon.style.opacity == '1') close_icon.style.opacity = '0';

    if(open_icon.style.opacity == '0'){ 
        open_icon.style.transitionDelay = '.3s';
        open_icon.style.opacity = '1';
    }
    else if(open_icon.style.opacity == '1') open_icon.style.opacity = '0';

    var menuToggle = document.querySelector('.toggle');
    var media_menu = document.querySelector('.media-menu');
    var social_media = document.querySelector('.social-media-nav-items');
    var logo = document.querySelector('.logo-box');
    var mini_logo = document.querySelector('.logo-mini-box');
    menuToggle.classList.toggle('toggled-button');
    media_menu.classList.toggle('toggled');
    social_media.classList.toggle('hide');
    mini_logo.classList.toggle('logo-mini-box-toggled');
    logo.classList.toggle('logo-toggled');
};

// close menu on click outside the (menu) element 
document.addEventListener("click", (evt) => {
    const flyoutElement = document.getElementById("menu");
    let targetElement = evt.target;
    var menuToggle = document.querySelector('.toggle'); // button
    var mediaMenu = document.querySelector('.media-menu'); // media-menu
    do {
        if(targetElement == menuToggle) {
            return; // clicked on toggle button
        }
        if(targetElement == flyoutElement) {
            return; // clicked inside menu element
        }
        targetElement = targetElement.parentNode;
    } while(targetElement);
    if(mediaMenu.classList.contains('toggled')) {
        toggleMenu();   // clicked outside menu element and menu was already toggled
    }
});

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

var container = document.getElementById('scrolling-wrapper');
buttonRight.onclick = function () {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
        container.scrollLeft += 10;
        scrollAmount += 10;
        if(scrollAmount >= 600) {
            window.clearInterval(slideTimer);
        }
    }, 2);
}

buttonLeft.onclick = function () {
    scrollAmount = 0;
    var slideTimer = setInterval(function() {
        container.scrollLeft -= 10;
        scrollAmount += 10;
        if(scrollAmount >= 600) {
            window.clearInterval(slideTimer);
        }
    }, 2);
}
console.log('scrolling-wrapper width: ');
console.log(container.offsetWidth);
container.onscroll = (()=> {
    console.log(container.scrollLeft + " " + container.scrollWidth + " " + container.offsetWidth);
    if(container.scrollLeft <= 20) {
        buttonLeft.classList.add('disableLeft');
    } else {
        buttonLeft.classList.remove('disableLeft');
    }
    if(container.scrollWidth - container.scrollLeft - container.offsetWidth == 0) {
        console.log('end');
        buttonRight.classList.add('disableRight');
    } else {
        buttonRight.classList.remove('disableRight');
    }
});

// 3530px

var elem = document.getElementById('menu-slider');
var inner = document.getElementById('container');
