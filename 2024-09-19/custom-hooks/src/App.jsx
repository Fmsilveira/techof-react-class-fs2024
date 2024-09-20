import './App.css';

import { useMyHook } from './useMyHook';

function App() {
  const [counter, setCounter] = useMyHook();
  
  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={() => setCounter()}>+</button>
    </div>
  );
}

export default App;
