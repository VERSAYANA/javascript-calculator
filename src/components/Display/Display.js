import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

const Display = ({ value }) => {
  return <div id="display">{value}</div>;
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
