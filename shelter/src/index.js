import './sass/index.scss'

import { PetCard } from './js/petCard';
import { petsArr } from './js/pets-data';

import { addBurgerClickHandler, addMenuLinkClickHandler, addOverlayClickHandler } from './js/burger';

window.onload = function () {

    // Burger

    //addBurgerClickHandler();
    //addMenuLinkClickHandler();
    //addOverlayClickHandler();


    showGrade();
}



const getSlider = () => {
    const slider = document.querySelector('.pets__cards');
    slider.innerHTML = '';
    return slider;
}

const render3PetCardsToDom = () => {
    let slider = getSlider();
    generate3PetCards(petsArr).forEach(petData => {
        slider.append(petData.generatePetCard())
    })
}

const generate3PetCards = (data) => {
    let petCards = [];
    for (let i=0; i < 3; i++) {
        petCards.push(new PetCard(data[i]))
    }
    return petCards;
}

const showGrade = () => {
console.log(`Самооценка работы:

========================================

    1. Вёрстка страницы Main соответствует макету при ширине экрана 1280px: (+14)
    2. Вёрстка страницы Main соответствует макету при ширине экрана 768px: (+14)
    3. Вёрстка страницы Main соответствует макету при ширине экрана 320px: (+14)
    4. Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: (+6)
    5. Вёрстка страницы Pets соответствует макету при ширине экрана 768px: (+6)
    6. Вёрстка страницы Pets соответствует макету при ширине экрана 320px: (+6)
    7. Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: (+20)
    8. Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции (Примеры неправильной и правильной реализации): (+8)
    9. При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка burger-меню: (+4)
    10. Верстка обеих страниц валидная: (+8)

========================================

Итого: 100 баллов`)
}


