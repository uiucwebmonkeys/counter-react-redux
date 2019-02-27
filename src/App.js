import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Count extends Component {
  render() {
    return <p id="count">{this.props.count}</p>
  }
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState(function(prevState) {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div className="App counter-app">
        <h1>Counter</h1>
        <Count count={this.state.count} />

        <div class="buttons">
          <button onClick={this.increment} id="increment">+</button>
          <button onClick={this.decrement} id="decrement">-</button>
        </div>
      </div>
    );
  }
}

export default App;
