import { useState } from 'react';

import './App.css';

function CreateUserForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  const handleCreateUserFormSubmit = (e) => {
    e.preventDefault();

    props.setUsers([...props.users, { name, age }]);

    setName('');
    setAge(0);
  }

  return (
    <form>
      <h2>Create User</h2>
      <div>
        <label>
          Name:
        </label>
        <input
          type="text"
          placeholder="Nome"
          name="name"
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label for="age">
          Age:
        </label>
        <input
          type="number"
          placeholder="0"
          name="age"
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <button type='submit' onClick={handleCreateUserFormSubmit}>Submit</button>

    </form>
  )
}

function User(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

function Search(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </div>
  )
}

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('users:', users);

  const userComponents = users
    .filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .map((user) => {
      return (
        <User
          name={user.name}
          age={user.age}
        />
      )
    });

  return (
    <div>
      <CreateUserForm users={users} setUsers={setUsers} />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <h1>Users</h1>
      {
        userComponents.length > 0 ? userComponents : <p>No users found</p>
      }
    </div>
  );
}

export default App;
