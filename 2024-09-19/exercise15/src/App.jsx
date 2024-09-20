import './App.css';

import useCounter from './useCounter';

function App() {
  const [count, setCount] = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount('increment')}>Increment</button>
      <button onClick={() => setCount('decrement')}>Decrement</button>
    </div>
  );
}

export default App;
