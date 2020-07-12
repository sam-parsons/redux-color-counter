import * as types from "./actionTypes";

export const changeColor = newColor => ({
  type: types.CHANGE_COLOR,
  payload: newColor
});

export const increment = () => ({
  type: types.INCREMENT,
  payload: null
})