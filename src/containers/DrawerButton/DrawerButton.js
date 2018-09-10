import React from 'react';
import { connect } from 'react-redux';
import { toggleDrawer } from '../../actions';
import PropTypes from 'prop-types';
import './DrawerButton.css';

let DrawerButton = ({ toggleDrawer }) => {
  return (
    <div id="drawer-button" onClick={toggleDrawer}>
      <svg viewBox="0 0 24 24">
        <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
      </svg>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
});

DrawerButton.propTypes = {
  toggleDrawer: PropTypes.func,
};

DrawerButton = connect(
  null,
  mapDispatchToProps,
)(DrawerButton);

export default DrawerButton;
