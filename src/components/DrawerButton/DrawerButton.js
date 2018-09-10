import React from 'react';
import PropTypes from 'prop-types';
import './DrawerButton.css';

const DrawerButton = ({ toggle }) => {
  return (
    <div id="drawer-button" onClick={toggle}>
      <svg viewBox="0 0 24 24">
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  );
};

DrawerButton.propTypes = {};

export default DrawerButton;
