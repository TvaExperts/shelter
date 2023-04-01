
const addBurgerClickHandler = () => {
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__navigation').classList.toggle('_open');
        document.body.classList.toggle('disable-burger-scroll');
    });
}

const addMenuLinkClickHandler = () => {

    const menuLinks = document.querySelectorAll('.navigation__link');

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function() {
            document.querySelector('.header__navigation').classList.remove('_open');
            document.body.classList.remove('disable-burger-scroll');
        });
    });
}

const addOverlayClickHandler = () => {
    document.addEventListener('click', e => {
        if (e.target.classList.contains('overlay'))
        {
            document.querySelector('.header__navigation').classList.remove('_open');
            document.body.classList.remove('disable-burger-scroll');
        }
    });
}

export { addBurgerClickHandler };
export { addMenuLinkClickHandler };
export { addOverlayClickHandler };