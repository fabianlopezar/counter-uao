import React, { useState } from 'react';
import './App.css';

function CounterApp() {
  const [counterValue, updateCounterValue] = useState(100);

  const incrementCounter = () => {
    updateCounterValue(prevValue => prevValue + 1);
  };

  const decrementCounter = () => {
    updateCounterValue(prevValue => prevValue - 1);
  };

  const resetCounter = () => {
    updateCounterValue(0);
  };

  return (
    <div className="counter-container">
      <h1>Welcome</h1>
      <h1>Current Count: {counterValue}</h1>
      <button className="action-btn" onClick={incrementCounter}>Increase</button>
      <button className="action-btn" onClick={resetCounter}>Reset</button>
      <button className="action-btn" onClick={decrementCounter}>Decrease</button>
    </div>
  );
}

export default CounterApp;
