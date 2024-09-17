import { useState, useReducer } from 'react';
import './App.css';

function App() {
  const initialState = {
    count: 0,
    name: 'Bruno',
  };
  const reducer = (previousState, action) => {
    switch (action.type) {
      case 'add':
        return { ...previousState, count: previousState.count + action.value };
      case 'reset':
        return { ...previousState, count: action.value || 0 }
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementAction = () => {
    dispatch({ type: 'add', value: 1 });
  };
  const decrementAction = () => {
    dispatch({ type: 'add', value: -1 });
  };
  const resetAction = () => {
    dispatch({ type: 'reset' });
  }
  const reset10Action = () => {
    dispatch({ type: 'reset', value: 10 });
  }
  const reset100Action = () => {
    dispatch({ type: 'reset', value: 100 });
  }


  return (
    <div>
      <p>Name: {state.name}</p>
      <p>Counter: {state.count}</p>
      <button onClick={incrementAction}>+</button>
      <button onClick={decrementAction}>-</button>
      <button onClick={resetAction}>Reset</button>
      <button onClick={reset10Action}>Reset 10</button>
      <button onClick={reset100Action}>Reset 100</button>
    </div>
  );
}

export default App;
