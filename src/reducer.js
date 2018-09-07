import { NEW_INPUT, CALCULATE_RESULT, CLEAR } from './actionTypes';
import calResult from './modules/calResult';

const initialState = {
  input: '',
  result: '',
};
const isOperator = (char) => {
  if (char === '+' || char === '-' || char === 'x' || char === '/') {
    return true;
  }
  return false;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      const lastCharIndex = state.input.length - 1;
      const lastChar = state.input.charAt(lastCharIndex);

      if (isOperator(action.input) && isOperator(lastChar)) {
        return {
          input: state.input.slice(0, lastCharIndex) + action.input,
          result: state.result,
        };
      }

      if (action.input === 'AC') {
        return {
          input: '',
          result: 0,
        };
      }
    

      if (action.input === '=') {
        console.log(calResult(state.input));
        return {
          input: state.input,
          result: calResult(state.input)
        }
      }

      return {
        input: state.input + action.input,
        result: state.result,
      };
      break;

    // case CALCULATE_RESULT:

    //   break;

    // case CLEAR:
    //   return {
    //     input: '',
    //     result: 0,
    //   };
    //   break;

    default:
      return state;
  }
}
