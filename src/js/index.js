import '../css/style.css';

import ListModel from './list/list-model';
import ListView from './list/list-view';
import ListController from './list/list-controller';

import DialogModel from "./dialog/dialog-model";
import DialogView from './dialog/dialog-view';
import DialogController from './dialog/dialog-controller';

const faker = require('faker');
const arr = new Array(faker.datatype.number({ min: 6, max: 6 })).fill();
const imagesCollection = arr.map(() =>
({
    imageURL: faker.image.avatar(),
    likesQty: faker.datatype.number({ min: 1, max: 10 })
}
));

const dialogModel = new DialogModel();
const dialogView = new DialogView(document.querySelector('.modal'));
const dialogController = new DialogController(dialogModel, dialogView);

const listModel = new ListModel(imagesCollection);
const listView = new ListView(document.querySelector('.row'));
const listController = new ListController(listModel, listView);


