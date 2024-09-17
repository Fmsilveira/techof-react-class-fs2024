import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  document.title = "Aula 13-09"

  useEffect(() => {
    const interval = setTimeout(() => {
      setCounter(counter + 1);
    }, 1000);
    console.log('useEffect');

    return () => clearInterval(interval);
  }, [counter]);

  return (
    <div>
      <p>{counter}</p>
    </div>
  );
}

export default App;
