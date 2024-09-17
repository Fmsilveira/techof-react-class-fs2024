import { useState, useContext } from 'react';
import UserContext from './userContext';

import './App.css';

function Component2(props) {
  const { name, email, age } = useContext(UserContext);

  return (
    <div style={{ marginTop: '0.2em' }}>
      <div><b>Name:</b> {name}</div>
      <div><b>Email:</b> {email}</div>
      <div><b>Age:</b> {age}</div>
    </div>
  );

  // return (
  //   <UserContext.Consumer>
  //     {name => (<div>Name: {name}</div>)}
  //   </UserContext.Consumer>
  // );
}

function Component1(props) {
  return (
    <Component2 name={props.name} lastName={props.lastName} />
  );
}

function Input(props) {
  const { name, setName, email, setEmail, age, setAge } = useContext(UserContext);

  function handleChangeName(event) {
    // props.onChange(event.target.value);
    switch (props.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'age':
        setAge(event.target.value);
        break;
      default:
        break;
    }
  }

  function getDefaultValue(id) {
    switch (id) {
      case 'name':
        return name;
      case 'email':
        return email;
      case 'age':
        return age;
      default:
        return '';
    }
  }

  return (
    <div style={{ padding: '0.1em' }}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type="text"
        onChange={handleChangeName}
        defaultValue={getDefaultValue(props.id)}
      />
    </div>
  );
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
      <div style={{ padding: '0.2em' }}>
        <Input id="name" label="Name: " />
        <Input id="email" label="Email: " />
        <Input id="age" label="Age: " />
        <Component1 />
      </div>
    </UserContext.Provider>
  )

}

export default App;
