const btnMenu = document.querySelector('.world-header__btn-menu');
const mobileMenu = document.querySelector('.world-header__mobile-nav');
const mobileMenuLinks = document.querySelector('.world-header__mobile-nav__links');
const btnCloseMenu = document.querySelector('.world-header__close-menu');

const classToShowMobileMenu = 'world-header__mobile-nav--active';

// Show mobile menu
btnMenu.addEventListener('click', () => {
    mobileMenu.classList.add(classToShowMobileMenu);
});

// Close mobile menu
btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.remove(classToShowMobileMenu);
});

// Close mobile menu when on clique sur le wrapper transparent
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove(classToShowMobileMenu);
}, false);

// Stop propagation (pas fermer)
mobileMenuLinks.addEventListener('click', (e) => {
    e.stopPropagation();
});

// and close mobile menu quand la largeur est > 680px
window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
        mobileMenu.classList.remove(classToShowMobileMenu);
    }
});