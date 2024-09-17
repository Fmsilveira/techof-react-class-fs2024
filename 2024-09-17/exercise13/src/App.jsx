import { useReducer } from 'react';
import './App.css';

function App() {
  const initialState = {
    count: 0,
    showValue: true,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'add':
        return { ...state, count: state.count + action.value };
      case 'split':
        return { ...state, count: state.count / action.value };
      case 'reset':
        return { ...state, count: 0 };
      case 'toggle':
        return { ...state, showValue: !state.showValue };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Exercise 13</h1>
      {state.showValue && <p>Count: {state.count}</p>}
      {!state.showValue && <p>Hidden</p>}
      <button onClick={() => { dispatch({ type: 'add', value: 1 }) }}>+1</button>
      <button onClick={() => { dispatch({ type: 'add', value: 5 }) }}>+5</button>
      <button onClick={() => { dispatch({ type: 'reset' }) }}>Reset</button>
      <button onClick={() => { dispatch({ type: 'add', value: -1 }) }}>-1</button>
      <button onClick={() => { dispatch({ type: 'add', value: -5 }) }}>-5</button>
      <button onClick={() => { dispatch({ type: 'split', value: 2 }) }}>/2</button>
      <button onClick={() => { dispatch({ type: 'split', value: 5 }) }}>/5</button>
      <button onClick={() => { dispatch({ type: 'toggle' }) }}>Show</button>
      <button onClick={() => { dispatch({ type: 'toggle' }) }}>Hide</button>
    </div>
  );
}

export default App;
