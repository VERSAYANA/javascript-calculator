import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogic, changeTheme, toggleDrawer } from '../../actions';
import Switch from '../Switch/Switch';
import './Setting.css';

class Settings extends Component {
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
    const { changeLogic, logic, changeTheme, theme, open } = this.props;
    return (
      <div
        id="settings"
        className={open ? 'drawer-open' : 'drawer-close'}
        ref={this.setWrapperRef}
      >
        <Switch
          title="Logic"
          change={changeLogic}
          value={logic}
          trueText="Expression"
          falseText="Immediate"
        />
        <Switch
          title="Theme"
          change={changeTheme}
          value={theme}
          trueText="Dark"
          falseText="Light"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logic: state.logic,
  theme: state.theme,
  open: state.drawer,
});
const mapDispatchToProps = (dispatch) => ({
  changeLogic: (logic) => dispatch(changeLogic(logic)),
  changeTheme: (theme) => dispatch(changeTheme(theme)),
  toggleDrawer: () => dispatch(toggleDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
