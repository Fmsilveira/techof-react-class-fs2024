import { useState, useMemo }  from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(2);
  const [b, setB] = useState(0);

  const calculateFactorial = (n) => {
    console.log('calculateFactorial')
    if (n <= 1) {
      return 1;
    }

    return n * calculateFactorial(n - 1);
  };
  const valorMemorizado = useMemo(() => calculateFactorial(number), [number]);

  return (
    <div>
      <input 
      type='number' 
      defaultValue={number}
      onChange={(e) => setNumber(e.target.value)} 
      />
      <p>Valor fatorial é: {valorMemorizado}</p>
    </div>
  );
}

export default App;
