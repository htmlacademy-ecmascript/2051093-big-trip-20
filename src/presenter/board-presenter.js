import { render } from '../render';
import BoardView from '../view/board-view';
import EditFormView from '../view/edit-form-view';
import PointView from '../view/point-view';

const ITES_COUNT = 3;

export default class BoardPresenter {
  boardComponent = new BoardView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.boardComponent, this.boardContainer);

    render(new EditFormView(), this.boardComponent.getElement());

    for (let i = 0; i < ITES_COUNT; i++) {
      render (new PointView(), this.boardComponent.getElement());
    }
  }
}
