import './sass/index.scss'

import { PetCard } from './js/petCard';
import { petsArr } from './js/pets-data';

window.onload = function () {
    render3PetCardsToDom();
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

    Страница Main (+60):
        1. Проверка верстки +7
        2. Вёрстка соответствует макету +35
        3. Требования к css +6
        4. Интерактивность элементов +12

    Страница Pets (+40)
        1. Проверка верстки +7
        2. Вёрстка соответствует макету +15
        3. Требования к css +4
        4. Интерактивность элементов +14

========================================

Итого: 100 баллов`)
}


