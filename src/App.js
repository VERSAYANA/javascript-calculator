import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <div className={theme ? "App dark-theme" : "App light-theme"}>
        <Calculator />
        <Settings />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  theme: state.theme
})

export default connect(
  mapStateToProps,
  null,
)(App);
