import { eventBus } from "../event-bus";

export default class LikeModel {
    constructor(imageObj) {
        this.imageObj = imageObj;
    }

    getLikes() {
        eventBus.publish("showLikes", this.imageObj);
    }
}