import React, { Component } from 'react';
import { connect } from 'react-redux';
import { clear, calculateResult, newInput } from '../../actions';
import './Calculator.css';
import Display from '../Display/Display';
import Board from '../Board/Board';

class Calculator extends Component {
  render() {
    const { input, result, clear, calculateResult, newInput } = this.props;
    return (
      <div id="calculator">
        <Display input={input} result={result} />
        <Board
          clear={clear}
          calculateResult={calculateResult}
          newInput={newInput}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
});
const mapDispatchToProps = (dispatch) => ({
  clear: () => dispatch(clear()),
  calculateResult: () => dispatch(calculateResult()),
  newInput: (input) => dispatch(newInput(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
