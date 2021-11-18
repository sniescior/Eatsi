const menu = document.getElementById('menu');
const openButton = document.getElementById('menu-open-button');
const closeButton = document.getElementById('menu-close-button');
const buttonIcon = document.getElementById('menu-toggle-button-icon')
const navbar = document.getElementById('nav');
const container = document.getElementById('container');
const auxiliaryNav = document.getElementById('auxiliary-nav');

let toggleMenu = () => {
    navbar.classList.toggle('menu-expanded');
    menu.classList.toggle('visible');
    openButton.classList.toggle('icon-menu');
    openButton.classList.toggle('icon-cancel');
    closeButton.classList.toggle('visible');
    container.classList.toggle('menu-expanded');
    auxiliaryNav.classList.toggle('menu-expanded');
    document.body.classList.toggle('block-scroll');
}

// hide menu on scroll
window.addEventListener('scroll', (e) => {
    if(menu.classList.contains('visible')) toggleMenu();
});

// hide menu on click anywhere outside the menu or navbar element
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-wrapper')) return;
    if(e.target == openButton) return;
    if(e.target == closeButton) return;
    if(e.target == navbar) return;
    else {
        if(menu.classList.contains('visible')) toggleMenu();
        return;
    }
});
