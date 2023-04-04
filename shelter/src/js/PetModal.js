export class PetModal {
    constructor({id, name, urlToImage500, bleed, description, age, inoculations, diseases, parasites}) {
        this.id = id;
        this.name = name;
        this.urlToImage500 = urlToImage500;
        this.bleed = bleed;
        this.description = description;
        this.age = age;
        this.inoculations = inoculations;
        this.diseases = diseases;
        this.parasites = parasites;
    }


    buildModal() {
        const overlay = this.createDomNode('div', 'overlay')
        const modal = this.createDomNode('div', 'pet-modal');
        const modalCloseButton = this.createDomNode('span', 'pet-modal__close-button');
        modal.appendChild(modalCloseButton);
        const modalContainer = this.generateModalContent();
        modal.appendChild(modalContainer);
        overlay.appendChild(modal);
        overlay.addEventListener('click', this.closeModal);
        document.body.append(overlay);
        document.body.classList.add('disable-scroll');
    }

    generateModalContent () {

        const container = this.createDomNode('div', 'pet-modal__container');
        const img = this.createDomNode('div', 'pet-modal__img');
        img.innerHTML = `<img src="${this.urlToImage500}" alt="${this.name}">`
        container.appendChild(img);
        const content = this.createDomNode('div', 'pet-modal__content');
        const name = this.createDomNode('h2', 'pet-modal__name');
        name.innerHTML = `${this.name}`;
        content.appendChild(name);
        const bleed = this.createDomNode('h3', 'pet-modal__bleed');
        bleed.innerHTML = `${this.bleed}`;
        content.appendChild(bleed);
        const description = this.createDomNode('h4', 'pet-modal__description');
        description.innerHTML = `${this.description}`;
        content.appendChild(description);

        const propertiesList = this.createDomNode('ul', 'pet-modal__properties-list');
        let propertiesItem = this.createDomNode('li', 'pet-modal__properties-item');
        propertiesItem.innerHTML = `<span>Age:</span> ${this.age}`;
        propertiesList.appendChild(propertiesItem.cloneNode(propertiesItem));
        propertiesItem.innerHTML = `<span>Inoculations:</span> ${this.inoculations}`;
        propertiesList.appendChild(propertiesItem.cloneNode(propertiesItem));
        propertiesItem.innerHTML = `<span>Diseases:</span> ${this.diseases}`;
        propertiesList.appendChild(propertiesItem.cloneNode(propertiesItem));
        propertiesItem.innerHTML = `<span>Parasites:</span> ${this.parasites}`;
        propertiesList.appendChild(propertiesItem);

        content.appendChild(propertiesList);
        container.appendChild(content);
        return container;
    }


    createDomNode (element, ...classes) {
        const node = document.createElement(element);
        node.classList.add(...classes);
        return node;
    }

    closeModal(e) {
        let classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('pet-modal__close-button')) {
            document.querySelector('.overlay').remove();
            document.body.classList.remove('disable-scroll');
        }
    }

}
