import Presenter from './presenter.js';

/**
 * @extends {Presenter<BriefView>}
 */
class BriefPresenter extends Presenter {
  /**
   * @override
   * @return {BriefViewState}
   */
  createViewState() {
    // TODO: создать динамически

    return {
      places: 'Amsterdam — Chamonix — Geneva',
      dates: 'Mar 18 — 25',
      cost: '1270'
    };
  }
}

export default BriefPresenter;
