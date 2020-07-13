// actionCreators.js

import * as types from "./actionTypes";

export const changeColor = newColor => ({
  type: types.CHANGE_COLOR,
  payload: newColor
});

export const increment = () => ({
  type: types.INCREMENT,
  payload: null
});

export const decrement = () => ({
  type: types.DECREMENT,
  payload: null
});

export const resetCounter = () => ({
  type: types.RESET_COUNTER,
  payload: null
});

