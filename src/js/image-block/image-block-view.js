import { eventBus } from "../event-bus";
import LikeModel from "../like/like-model";
import LikeView from '../like/like-view';
import LikeController from '../like/like-controller';

export default class ImageBlockView {
    constructor() {
        this.imageTemplate = document.getElementById('list-item-template').innerHTML;
    }

    renderImage = (imageDataObj) => {        
        let imageContainer = document.querySelector('.col:last-child');
        imageContainer.innerHTML = '';
        imageContainer.innerHTML = this.imageTemplate
            .replace(/{{imageURL}}/ig, imageDataObj.imageURL);
        let image = imageContainer.querySelector('.photo__img');

        let likeModel = new LikeModel(imageDataObj);
        let likeView = new LikeView();
        let likeController = new LikeController(likeModel, likeView);

        let likesQty = imageContainer.querySelector('.photo__likes-qty');
        likesQty.textContent = imageDataObj.likesQty;

        imageContainer.addEventListener('click', (e) => {
            let currentIndex = e.target.closest('.col').dataset.photoIndex;

            if (e.target.classList.contains('photo__img')) {
                eventBus.publish("openModal", '');
                eventBus.publish("getImageIndex", currentIndex);
            }

            if (e.target.classList.contains('photo__like')) {
                eventBus.publish("encreaseLikeCounter", currentIndex);
            }
        });
    }

}