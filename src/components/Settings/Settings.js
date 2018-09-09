import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogic } from '../../actions';
import Switch from '../Switch/Switch';
import './Setting.css';

class Settings extends Component {
  render() {
    const { changeLogic, logic } = this.props;
    return (
      <div id="settings">
        <Switch
          change={changeLogic}
          value={logic}
          trueText="Expression"
          falseText="Immediate"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  logic: state.logic,
});
const mapDispatchToProps = (dispatch) => ({
  changeLogic: (logic) => dispatch(changeLogic(logic)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
