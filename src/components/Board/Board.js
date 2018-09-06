import React from 'react';
import './Board.css';
import CalButton from '../CalButton/CalButton';

const Board = () => {
  return (
    <div id="board">
      <div id="numbers">
        <CalButton id="one" value="1" />
        <CalButton id="two" value="2" />
        <CalButton id="three" value="3" />
        <CalButton id="four" value="4" />
        <CalButton id="five" value="5" />
        <CalButton id="six" value="6" />
        <CalButton id="seven" value="7" />
        <CalButton id="eight" value="8" />
        <CalButton id="nine" value="9" />
        <CalButton id="decimal" value="." />
        <CalButton id="zero" value="0" />
        <CalButton id="equal" value="=" />
      </div>
      <div id="oprators">
        <CalButton id="clear" value="AC" />
        <CalButton id="divide" value="/" />
        <CalButton id="multiply" value="&times;" />
        <CalButton id="subtract" value="-" />
        <CalButton id="add" value="+" />
      </div>
    </div>
  );
};

export default Board;
