import { combineReducers } from 'redux'

import { CHANGE_COLOR, INCREMENT, DECREMENT, RESET_COUNTER } from '../actions/actionTypes';

const initialState = {
  counter: 0,
  colors: {
    colorsAvailable: ['red', 'white', 'blue'],
    currentColor : 'red',
  }
}

function colors(state = initialState.colors, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        currentColor: action.payload
      }
    default:
      return state
  }
}

function counter(state = initialState.counter, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case RESET_COUNTER:
      return 0;
    default:
      return state
  }
}

export default combineReducers({colors, counter})