import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css';

const Switch = ({ title, change, trueText, falseText, value }) => {
  return (
    <div id="switch">
      <span className="switch-title">{title}:</span>
      <div>
        <button
          id="left-button"
          className={`switch-button ${value ? 'switch-active' : ''}`}
          onClick={() => change(true)}
        >
          {trueText}
        </button>
        <button
          id="right-button"
          className={`switch-button ${!value ? 'switch-active' : ''}`}
          onClick={() => change(false)}
        >
          {falseText}
        </button>
      </div>
    </div>
  );
};

Switch.propTypes = {
  title: PropTypes.string,
  change: PropTypes.func,
  trueText: PropTypes.string,
  falseText: PropTypes.string,
  value: PropTypes.bool,
};

export default Switch;
