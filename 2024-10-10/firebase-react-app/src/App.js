import React from 'react';

import useFirestore from './hooks/useFirestore';
import './App.css';

function App() {
  const [users, setUsers] = useFirestore('users');

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.hasDog ? 'Has a dog' : 'No dog'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
