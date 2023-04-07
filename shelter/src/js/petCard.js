export class PetCard {
    constructor({ id, name, urlToImage, ...rest }, classesAd='') {
        this.id = id;
        this.name = name;
        this.urlToImage = urlToImage;
        this.classesAd = classesAd;
    }

    generatePetCard() {
        let template = '';
        let petCard = document.createElement('div');
        petCard.className = 'pet-card';
        if (this.classesAd) {
            petCard.classList.add(this.classesAd);
        }
        petCard.setAttribute('data-id', this.id);

        this.urlToImage &&
        (template += `<img class="pet-card__img" src=${this.urlToImage} alt=${this.name}>`)

        if (this.name) {
            template += `<p class="pet-card__name">${this.name}</p>`;
            template += `<span class="button button--light">Learn more</span>`;
        }
        petCard.innerHTML = template;
        return petCard;
    }
}
