import './sass/index.scss'

import { addBurgerClickHandler, addMenuLinkClickHandler} from './js/burger';

import { Slider } from './js/mySlider';



document.addEventListener("DOMContentLoaded", () => {

    // burger

    addBurgerClickHandler();
    addMenuLinkClickHandler();

    // slider

    const slider = new Slider();
    slider.drawCardsInSlider();

    showGrade();
});

const showGrade = () => {
console.log(`Самооценка работы:

========================================

    1. Реализация burger menu на обеих страницах: +26
    2. Реализация слайдера-карусели на странице Main: +36
    3. Реализация пагинации на странице Pets: +36
    4. Реализация попап на обеих страницах: +12

========================================

Итого: 110 баллов`)
}


