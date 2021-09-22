import { eventBus } from "../event-bus";

export default class LikeController {
    constructor(likeModel, likeView) {
        this.likeView = likeView;
        this.likeModel = likeModel;
        
        eventBus.subscribe("showLikes", (obj) => {            
            if (obj.photoIndex === this.likeModel.imageObj.photoIndex) {
                this.likeView.renderLikes(obj);
            }
        });        

        this.likeModel.getLikes();
    }

}