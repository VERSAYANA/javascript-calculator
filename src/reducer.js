import { NEW_INPUT, CALCULATE_RESULT, CLEAR } from './actionTypes';

const initialState = {
  input: '',
  result: '',
};
export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      return {
        input: state.input + action.input,
        result: state.result
      }
      break;

    // case CALCULATE_RESULT:

    //   break;

    case CLEAR:
      return {
        input: '',
        result: 0
      }
      break;

    default:
      return state
  }
}
