import { eventBus } from "../event-bus";

export default class ImageBlockModel {
    constructor(imageObj, index) {
        this.imageObj = imageObj;
        this.index = index;
    }

    getImageData = () => {        
        this.imageObj.photoIndex = this.index; 
        eventBus.publish("makeImage", this.imageObj);
    }

}