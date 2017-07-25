'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = exports.paginationSelect = exports.search = exports.inputChange = exports.reducer = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  text: '',
  links: [],
  length: 0,
  display: false,
  activePage: 1,
  from: 0,
  to: 10
};

var reducer = exports.reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  if (action.type === 'SEARCH_WORD') {
    return (0, _assign2.default)({}, state, { text: action.text, display: action.display });
  } else if (action.type === 'RESULT') {
    return (0, _assign2.default)({}, state, { links: action.links, length: action.length });
  } else if (action.type === 'CHANGE_PAGE') {
    return (0, _assign2.default)({}, state, { activePage: action.activePage, from: action.from, to: action.to });
  }
  return state;
};

// ACTIONS
var inputChange = exports.inputChange = function inputChange(text) {
  return function (dispatch) {
    return dispatch({ type: 'SEARCH_WORD', text: text, display: false });
  };
};

var search = exports.search = function search(text, from, to) {
  return function (dispatch) {
    return _axios2.default.get('https://news-spotter.herokuapp.com/api/search/' + text + '/?from=' + from + '&to=' + to).then(function (response) {
      dispatch({ type: 'RESULT', links: response.data.links, length: response.data.length });
    });
  };
};

var paginationSelect = exports.paginationSelect = function paginationSelect(page) {
  return function (dispatch) {
    return dispatch({ type: 'CHANGE_PAGE', activePage: page, from: 10 * page - 10, to: 10 * page });
  };
};

var initStore = exports.initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  return (0, _redux.createStore)(reducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};