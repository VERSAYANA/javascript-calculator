import { NEW_INPUT } from './actionTypes';
import calResult from './modules/calResult';
import isOperator from './modules/isOpreator';

const initialState = {
  input: '',
  result: 0,
  display: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      const lastCharIndex = state.input.length - 1;
      const lastChar = state.input.charAt(lastCharIndex);

      if (isOperator(action.input)) {
        if (isOperator(lastChar)) {
          return {
            input: state.input.slice(0, lastCharIndex) + action.input,
            result: state.result,
            display: action.input,
          };
        }

        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
        };
      }

      if (action.input === 'AC') {
        return {
          input: '',
          result: 0,
          display: 0,
        };
      }

      if (action.input === '=') {
        return {
          input: state.input,
          result: calResult(state.input),
          display: calResult(state.input),
        };
      }

      if (isOperator(lastChar)) {
        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
        };
      }

      if (state.display == 0) {
        return {
          input: action.input,
          result: 0,
          display: action.input
        }
      }

      if (state.result > 0 && state.result === state.display) {
        return {
          input: action.input,
          result: 0,
          display: action.input
        }
      }

      return {
        input: state.input + action.input,
        result: state.result,
        display: state.display + action.input,
      };

    default:
      return state;
  }
}
