import './sass/index.scss'

import { PetCard } from './js/petCard';
import { petsArr } from './js/pets-data';

window.onload = function () {

    render3PetCardsToDom();

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

