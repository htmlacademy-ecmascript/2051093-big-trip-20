import './view/brief-view.js';
import './view/add-view.js';
import './view/filter-view.js';
import './view/sort-view.js';
import './view/list-view.js';

/**
 * @type {BriefView}
 */
const briefView = document.querySelector('brief-view');

/**
 * @type {AddView}
 */
const addView = document.querySelector('add-view');

/**
 * @type {FilterView}
 */
const filterView = document.querySelector('filter-view');

/**
 * @type {SortView}
 */
const sortView = document.querySelector('sort-view');

/**
 * @type {ListView}
 */
const listView = document.querySelector('list-view');

briefView.render();
addView.render();
filterView.render();
sortView.render();
listView.render();
