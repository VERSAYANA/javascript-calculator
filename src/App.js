import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CalculatorContainer from './containers/CalculatorContainer/CalculatorContainer';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme ? 'App dark-theme' : 'App light-theme'}>
        <CalculatorContainer />
        <Settings />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(
  mapStateToProps,
  null,
)(App);
