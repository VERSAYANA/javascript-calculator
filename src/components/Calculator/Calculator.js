import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newInput } from '../../actions';
import './Calculator.css';
import Display from '../Display/Display';
import Board from '../Board/Board';

class Calculator extends Component {
  render() {
    const { input, newInput, display } = this.props;

    return (
      <div id="calculator">
        <Display value={display} input={input} />
        <Board newInput={newInput} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
  display: state.display,
});
const mapDispatchToProps = (dispatch) => ({
  newInput: (input) => dispatch(newInput(input)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
