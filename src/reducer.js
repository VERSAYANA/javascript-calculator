import { NEW_INPUT, CHANGE_LOGIC } from './actionTypes';
import calResult from './modules/calResult';
import isOperator from './modules/isOpreator';

// logic = true : Formula
// logic = false : Immediate
const initialState = {
  input: '',
  result: 0,
  display: '',
  logic: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      const lastCharIndex = state.input.length - 1;
      const lastChar = state.input.charAt(lastCharIndex);

      if (action.input === 'AC') {
        return {
          input: '',
          result: 0,
          display: 0,
          logic: state.logic,
        };
      }

      if (action.input === '=') {
        return {
          input: state.input + action.input,
          result: calResult(state.input, state.logic),
          display: calResult(state.input, state.logic),
          logic: state.logic,
        };
      }

      if (isOperator(action.input)) {
        if (isOperator(lastChar)) {
          return {
            input: state.input.slice(0, lastCharIndex) + action.input,
            result: state.result,
            display: action.input,
            logic: state.logic,
          };
        }

        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
          logic: state.logic,
        };
      }

      if (lastChar === '=') {
        return {
          input: action.input,
          result: 0,
          display: action.input,
          logic: state.logic,
        };
      }

      if (isOperator(lastChar)) {
        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
          logic: state.logic,
        };
      }

      if (state.display == 0) {
        return {
          input: action.input,
          result: 0,
          display: action.input,
          logic: state.logic,
        };
      }

      return {
        input: state.input + action.input,
        result: state.result,
        display: state.display + action.input,
        logic: state.logic,
      };

    case CHANGE_LOGIC:
      return {
        ...state,
        logic: action.logic
      }

    default:
      return state;
  }
}
