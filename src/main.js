import BoardPresenter from './presenter/board-presenter';
import {RenderPosition, render} from './render';
import FilterView from './view/filter-view';
import SortView from './view/sort-view';
import TripInfoView from './view/trip-info-view';

const tripInfoContainer = document.querySelector('.trip-main');
const filtersContainer = document.querySelector('.trip-controls__filters');
const sortContainer = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter({boardContainer: sortContainer});

render(new FilterView(), filtersContainer);
render(new TripInfoView(), tripInfoContainer, RenderPosition.AFTERBEGIN);
render(new SortView(), sortContainer);

boardPresenter.init();
