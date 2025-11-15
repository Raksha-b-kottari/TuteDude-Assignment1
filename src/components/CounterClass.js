// File: src/components/CounterClass.js

import { Component } from "react";

class CounterClass extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: Math.max(0, this.state.count - 1) });
  };

  render() {
    return (
      <div className="card">
        <h2>Class Component</h2>
        <p className="number">{this.state.count}</p>

        <div className="btn-group">
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      </div>
    );
  }
}

export default CounterClass;
