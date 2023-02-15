// To animate the page at loading

const header = document.querySelector('.world-header__navbar');

const leftEllipse = document.querySelector('.main-content__box--left');
const centerEllipse = document.querySelector('.main-content__box--center');
const rightEllipse = document.querySelector('.main-content__box--right');

const footerTitle = document.querySelector('.footer__title');
const footerPara = document.querySelector('.footer__para');
const footerCirclesImg = document.querySelector('.footer__right-content');

const startAnim = () => {
    header.classList.add('header_animation');

    leftEllipse.classList.add('ellipse-anim');
    centerEllipse.classList.add('ellipse-anim');
    rightEllipse.classList.add('ellipse-anim');

    footerTitle.classList.add('footer-element-anim');
    footerPara.classList.add('footer-element-anim');
    footerCirclesImg.classList.add('footer-element-anim');
};

startAnim();