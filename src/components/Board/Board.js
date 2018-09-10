import React from 'react';
import PropTypes from 'prop-types';
import './Board.css';
import CalButton from '../CalButton/CalButton';
import { numbers, oprators } from '../../buttons';

const Board = ({ newInput }) => {
  return (
    <div id="board">
      <div id="numbers">
        {numbers.map((n) => (
          <CalButton
            id={n.id}
            value={n.value}
            key={n.id}
            handleClick={newInput}
            type="number"
          />
        ))}
      </div>
      <div id="oprators">
        {oprators.map((o) => (
          <CalButton
            id={o.id}
            value={o.value}
            key={o.id}
            handleClick={newInput}
            type="operator"
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  newInput: PropTypes.func,
};

export default Board;
