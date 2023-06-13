import './view/brief-view.js';
import './view/add-view.js';
import './view/filter-view.js';
import './view/sort-view.js';
import './view/list-view.js';
import './view/placeholder-view.js';

import ApiService from './services/api-service.js';
import AppModel from './models/app-model.js';
import BriefPresenter from './presenter/brief-presenter.js';
import AddPresenter from './presenter/add-presenter.js';
import FilterPresenter from './presenter/filter-presenter.js';
import SortPresenter from './presenter/sort-presenter.js';
import ListPresenter from './presenter/list-presenter.js';
import PlaceholderPresenter from './presenter/placeholder-presenter.js';

const apiService = new ApiService({authorization: 'Basic goy5g4oyg78'});
const appModel = new AppModel(apiService);

new PlaceholderPresenter(document.querySelector('placeholder-view'), appModel);

appModel.load().then(() => {
  new BriefPresenter(document.querySelector('brief-view'));
  new AddPresenter(document.querySelector('add-view'));
  new FilterPresenter(document.querySelector('filter-view'));
  new SortPresenter(document.querySelector('sort-view'));
  new ListPresenter(document.querySelector('list-view'), appModel);
});
