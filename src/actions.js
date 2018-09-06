import { CLEAR, CALCULATE_RESULT, NEW_INPUT } from './actionTypes';

export const clear = () => ({ type: CLEAR });
export const calculateResult = () => ({ type: CALCULATE_RESULT });
export const newInput = (input) => ({ type: NEW_INPUT, input });
