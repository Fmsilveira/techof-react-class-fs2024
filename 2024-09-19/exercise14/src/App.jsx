import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Clear</button>
    </div>
  );
}

export default App;
