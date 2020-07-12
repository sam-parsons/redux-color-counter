import { combineReducers } from 'redux'

import { CHANGE_COLOR, INCREMENT } from '../actions/actionTypes';

const initialState = {
  counter: 0,
  colors: {
    colors: ['red', 'white', 'blue'],
    currentColor : 'red',
  }
}

function colors(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        ...state,
        colors: {
          ...state.colors,
          currentColor: action.payload
        }
      }
    default:
      return state
  }
}

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      }
    default:
      return state
  }
}

export default combineReducers({colors, counter})