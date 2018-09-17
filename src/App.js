import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './todo'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <TodoApp/>
        </div>
      </div>
    );
  }
}

export default App;
