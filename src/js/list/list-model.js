import { eventBus } from "../event-bus";

export default class ListModel {
  constructor(imagesArray) {
      this.imagesArray = imagesArray;
  }

  getData = () => {
    eventBus.publish("buildList", this.imagesArray);
  }

  encreaseLikeCounter = (index) => {
      this.imagesArray[index].likesQty = this.imagesArray[index].likesQty + 1;
      
      if (document.querySelector('.modal--opened')) {
          return;
      } else {          
          this.getData();
      }      
  }

    getImageByIndex = (index) => {
        let targetImage = this.imagesArray[index];
        targetImage.cardsQty = this.imagesArray.length;
        
        eventBus.publish("showModalContent", targetImage);
    }
}