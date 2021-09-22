import { eventBus } from "../event-bus";

export default class ImageBlockController {
    constructor(imageBlockModel, imageBlockView) {
        this.imageBlockView = imageBlockView;
        this.imageBlockModel = imageBlockModel;
        
        eventBus.subscribe("makeImage", (obj) => {
            if (obj.photoIndex === this.imageBlockModel.index) {
                this.imageBlockView.renderImage(obj);
            }
        });
        
        this.imageBlockModel.getImageData();
    }
    
}