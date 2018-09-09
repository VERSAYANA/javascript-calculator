import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

const Switch = ({ change, trueText, falseText, value }) => {
  return (
    <div id="switch">
      <span>Logic:</span>
      <div>
        <button
          id="left-button"
          className={value ? "switch-button switch-active" : "switch-button"}
          onClick={() => change(true)}
        >
          {trueText}
        </button>
        <button
          id="right-button"
          className={!value ? "switch-button switch-active" : "switch-button"}
          onClick={() => change(false)}
        >
          {falseText}
        </button>
      </div>
    </div>
  );
};

Switch.propTypes = {
  change: PropTypes.func,
  trueText: PropTypes.string,
  falseText: PropTypes.string,
  value: PropTypes.bool,
};

export default Switch;
