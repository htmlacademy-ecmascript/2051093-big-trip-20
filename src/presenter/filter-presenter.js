/* eslint-disable no-return-assign */
import Presenter from './presenter.js';

/**
 * @extends {Presenter<FilterView>}
 */
class FilterPresenter extends Presenter {
  /**
   * @override
   * @return {FilterViewState}
   */
  createViewState() {
    // TODO: FilterViewState
    /**
     * @type {Array<FilterType>}
     */
    const types = ['everything', 'future', 'present', 'past'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === 'future',
      isDisabled: it === 'everything'
    }));

    return {items};
  }
}

export default FilterPresenter;
