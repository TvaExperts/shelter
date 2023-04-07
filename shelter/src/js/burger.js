const addBurgerClickHandler = () => {
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.header__navigation').classList.toggle('_open');
        document.body.classList.toggle('disable-scroll');
        toggleOverlay();
    });
}

const toggleOverlay = () => {
    if (document.querySelector('.header__navigation').classList.contains('_open')) {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.addEventListener('click', closeBurger);
        document.body.append(overlay);
    } else {
        closeBurger();
    }
}

const checkWidthChanges = () => {
    if (document.querySelector('.header__navigation').classList.contains('_open')) {
        if (window.innerWidth >= 768) {
            closeBurger();
        }
    }
}

window.addEventListener('resize', checkWidthChanges);

const closeBurger = () => {
    document.body.classList.remove('disable-scroll');
    document.querySelector('.overlay').remove();
    document.querySelector('.header__navigation').classList.remove('_open');
}


const addMenuLinkClickHandler = () => {
    const menuLinks = document.querySelectorAll('.header__navigation-link');
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', closeBurger);
    });
}


export { addBurgerClickHandler };
export { addMenuLinkClickHandler };
