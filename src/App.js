import React, { Component } from 'react';
import { connect } from 'react-redux';
import Count from './Count';
import './App.css';
import { increment, decrement } from './store';

class App extends Component {
  render() {
    return (
      <div className="App counter-app">
        <h1>Counter</h1>
        <Count />

        <div className="buttons">
          <button onClick={() => this.props.increment(1000)} id="increment">+</button>
          <button onClick={this.props.decrement} id="decrement">-</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(undefined, mapDispatchToProps)(App);
