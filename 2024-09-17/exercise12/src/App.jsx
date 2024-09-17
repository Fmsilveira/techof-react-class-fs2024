import { useState, useContext } from 'react';

import UserContext from './UserContext';
import './App.css';

function NameInput(props) {
  const context = useContext(UserContext);

  const handleChangeValue = (event) => {
    context.setName(event.target.value);
  }

  return (
    <div>
      <label htmlFor='name'>Name: </label>
      <input
        id='name'
        type='text'
        value={context.name}
        onChange={handleChangeValue}
      />
    </div>
  )
}
function AgeInput(props) {
  const context = useContext(UserContext);

  const handleChangeValue = (event) => {
    context.setAge(event.target.value);
  }

  return (
    <div>
      <label htmlFor='age'>Age: </label>
      <input
        id='age'
        type='text'
        value={context.age}
        onChange={handleChangeValue}
      />
    </div>
  )
}

function Input(props) {
  const context = useContext(UserContext);

  const handleChangeValue = (event) => {
    switch (props.id) {
      case 'name':
        context.setName(event.target.value);
        break;
      case 'email':
        context.setEmail(event.target.value);
        break;
      case 'age':
        context.setAge(event.target.value);
        break;
    }
    console.log(event.target.value)
  }

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type='text'
        defaultValue={context.age}
        onChange={handleChangeValue}
      />
    </div>
  )
}

function UserDetails() {
  const { name, email, age } = useContext(UserContext);

  return (
    <div>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Age: {age}</div>
    </div>
  )
}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  return (
    <UserContext.Provider value={{
      name,
      setName,
      email,
      setEmail,
      age,
      setAge
    }}>
      <div>
        <div>
          <Input id='name' label='Name: ' />
          <Input id='email' label='Email: ' />
          <Input id='age' label='Age: ' />
          <NameInput />
          <AgeInput />
          <UserDetails />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
