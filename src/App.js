// File: src/App.js

import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Assignment-2 Counter Application</h1>

      <div className="row">
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

export default App;
