import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newInput, toggleDrawer } from '../../actions';
import './Calculator.css';
import Display from '../Display/Display';
import Board from '../Board/Board';
import DrawerButton from '../DrawerButton/DrawerButton';

class Calculator extends Component {
  render() {
    const { input, newInput, display, drawer, toggleDrawer } = this.props;

    return (
      <div id="calculator">
        <Display value={display} input={input} />
        <Board newInput={newInput} />
        <DrawerButton toggle={toggleDrawer} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  input: state.input,
  result: state.result,
  display: state.display,
  drawer: state.drawer,
});
const mapDispatchToProps = (dispatch) => ({
  newInput: (input) => dispatch(newInput(input)),
  toggleDrawer: () => dispatch(toggleDrawer()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Calculator);
