import {
  NEW_INPUT,
  CHANGE_LOGIC,
  CHANGE_THEME,
  TOGGLE_DRAWER,
} from './actionTypes';

export const newInput = (input) => ({ type: NEW_INPUT, input });
export const changeLogic = (logic) => ({ type: CHANGE_LOGIC, logic });
export const changeTheme = (theme) => ({ type: CHANGE_THEME, theme });
export const toggleDrawer = () => ({ type: TOGGLE_DRAWER });
