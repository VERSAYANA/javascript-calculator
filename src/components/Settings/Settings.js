import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogic, changeTheme } from '../../actions';
import Switch from '../Switch/Switch';
import './Setting.css';

class Settings extends Component {
  render() {
    const { changeLogic, logic, changeTheme, theme } = this.props;
    return (
      <div id="settings">
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
});
const mapDispatchToProps = (dispatch) => ({
  changeLogic: (logic) => dispatch(changeLogic(logic)),
  changeTheme: (theme) => dispatch(changeTheme(theme)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
