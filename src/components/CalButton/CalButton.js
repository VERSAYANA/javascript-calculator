import React from 'react';
import './CalButton.css';

const CalButton = ({ value, id }) => {
  return (
    <div className="button" id={id}>{value}</div>
  )
}

export default CalButton;