import React from 'react';
import PropTypes from 'prop-types';
import './Drawer.css';

const Drawer = ({ open, toggle }) => {
  return (
    <div id="drawer" onClick={toggle}>
      <svg viewBox="0 0 24 24">
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  );
};

Drawer.propTypes = {};

export default Drawer;
