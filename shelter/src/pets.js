import './sass/our-pets.scss'
import { addBurgerClickHandler, addMenuLinkClickHandler} from './js/burger';
import { Paginator } from './js/myPaginator';

document.addEventListener("DOMContentLoaded", () => {
   // Burger

   addBurgerClickHandler();
   addMenuLinkClickHandler();

   const paginator = new Paginator();
   paginator.drawPaginator();

   //addPetCardClickHandler();
});
/*
const paginator = document.querySelector('.all-pets__cards');

const addPetCardClickHandler = () => {
    paginator.addEventListener ('click', (e) => {
        if (e.target.closest('.pet-card')) {
            const clickedCardId = e.target.closest('.pet-card').getAttribute('data-id');
            const cardContent = getDataById(clickedCardId);
            const cardModal = new PetModal (cardContent);
            cardModal.buildModal();
        }
    })
}


const getDataById = (id) => {
    return petsArr.find(card => card.id == id);
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
}*/

