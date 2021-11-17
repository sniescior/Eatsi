let menu = document.getElementById('menu');
let button = document.getElementById('menu-open-button');
let navbar = document.getElementById('nav');

let toggleMenu = () => {
    navbar.classList.toggle('menu-expanded');
    menu.classList.toggle('visible');
    button.classList.toggle('icon-menu');
    button.classList.toggle('icon-cancel');
}
