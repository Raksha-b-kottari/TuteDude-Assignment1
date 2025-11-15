// File: src/components/CounterFunction.js

import { useState } from "react";

function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(Math.max(0, count - 1));

  return (
    <div className="card">
      <h2>Functional Component</h2>
      <p className="number">{count}</p>

      <div className="btn-group">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default CounterFunction;
