import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import db from './firebase';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, 'users');

  useEffect(() => {
    const getUsers = async () => {
      const querySnapshot = await getDocs(usersCollectionRef);

      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUsers(items);
    };
    getUsers();
  }, []);

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
