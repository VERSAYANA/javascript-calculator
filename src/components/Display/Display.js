import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ value, input }) => {
  return (
    <div id="display-container">
      <span id="input">{input}</span>
      <span id="display">{value}</span>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string,
  input: PropTypes.string,
};

export default Display;
