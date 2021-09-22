import { eventBus } from "../event-bus";

export default class DialogView {
    constructor(element) {
        this.element = element;
    }

    showModalContent = (object) => {
        const modalImg = this.element.querySelector('.photo__img');
        const modalLike = this.element.querySelector('.photo__likes-qty');

        this.element.setAttribute('data-photo-index', object.photoIndex);

        modalImg.setAttribute('src', object.imageURL);
        modalLike.textContent = object.likesQty;

        const prevPhoto = this.element.querySelector('#prev-photo');
        const nextPhoto = this.element.querySelector('#next-photo');

        let nextPhotoIndex = object.photoIndex + 1 === object.cardsQty ? 0 : object.photoIndex + 1;
        let prevPhotoIndex = object.photoIndex === 0 ? object.cardsQty - 1 : object.photoIndex - 1;

        nextPhoto.setAttribute('data-index', nextPhotoIndex);
        prevPhoto.setAttribute('data-index', prevPhotoIndex);
    }

    addModalBehavior = () => {
        const closeBtn = this.element.querySelector('.modal__close');
        const prevPhoto = this.element.querySelector('#prev-photo');
        const nextPhoto = this.element.querySelector('#next-photo');
        const likeBtn = this.element.querySelector('.photo__like');

        closeBtn.addEventListener('click', this.closeModal);

        prevPhoto.addEventListener('click', function () {
            let index = prevPhoto.dataset.index;
            eventBus.publish("getImageData", index);
        });

        nextPhoto.addEventListener('click', function () {
            let index = nextPhoto.dataset.index;
            eventBus.publish("getImageData", index);
        });
        
        likeBtn.addEventListener('click', function(e) {
            let likesTextBlock = e.target.nextElementSibling;
            likesTextBlock.textContent = +likesTextBlock.textContent + 1;
            eventBus.publish("encreaseLikeCounter", document.querySelector('.modal').dataset.photoIndex);
        });

    }

    openModal = () => {
        this.element.classList.add('modal--opened');
    }

    closeModal() {
        document.querySelector('.modal').classList.remove('modal--opened');
        eventBus.publish("rebuildList", '');
    }
}