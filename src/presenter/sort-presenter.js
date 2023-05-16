import Presenter from './presenter.js';

/**
 * @extends {Presenter<SortView>}
 */
class SortPresenter extends Presenter {
  /**
   * @override
   * @return {SortViewState}
   */
  createViewState() {
    /**
     * @type {Array<SortType>}
     */
    const types = ['day', 'event', '', 'price', 'offers'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === 'price',
      isDisabled: it === 'event' || it === 'offers'
    }));

    return {items};
  }
}

export default SortPresenter;
