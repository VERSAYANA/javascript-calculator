import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';
import './Drawer.css';

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  componentDidUpdate() {
    if (this.props.open) {
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  toggleDrawer() {
    this.props.toggleDrawer();
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.toggleDrawer();
    }
  }

  render() {
    const { logic, theme, open, changeTheme, changeLogic } = this.props;
    return (
      <div
        id="settings"
        className={open ? 'drawer-open' : 'drawer-close'}
        ref={this.setWrapperRef}
      >
        <div id="settings-header">
          <div id="close-container" onClick={this.toggleDrawer}>
            <svg viewBox="0 0 24 24">
              <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
            </svg>
          </div>
          <header>Settings</header>
        </div>
        <Switch
          title="Theme"
          change={changeTheme}
          value={theme}
          trueText="Dark"
          falseText="Light"
        />
        <Switch
          title="Logic"
          change={changeLogic}
          value={logic}
          trueText="Expression"
          falseText="Immediate"
        />
      </div>
    );
  }
}

Drawer.propTypes = {
  logic: PropTypes.bool,
  theme: PropTypes.bool,
  open: PropTypes.bool,
  changeLogic: PropTypes.func,
  changeTheme: PropTypes.func,
  toggleDrawer: PropTypes.func,
};

export default Drawer;
