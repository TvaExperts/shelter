import { PetCard } from './petCard';
import { petsArr } from './pets-data';
import { PetModal } from './PetModal';

export class Slider {

    constructor() {
        this.slider = document.querySelector('.pets__cards');

        this.buttonNext = document.getElementById('slider-next');
        this.buttonNext.addEventListener('click', this.slideNext);

        this.buttonPrev = document.getElementById('slider-prev');
        this.buttonPrev.addEventListener('click', this.slidePrev);

        window.addEventListener('resize', this.checkSliderSize);

        this.numCardsInSlider = this.getCountOfCards();
        this.cardWidth = 270;
        this.cardsMap = {
            prev: [],
            cur: [],
            next: []
        }
        this.initCardsMap();
        this.slider.addEventListener ('click', this.showCardModal);
    }

    getCardDataById = (id) => {
        return petsArr.find(card => card.id == id);
    }

    showCardModal = (event) => {
        if (event.target.closest('.pet-card')) {
            const clickedCardId = event.target.closest('.pet-card').getAttribute('data-id');
            const cardContent = this.getCardDataById(clickedCardId);
            const cardModal = new PetModal (cardContent);
            cardModal.buildModal();
        }
    }

    initCardsMap = () => {
        this.addNewRandomNumInMap(this.cardsMap.cur, this.numCardsInSlider);
        this.cardsMap.next = this.generateNewRandomArr(this.cardsMap.cur);
        this.cardsMap.prev = this.generateNewRandomArr(this.cardsMap.cur);

    }

    getRandomNaturalInt = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    generateNewRandomArr = (curArray) => {
        const newArr=[];
        for (let i = 0; i < curArray.length; i++) {
            let newNumOfCard = this.getRandomNaturalInt(8);
            while (curArray.includes(newNumOfCard) || newArr.includes(newNumOfCard)) {
                newNumOfCard = this.getRandomNaturalInt(8);
            }
            newArr.push(newNumOfCard);
        }
        return newArr;
    }

    calculateLeftPosition = (index) => {
        switch (this.numCardsInSlider) {
            case 1: return index * this.slider.clientWidth + (this.slider.clientWidth - this.cardWidth) / 2;
            case 2: return index * (this.slider.clientWidth - this.cardWidth);
            case 3: return index * (this.cardWidth + (this.slider.clientWidth - this.cardWidth * 3) / 2);
        }
    }

    drawCardsInSlider = () => {
        this.slider.innerHTML = '';
        this.addPrevCards();
        this.addCurCards();
        this.addNextCards();
    }

    addPrevCards = () => {
        for (let i = 0; i < this.numCardsInSlider; i++) {
            const petData = this.getCardDataById(this.cardsMap.prev[i]);
            let petCard = (new PetCard(petData,'pet-card--absolute')).generatePetCard();
            petCard.style.left = (this.calculateLeftPosition(i - this.numCardsInSlider)) + 'px';
            this.slider.prepend(petCard);
        }
    }

    addCurCards = () => {
        for (let i = 0; i < this.numCardsInSlider; i++) {
            const petData = this.getCardDataById(this.cardsMap.cur[i]);
            let petCard = (new PetCard(petData,'pet-card--absolute')).generatePetCard();
            petCard.style.left = this.calculateLeftPosition(i) + 'px';
            this.slider.append(petCard);
        }
    }

    addNextCards = () => {
        for (let i = 0; i < this.numCardsInSlider; i++) {
            const petData = this.getCardDataById(this.cardsMap.next[i]);
            let petCard = (new PetCard(petData,'pet-card--absolute')).generatePetCard();
            petCard.style.left = this.calculateLeftPosition(i + this.numCardsInSlider) + 'px';
            this.slider.append(petCard);
        }
    }

    slidePrev = () => {
        this.buttonPrev.removeEventListener('click', this.slidePrev);
        this.removeNextCards();
        this.updateCardsMapMovePrev();
        this.addPrevCards();
        this.updatePositionCards();
        setTimeout(() => {this.buttonPrev.addEventListener('click', this.slidePrev);}, 1000)
    }

    removeNextCards = () => {
        const allCards = document.querySelectorAll('.pet-card');
        for (let i = 0; i < this.numCardsInSlider; i++) {
            allCards[allCards.length - i - 1].remove();
        }
    }

    updateCardsMapMoveNext = () => {
        this.cardsMap.next = this.cardsMap.cur;
        this.cardsMap.cur = this.cardsMap.prev;
        this.cardsMap.prev = this.generateNewRandomArr(this.cardsMap.cur);
    }

    slideNext = () => {
        this.buttonNext.removeEventListener('click', this.slideNext);
        this.removePrevCards();
        this.updateCardsMapMoveNext();
        this.addNextCards();
        this.updatePositionCards();
        setTimeout(() => {this.buttonNext.addEventListener('click', this.slideNext);}, 1000)
    }

    removePrevCards = () => {
        const allCards = document.querySelectorAll('.pet-card');
        for (let i = 0; i < this.numCardsInSlider; i++) {
            allCards[i].remove();
        }
    }

    updateCardsMapMovePrev = () => {
        this.cardsMap.prev = this.cardsMap.cur;
        this.cardsMap.cur = this.cardsMap.next;
        this.cardsMap.next = this.generateNewRandomArr(this.cardsMap.cur);
    }

    updatePositionCards = () => {
        const allCards = document.querySelectorAll('.pet-card');
        allCards.forEach((card , i) => {
            card.style.left = this.calculateLeftPosition(i - this.numCardsInSlider) + 'px';
        })
    }

    getCountOfCards = () => {
        if (this.slider.clientWidth >= 830) return 3;
        if (this.slider.clientWidth >= 560) return 2;
        return 1;
    }

    addNewRandomNumInMap = (map, newLength) => {
        while (map.length < newLength) {
            let newNum = this.getRandomNaturalInt(8);
            if (!map.includes(newNum))
                map.push(newNum)
        }
    }

    changeCardsCountInSlider = (newCount) => {
        if (this.cardsMap.cur.length > newCount) {
            this.cardsMap.cur = this.cardsMap.cur.slice(0, newCount);
            this.cardsMap.next = this.generateNewRandomArr(this.cardsMap.cur);
            this.cardsMap.prev = this.generateNewRandomArr(this.cardsMap.cur);
        } else {
            this.addNewRandomNumInMap(this.cardsMap.cur, newCount);
            this.cardsMap.next = this.generateNewRandomArr(this.cardsMap.cur);
            this.cardsMap.prev = this.generateNewRandomArr(this.cardsMap.cur);
        }
    }

    checkSliderSize = () => {
        let newCountOfCards = this.getCountOfCards();
        if (newCountOfCards === this.numCardsInSlider) {
            this.updatePositionCards();
        } else {
            this.changeCardsCountInSlider(newCountOfCards);
            this.numCardsInSlider = newCountOfCards;
            this.drawCardsInSlider();
        }
    }
}