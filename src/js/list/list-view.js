import ImageBlockModel from "../image-block/image-block-model";
import ImageBlockView from '../image-block/image-block-view';
import ImageBlockController from '../image-block/image-block-controller';
import { eventBus } from "../event-bus";


export default class ListView {
    constructor(listContainer) {
        this.listContainer = listContainer;
    }

    sort(array) {
        array.sort((a, b) => a.likesQty > b.likesQty ? -1 : 1);
    }

    renderList = (imagesArray) => {
        this.listContainer.innerHTML = "";
        this.sort(imagesArray);  

        imagesArray.forEach((item, index) => {
            let newImageContainer = document.createElement('div');
            newImageContainer.classList.add('col');
            newImageContainer.setAttribute('data-photo-index', index);
            this.listContainer.appendChild(newImageContainer);            

            const imageBlockModel = new ImageBlockModel(item, index);
            const imageBlockView = new ImageBlockView();
            const imageBlockController = new ImageBlockController(imageBlockModel, imageBlockView);           
        });
    }
}