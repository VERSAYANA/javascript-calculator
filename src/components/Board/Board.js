import React from 'react';
import './Board.css';

const Board = () => {
  return (
    <div id="board">
      <div id="numbers">
        <div id="one" className="button">
          1
        </div>
        <div id="two" className="button">
          2
        </div>
        <div id="three" className="button">
          3
        </div>
        <div id="four" className="button">
          4
        </div>
        <div id="five" className="button">
          5
        </div>
        <div id="six" className="button">
          6
        </div>
        <div id="seven" className="button">
          7
        </div>
        <div id="eight" className="button">
          8
        </div>
        <div id="nine" className="button">
          9
        </div>
        <div id="decimal" className="button">
          .
        </div>
        <div id="zero" className="button">
          0
        </div>
        <div id="equal" className="button">
          =
        </div>
      </div>
      <div id="oprators">
        <div id="clear" className="button">
          AC
        </div>
        <div id="divide" className="button">
          /
        </div>
        <div id="multiply" className="button">
          &times;
        </div>
        <div id="subtract" className="button">
          -
        </div>
        <div id="add" className="button">
          +
        </div>
      </div>
    </div>
  );
};

export default Board;
