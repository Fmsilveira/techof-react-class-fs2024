import { useState } from 'react';

import './App.css';
import Recap from './components/Recap';
import Header from './components/Header';

function Button(props) {
  return (
    <button
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

function LigaDesliga(props) {
  const [estaLigado, setEstaLigado] = useState(false);
  let foraDoUseState = false;

  return (
    <>
      <div>
        <p>{`${estaLigado}`}</p>
        <p>{`Fora do useState: ${foraDoUseState}`}</p>
      </div>
      <Button
        onClick={() => {
          setEstaLigado(!estaLigado);
          foraDoUseState = !foraDoUseState;
        }}
        label="Ligar/Desligar"
      />
    </>
  )
}

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <>
      <p>{contador}</p>
      <Button
        onClick={() => setContador(contador + 1)}
        label="+"
      />
      <Button
        onClick={() => setContador(contador - 1)}
        label="-"
      />
    </>
  );
}

function Input(props) {
  function handleChangeName(event) {
    const _user = {
      ...props.user,
    }
    _user[props.property] = event.target.value;
    console.log(_user);
    props.onChange(_user);
  }

  return (
    <label>
      {props.label}
      <input
      name={props.name}
      type={props.type || 'text'}
      value={props.user[props.property]}
      onChange={handleChangeName}
    />
    </label>
  );
}

function App() {
  const users = [
    {
      name: 'John Doe',
      age: 30
    },
    {
      name: 'Jane Doe',
      age: 25
    }
  ]

  const [user, setUser] = useState(users[0]);

  return (
    <>
      <Header>
        <p>State</p>
      </Header>
      <div>
        <p>{user.name}</p>
        <p>{user.age}</p>
        <Input 
          label="Name: "
          name="name"
          onChange={setUser}
          property="name"
          user={user}
        />
        <Input 
          label="Age: "
          name="age"
          onChange={setUser}
          property="age"
          user={user}
          type="number"
        />
      </div>
      <Button
        onClick={() => {
          console.log(user);
          setUser({
            ...user
          });
        }}
        label="Mudar Nome"
      />
    </>
  );
}

export default App;
