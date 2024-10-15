import React, { useState } from 'react';

import Users from './Users';
import useFirestore from '../hooks/useFirestore';

export default function Search() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { queryByName } = useFirestore('users');

  const handleSearch = async () => {
    console.log('Searching for:', searchTerm);
    const _users = await queryByName(searchTerm);
    console.log('Results:', _users);
    setUsers(_users);
  };

  return (
    <div>
      <h1>Search</h1>
      <input
        type="text"
        placeholder="Search Users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
      >
        Search
      </button>
      <Users users={users} />
    </div>
  )
}