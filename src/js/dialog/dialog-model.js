import {eventBus} from "../event-bus";

export default class DialogModel {
  constructor () {
    
  }

   getCurrentIndex = (index) => {
       this.index = index;
       eventBus.publish("getImageData", this.index);
   }
}