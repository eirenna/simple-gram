import { eventBus } from "../event-bus";

export default class ListController {
    constructor(listModel, listView) {
        this.listView = listView;
        this.listModel = listModel;

        eventBus.subscribe("buildList", this.listView.renderList);
        eventBus.subscribe("encreaseLikeCounter", this.listModel.encreaseLikeCounter);
        eventBus.subscribe("getImageData", this.listModel.getImageByIndex);

        eventBus.subscribe("rebuildList", this.listModel.getData);
        
        this.listModel.getData();
    }
}