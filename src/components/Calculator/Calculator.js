import React from 'react';
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

export default Calculator;
