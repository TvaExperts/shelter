import './sass/index.scss'

import { PetCard } from './js/petCard';
import { petsArr } from './js/pets-data';

const getSlider = () => {
    const slider = document.querySelector('.pets-slider');
    slider.innerHTML = '';
    return slider;
}


const renderPetCardsToDom = () => {
    let slider = getSlider();
    generatePetCards(petsArr).forEach(petData => {
        slider.append(petData.generatePetCard())
    })

}

const generatePetCards = (data) => {
    let petCards = [];
    for (let i=0; i<3; i++) {
        petCards.push(new PetCard(data[i]))
    }
    /*data.forEach(petData => {
        petCards.push(new PetCard(petData))
    });*/
    return petCards;
}

renderPetCardsToDom();