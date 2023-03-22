export class PetCard {
    constructor({ id, name, urlToImage, ...rest }) {
        this.id = id;
        this.name = name;
        this.urlToImage = urlToImage;
    }

    // generator
    generatePetCard() {
        let template = '';
        let petCard = document.createElement('petCard');
        petCard.className = 'pet-card';
        petCard.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="pet-card__img" src=${this.urlToImage} alt=${this.name}>`)

        if (this.name) {
            template += `<p class="pet-card__name">${this.name}</p>`;
            template += `<a class="button button_light" href="https://ya.ru" target="_blank">Learn more</a>`;
        }
        petCard.innerHTML = template;
        return petCard;
    }
}