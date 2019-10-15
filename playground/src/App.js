import React, { Component, useState } from 'react';
import './App.css';

function App() {
  const Counter = props => {
    const [counter, setCounter] = useState(0);

    const setToValue = value => () => {
      setCounter(value);
    };

    return (
      <div>
        <div>{counter}</div>
        <button onClick={setToValue(counter + 1)}>plus</button>
        <button onClick={setToValue(0)}>reset</button>
      </div>
    );
  };

  const Display = props => {};

  return (
    <div className='App'>
      <Counter />
    </div>
  );
}

export default App;
