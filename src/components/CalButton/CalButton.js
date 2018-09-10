import React from 'react';
import PropTypes from 'prop-types';
import './CalButton.css';

const CalButton = ({ value, id, handleClick, type }) => {
  const onPress = () => {
    handleClick(value);
  };

  return (
    <div className={`button ${type}-button`} id={id} onClick={onPress}>
      {value}
    </div>
  );
};

CalButton.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  handleClick: PropTypes.func,
  type: PropTypes.string,
};

export default CalButton;
