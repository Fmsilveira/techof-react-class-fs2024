import { useState } from 'react';
import './App.css';

function Greeting(props) {
  return (
    <div>
      <h1>{`Hello, ${props.name}!`}</h1>
    </div>
  );
}

function Input(props) {
  return (
    <input
      type="text"
      value={props.name}
      onChange={(e) => props.setName(e.target.value)}
    />
  )
}

function App() {
  const [name, setName] = useState('');

  return (
    <div>
      <Input name={name} setName={setName} />
      <Greeting name={name}/>
    </div>
  );
}

export default App;
