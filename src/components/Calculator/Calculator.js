import React from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import Display from '../Display/Display';
import Board from '../Board/Board';

const Calculator = ({ input, display, newInput }) => {
  return (
    <div id="calculator">
      <Display value={display} input={input} />
      <Board newInput={newInput} />
    </div>
  );
};

Calculator.propTypes = {
  input: PropTypes.string,
  display: PropTypes.string,
  newInput: PropTypes.func,
};

export default Calculator;
