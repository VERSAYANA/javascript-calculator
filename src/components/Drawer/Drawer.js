import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch/Switch';
import './Drawer.css';

class Drawer extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
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

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.toggleDrawer();
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
