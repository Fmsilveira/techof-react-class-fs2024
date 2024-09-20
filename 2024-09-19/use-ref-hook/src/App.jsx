import { useRef } from 'react';
import './App.css';

function Input() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.value = 'Hello, World!';
    console.log(inputRef.current.value);
  }

  return (
    <div>
      <input ref={inputRef} type="text" onChange={(event) => {
        console.log(event.target.value);
      }}/>
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}

function App() {
  let ref = useRef(0);

  function handleClick() {
    ref = { ...ref, current: ref.current + 1 };
    console.log(ref.current);
  }

  return (
    <div>
      <p>{ref.current}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
