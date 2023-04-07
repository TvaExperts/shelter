import { PetCard } from './petCard';
import { petsArr } from './pets-data';
import { PetModal } from './PetModal';

export class Paginator {

    constructor() {
        this.paginator = document.querySelector('.all-pets__cards');

        this.buttonGoFirst = document.getElementById('paginator-go-first');
        this.buttonGoPrev = document.getElementById('paginator-go-prev');
        this.buttonCur = document.getElementById('paginator-cur');
        this.buttonGoNext = document.getElementById('paginator-go-next');
        this.buttonGoLast = document.getElementById('paginator-go-last');

        this.buttonGoFirst.addEventListener('click', this.goFirstPage);
        this.buttonGoNext.addEventListener('click', this.goNextPage);
        this.buttonGoPrev.addEventListener('click', this.goPrevPage);
        this.buttonGoLast.addEventListener('click', this.goLastPage);

        window.addEventListener('resize', this.checkPaginatorSize);

        this.numCardsInPage = this.getCountOfCards();
        this.pageCur = 1;
        this.cardsArray = [];
        this.generateCardsArray();
        this.paginator.addEventListener ('click', this.showCardModal);
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

    generateCardsArray = () => {
        this.cardsArray = [...this.generateArray24(), ...this.generateArray24()];
        console.log(this.cardsArray);
    }

    generateArray24 = () => {
        let newArr = [];
        for (let i = 1; i < 9; i++){
            newArr.push(i);
        }
        this.shuffleArray(newArr);
        newArr = newArr.concat(this.getRandomElementsFromArray(newArr.slice(0, 6), 4));
        newArr = newArr.concat(this.addMissingNumInArr(newArr.slice(8, 12)));
        newArr = newArr.concat(this.getRandomElementsFromArray(newArr.slice(8, 12), 2));
        newArr = newArr.concat(this.addMissingNumInArr(newArr.slice(16, 18)));
        return newArr;
    }

    addMissingNumInArr = (curArr) => {
        const newArr = [];
        while (newArr.length + curArr.length < 8) {
            let newNum = this.getRandomNaturalInt(8);
            if (!curArr.includes(newNum)&&!newArr.includes(newNum))
                newArr.push(newNum)
        }
        return newArr;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }

    getRandomElementsFromArray = (arr, count) => {
        let newArr = [];
        if (arr.length===count) return arr;
        while (newArr.length<count) {
            const index = Math.floor(Math.random() * arr.length);
            if (!newArr.includes(arr[index])) {
                newArr.push(arr[index]);
            }
        }
        return newArr;
    }

    getRandomNaturalInt = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }

    drawPaginator = () => {
        this.drawCardsInPaginator();
        this.updateButtonsState();

    }

    drawCardsInPaginator = () => {
        this.paginator.innerHTML = '';
        for (let i = 0; i < this.numCardsInPage; i++) {
            let index = (this.pageCur - 1) * this.numCardsInPage + i;
            let petData = this.getCardDataById(this.cardsArray[index])
            let petCard = (new PetCard(petData)).generatePetCard();
            this.paginator.append(petCard);
        }
    }

    getCountOfCards = () => {
        if (this.paginator.clientWidth > 1199) return 8;
        if (this.paginator.clientWidth > 579) return 6;
        return 3;
    }

    checkPaginatorSize = () => {
        let newCountOfCards = this.getCountOfCards();
        if (newCountOfCards != this.numCardsInPage) {
            this.numCardsInPage = newCountOfCards;
            if (this.pageCur > this.getCountOfPages()) {
                this.pageCur = this.getCountOfPages();
            }
            this.drawCardsInPaginator();
            this.updateButtonsState();
        }
    }

    goNextPage = () => {
        this.pageCur++;
        this.drawCardsInPaginator();
        this.updateButtonsState();
    }

    goPrevPage = () => {
        this.pageCur--;
        this.drawCardsInPaginator();
        this.updateButtonsState();
    }

    goFirstPage = () => {
        this.pageCur = 1;
        this.drawCardsInPaginator();
        this.updateButtonsState();
    }

    goLastPage = () => {
        this.pageCur = this.getCountOfPages();
        this.drawCardsInPaginator();
        this.updateButtonsState();
    }

    getCountOfPages = () => {
        return this.cardsArray.length / this.numCardsInPage;
    }

    updateButtonsState = () => {
        this.buttonCur.innerHTML = this.pageCur;
        if (this.pageCur === 1)
        {
            this.buttonGoFirst.classList.add('button-nav--inactive');
            this.buttonGoPrev.classList.add('button-nav--inactive');
        } else {
            this.buttonGoFirst.classList.remove('button-nav--inactive');
            this.buttonGoPrev.classList.remove('button-nav--inactive');
        }
        if (this.pageCur === this.getCountOfPages())
        {
            this.buttonGoNext.classList.add('button-nav--inactive');
            this.buttonGoLast.classList.add('button-nav--inactive');
        } else {
            this.buttonGoNext.classList.remove('button-nav--inactive');
            this.buttonGoLast.classList.remove('button-nav--inactive');
        }
    }
}