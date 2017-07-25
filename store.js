import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initialState = {
  text: '',
  links: [],
  length: 0,
  display: false,
  activePage: 1,
  from: 0,
  to: 10
}

export const reducer = (state = initialState, action ) => {
  if (action.type === 'SEARCH_WORD') {
    return Object.assign({}, state, { text: action.text, display: action.display });
  } else if (action.type === 'RESULT') {
    return Object.assign({}, state, { links: action.links, length: action.length });
  } else if (action.type === 'CHANGE_PAGE') {
    return Object.assign({}, state, {activePage: action.activePage, from: action.from, to: action.to })
  }
  return state;
}


// ACTIONS
export const inputChange = text => dispatch => {
  return dispatch ({ type: 'SEARCH_WORD', text, display: false })
}

export const search = (text, from, to) => dispatch => {
  return axios.get(`https://news-spotter.herokuapp.com/api/search/${text}/?from=${from}&to=${to}`)
  .then(response => {
    dispatch ({ type: 'RESULT', links: response.data.links, length: response.data.length })
  })
}

export const paginationSelect = page => dispatch => {
  return dispatch ({ type: 'CHANGE_PAGE', activePage: page, from: ((10 * page) -10), to: (10 * page) })
}


export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}