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
        petCard.className = 'card';
        petCard.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="card-img" src=${this.urlToImage} alt=${this.name}>`)

        if (this.name) {
            template += `<p class="card-name">${this.name}</p>`;
            template += `<button class="button button-light">Learn more</button>`;
        }
        petCard.innerHTML = template;
        return petCard;
    }
}