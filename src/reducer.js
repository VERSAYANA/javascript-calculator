import {
  NEW_INPUT,
  CHANGE_LOGIC,
  CHANGE_THEME,
  TOGGLE_DRAWER,
} from './actionTypes';
import calResult from './modules/calResult';
import isOperator from './modules/isOpreator';
import containDecimal from './modules/containDecimal';

// logic = true : Formula
// logic = false : Immediate
// theme = true : Dark
// theme = false : Light
const initialState = {
  input: '',
  result: 0,
  display: '0',
  logic: true,
  theme: true,
  drawer: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case NEW_INPUT:
      const lastCharIndex = state.input.length - 1;
      const lastChar = state.input.charAt(lastCharIndex);

      if (action.input === '=') {
        const result = calResult(state.input, state.logic);
        return {
          ...state,
          display: result,
          result: result,
        };
      } else if (action.input === 'AC') {
        return {
          ...state,
          input: '',
          display: '0',
        };
      } else if (isOperator(action.input)) {
        if (state.result === state.display) {
          return {
            ...state,
            input: `${state.result}${action.input}`,
          };
        }
        if (isOperator(lastChar)) {
          return {
            ...state,
            input: state.input.slice(0, lastCharIndex) + action.input,
            display: action.input,
          };
        }
        return {
          ...state,
          input: state.input + action.input,
          display: action.input,
        };
      } else if (action.input === '.') {
        if (
          containDecimal(state.display.toString()) ||
          isOperator(lastChar) ||
          state.result === state.display
        ) {
          return state;
        }
        return {
          ...state,
          input: state.input + action.input,
          display: state.display + action.input,
        };
      } else {
        if (state.display === '0') {
          return {
            ...state,
            input: action.input,
            display: action.input,
          };
        }
        if (isOperator(lastChar)) {
          return {
            ...state,
            input: state.input + action.input,
            display: action.input,
          };
        }
        return {
          ...state,
          input: state.input + action.input,
          display: state.display + action.input,
        };
      }

    case CHANGE_LOGIC:
      return {
        ...state,
        logic: action.logic,
      };

    case CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case TOGGLE_DRAWER:
      return {
        ...state,
        drawer: !state.drawer,
      };

    default:
      return state;
  }
}
