
// auto hiding navbar
// detect scroll top or down
if ($('.smart-scroll').length > 0 && $('.logo-box').length > 0) { // check if element exists
    var last_scroll_top = 0;
    var media_menu = document.querySelector('.media-menu');
    $(window).on('scroll', function() {
        if(!media_menu.classList.contains('toggled')) {
            // console.log($(window).scrollTop());
            scroll_top = $(this).scrollTop();
            if($(window).scrollTop() > 100) {
                // show mini logo box
                $('.logo-mini-box').addClass('show');
            }
            if($(window).scrollTop() <= 100) {
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

/*
function to change banner image on hover over list item
function changeBg(url, element) {
    element.css('background', `url('${url}')`);
    element.css('background-position', `center`);
    element.css('background-size', `cover`);
    element.css('transition', `.2s ease-in-out`);
}

$(function() {
    $(function() {
        $('#m_one').hover(function() {
            // on hover change backgroung of the element
            changeBg('banners/ice-cream/one.jpg', $('#meat_lovers_banner_img'));
        }, function() {
          // mouseout
        });

        $('#m_two').hover(function() {
            // on hover change backgroung of the element
            changeBg('banners/ice-cream/two.jpg', $('#meat_lovers_banner_img'));
        }, function() {
          // mouseout
        });

        $('#m_three').hover(function() {
            // on hover change backgroung of the element
            changeBg('banners/ice-cream/three.jpg', $('#meat_lovers_banner_img'));
        }, function() {
          // mouseout
        });

        $('#m_four').hover(function() {
            // on hover change backgroung of the element
            changeBg('banners/ice-cream/four.jpg', $('#meat_lovers_banner_img'));
        }, function() {
          // mouseout
        });
      });
})
*/