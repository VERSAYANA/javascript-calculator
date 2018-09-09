import { NEW_INPUT, CHANGE_LOGIC, CHANGE_THEME } from './actionTypes';
import calResult from './modules/calResult';
import isOperator from './modules/isOpreator';

// logic = true : Formula
// logic = false : Immediate
// theme = true : Dark
// theme = false : Light
const initialState = {
  input: '',
  result: 0,
  display: '',
  logic: true,
  theme: true,
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
          theme: state.theme,
        };
      }

      if (action.input === '=') {
        return {
          input: state.input + action.input,
          result: calResult(state.input, state.logic),
          display: calResult(state.input, state.logic),
          logic: state.logic,
          theme: state.theme,
        };
      }

      if (isOperator(action.input)) {
        if (isOperator(lastChar)) {
          return {
            input: state.input.slice(0, lastCharIndex) + action.input,
            result: state.result,
            display: action.input,
            logic: state.logic,
            theme: state.theme,
          };
        }

        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
          logic: state.logic,
          theme: state.theme,
        };
      }

      if (lastChar === '=') {
        return {
          input: action.input,
          result: 0,
          display: action.input,
          logic: state.logic,
          theme: state.theme,
        };
      }

      if (isOperator(lastChar)) {
        return {
          input: state.input + action.input,
          result: state.result,
          display: action.input,
          logic: state.logic,
          theme: state.theme,
        };
      }

      if (state.display == 0) {
        return {
          input: action.input,
          result: 0,
          display: action.input,
          logic: state.logic,
          theme: state.theme,
        };
      }

      return {
        input: state.input + action.input,
        result: state.result,
        display: state.display + action.input,
        logic: state.logic,
        theme: state.theme,
      };

    case CHANGE_LOGIC:
      return {
        ...state,
        logic: action.logic,
      };

    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      }

    default:
      return state;
  }
}
