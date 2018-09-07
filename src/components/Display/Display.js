import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ value, input }) => {
  return (
    <div id="display">
      <span id="input">{input}</span>
      <span>{value}</span>
    </div>
  );
};

Display.propTypes = {
  // value: PropTypes.string,
  input: PropTypes.string,
};

export default Display;
