import { eventBus } from "../event-bus";

export default class DialogController {
  constructor(dialogModel, dialogView) {
    this.dialogView = dialogView;
    this.dialogModel = dialogModel;
    this.dialogView.addModalBehavior();
    eventBus.subscribe("openModal", this.dialogView.openModal);
    eventBus.subscribe("getImageIndex", this.dialogModel.getCurrentIndex);
    eventBus.subscribe("showModalContent", this.dialogView.showModalContent);
  }
}