import { eventBus } from "../event-bus";

export default class LikeView {
    constructor() {
        this.likeTemplate = document.getElementById('likes-block-template').innerHTML;
    }

    renderLikes = (imgObject) => {
        let currentContainer = document.querySelector(`.col[data-photo-index='${imgObject.photoIndex}']`);

        let likeContainer = currentContainer.querySelector('.photo__controls');

        likeContainer.innerHTML = this.likeTemplate; 
    }      
    
}