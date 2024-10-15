import React, { useState } from 'react';

import useFirestore from '../hooks/useFirestore';

export default function Update() {
  const [user, setUser] = useState(null);
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [hasDog, setHasDog] = React.useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const {
    queryByName,
    updateDocument,
    deleteDocument
  } = useFirestore('users');

  const handleSearch = async () => {
    console.log('Searching for:', searchTerm);
    const [_user] = await queryByName(searchTerm);
    console.log('Results :', _user);
    setUser(_user);

    if (!_user) {
      return;
    }
    setName(_user.name);
    setAge(_user.age);
    setHasDog(_user.hasDog);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDocument(user.id, { name, age, hasDog });
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    setAge(0);
    setName('');
    setHasDog(false);
    setUser(null);
    setSearchTerm('');
    await deleteDocument(user.id);
  };

  return (
    <div>
      <h1>Update</h1>
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

      {user && (
        <form onSubmit={handleSubmit}>
          <input
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            name='age'
            type='number'
            placeholder='Age'
            value={age === 0 ? '' : age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
          <br />
          <label htmlFor='hasDog'>Has a dog</label>
          <input
            name='hasDog'
            type='checkbox'
            value={hasDog}
            onChange={(e) => setHasDog(e.target.checked)}
          />
          <br />
          <button
            type='submit'
          >Update User</button>
          <button
            onClick={handleDelete}
          >Delete User</button>
        </form>
      )}
    </div>
  )
}