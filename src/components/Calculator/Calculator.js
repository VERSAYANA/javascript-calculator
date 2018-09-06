import React, { Component } from 'react';
import './Calculator.css';
import Display from '../Display/Display';
import Board from '../Board/Board';

class Calculator extends Component {
  render() {
    return (
      <div id="calculator">
        <Display />
        <Board />
      </div>
    );
  }
}

export default Calculator;
