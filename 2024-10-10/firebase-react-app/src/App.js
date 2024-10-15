import React from 'react';

import './App.css';
import Users from './components/Users';
import Form from './components/Form';
import Search from './components/Search';
import Update from './components/Update';

import useFirestore from './hooks/useFirestore';

function App() {
  const { users } = useFirestore('users');

  return (
    <div>
      <Form />
      <Search />
      <Users
        showTitle={true}
        users={users}
      />
      <Update />
    </div>
  );
}

export default App;
