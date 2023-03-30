import './sass/our-pets.scss'

import { PetCard } from './js/petCard';
import { petsArr } from './js/pets-data';

window.onload = function () {

    //renderPetCardsToDom();

}

const getPetsPaginator = () => {
    const paginator = document.querySelector('.all-pets__cards');
    paginator.innerHTML = '';
    return paginator;
}

const renderPetCardsToDom = () => {
    let paginator = getPetsPaginator();
    generatePetCards(petsArr).forEach(petData => {
        paginator.append(petData.generatePetCard())
    })
}

const generatePetCards = (data) => {
    let petCards = [];
    data.forEach(petData => {
        petCards.push(new PetCard(petData))
    });
    return petCards;
}

