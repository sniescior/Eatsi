const menu = document.getElementById('menu');
const button = document.getElementById('menu-toggle-button');
const buttonIcon = document.getElementById('menu-toggle-button-icon')
const navbar = document.getElementById('nav');

let toggleMenu = () => {
    navbar.classList.toggle('menu-expanded');
    menu.classList.toggle('visible');
    button.classList.toggle('icon-menu');
    button.classList.toggle('icon-cancel');
}

// hide menu on scroll
window.addEventListener('scroll', (e) => {
    if(menu.classList.contains('visible')) toggleMenu();
});

// hide menu on click anywhere outside the menu or navbar element
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('menu-wrapper')) return;
    if(e.target == button) return;
    if(e.target == navbar) return;
    else {
        if(menu.classList.contains('visible')) toggleMenu();
        return;
    }
});
