/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/our-pets.scss":
/*!********************************!*\
  !*** ./src/sass/our-pets.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/petCard.js":
/*!***************************!*\
  !*** ./src/js/petCard.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetCard": () => (/* binding */ PetCard)
/* harmony export */ });
class PetCard {
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

/***/ }),

/***/ "./src/js/pets-data.js":
/*!*****************************!*\
  !*** ./src/js/pets-data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "petsArr": () => (/* binding */ petsArr)
/* harmony export */ });
const petsArr = [
    {
        id: 1,
        urlToImage: './assets/katrine.jpg',
        name: 'Katrine',
        bleed: 'Cat - British Shorthair',
        content: `Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.`,
        age: '3 years',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 2,
        urlToImage: './assets/jennifer.jpg',
        name: 'Jennifer',
        bleed: 'Dog - Labrador',
        content: `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,
        age: '2 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 3,
        urlToImage: './assets/woody.jpg',
        name: 'Woody',
        bleed: 'Dog - Golden Retriever',
        content: `Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.`,
        age: '3 years',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 4,
        urlToImage: './assets/sophia.jpg',
        name: 'Sophia',
        bleed: 'Dog - Shih tzu ',
        content: `Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.`,
        age: '2 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 5,
        urlToImage: './assets/timmy.jpg',
        name: 'Timmy',
        bleed: 'Cat - British Shorthair',
        content: `Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.`,
        age: '4 years',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 6,
        urlToImage: './assets/charly.jpg',
        name: 'Charly',
        bleed: 'Dog - Jack Russell Terrier',
        content: 'This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.',
        age: '3 years',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 7,
        urlToImage: './assets/scarlett.jpg',
        name: 'Scarlett',
        bleed: 'Dog - Jack Russell Terrier',
        content: `Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.`,
        age: '2 years',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    },
    {
        id: 8,
        urlToImage: './assets/freddie.jpg',
        name: 'Freddie',
        bleed: 'Cat - British Shorthair',
        content: `Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.`,
        age: '4 months',
        inoculations: 'none',
        diseases: 'none',
        parasites: 'none'
    }
];



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/pets.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_our_pets_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/our-pets.scss */ "./src/sass/our-pets.scss");
/* harmony import */ var _js_petCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/petCard */ "./src/js/petCard.js");
/* harmony import */ var _js_pets_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/pets-data */ "./src/js/pets-data.js");





window.onload = function () {

    renderPetCardsToDom();

}






const getPetsPaginator = () => {
    const paginator = document.querySelector('.pets-paginator');
    paginator.innerHTML = '';
    return paginator;
}

const renderPetCardsToDom = () => {
    let paginator = getPetsPaginator();
    generatePetCards(_js_pets_data__WEBPACK_IMPORTED_MODULE_2__.petsArr).forEach(petData => {
        paginator.append(petData.generatePetCard())
    })
}

const generatePetCards = (data) => {
    let petCards = [];
    data.forEach(petData => {
        petCards.push(new _js_petCard__WEBPACK_IMPORTED_MODULE_1__.PetCard(petData))
    });
    return petCards;
}


})();

/******/ })()
;
//# sourceMappingURL=pets.js.map