import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const calculateSum = (num) => {
    let count = 0;
    // num = 4 => 4 + 3 + 2 + 1 + 0
    // num = 5 => 5 + 4 + 3 + 2 + 1 + 0
    // num = 6 => 6 + 5 + 4 + 3 + 2 + 1 + 0
    // num = 7 => 7 + 6 + 5 + 4 + 3 + 2 + 1 + 0
    for (let i = 0; i <= num ; i++) {
      count = count + i;
    }

    return count;
  }
  const [count, setCount] = useState(2);
  const memorizedCallback = useCallback(() => calculateSum(count), [count]);

  return (
    <div>
      <p>Count {memorizedCallback()}</p>
      <button onClick={() => setCount(count + 1)}> + </button>
    </div>
  );
}

export default App;
