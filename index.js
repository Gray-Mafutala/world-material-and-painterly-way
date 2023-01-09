const btnMenu = document.querySelector('.world-header__btn-menu');
const mobileMenu = document.querySelector('.world-header__mobile-nav');
const mobileMenuLinksWrapper = document.querySelector('.world-header__mobile-nav__links');
const btnCloseMenu = document.querySelector('.world-header__close-menu');
const mobileMenuLinks_All_Items = document.querySelectorAll('.world-header__mobile-nav__links_item');

const classToShowMobileMenu = 'world-header__mobile-nav--active';

// Show mobile menu
btnMenu.addEventListener('click', () => {
    mobileMenu.classList.add(classToShowMobileMenu);
    // To not have the possibility to scroll down and leave the mobile menu opened at the top
    document.body.classList.add('body-height-open-mobile-menu');
});

// Close mobile menu
btnCloseMenu.addEventListener('click', () => {
    mobileMenu.classList.remove(classToShowMobileMenu);
    document.body.classList.remove('body-height-open-mobile-menu');
});

// Close mobile menu when clicking on the modal container (of blue-transparent color) 
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.remove(classToShowMobileMenu);
    document.body.classList.remove('body-height-open-mobile-menu');
});

// Stop propagation (not to close the mobile menu when Menu-Links container (yellow) is clicked)
mobileMenuLinksWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Also close mobile menu when clicking on one of the links item
mobileMenuLinks_All_Items.forEach(menuLinkItem => {
    menuLinkItem.addEventListener('click', () => {
        mobileMenu.classList.remove(classToShowMobileMenu);
    });
});

// And close mobile menu when the width of screen is > 680px
window.addEventListener('resize', () => {
    if (window.innerWidth > 680) {
        mobileMenu.classList.remove(classToShowMobileMenu);
        document.body.classList.remove('body-height-open-mobile-menu');
    }
});