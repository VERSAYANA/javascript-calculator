import React, { Component } from 'react';
import './App.css';
import Calculator from './components/Calculator/Calculator';
import Settings from './components/Settings/Settings';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
        <Settings />
      </div>
    );
  }
}

export default App;
