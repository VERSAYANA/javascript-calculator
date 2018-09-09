import { NEW_INPUT, CHANGE_LOGIC } from './actionTypes';

// export const clear = () => ({ type: CLEAR });
// export const calculateResult = () => ({ type: CALCULATE_RESULT });
export const newInput = (input) => ({ type: NEW_INPUT, input });
export const changeLogic = (logic) => ({ type: CHANGE_LOGIC, logic })
