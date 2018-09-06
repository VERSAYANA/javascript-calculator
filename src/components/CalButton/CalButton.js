import React from 'react';
import PropTypes from 'prop-types'
import './CalButton.css';

const CalButton = ({ value, id }) => {
  return (
    <div className="button" id={id}>{value}</div>
  )
}

CalButton.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string
}

export default CalButton;