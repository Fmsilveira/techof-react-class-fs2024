import React from 'react';

import useFirestore from '../hooks/useFirestore';

export default function Form() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState(0);
  const [hasDog, setHasDog] = React.useState(false);

  const { addDocument } = useFirestore('users');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ name, age, hasDog });
    await addDocument({ name, age, hasDog });
    setName('');
    setAge(0);
    setHasDog(false);
  };

  return (
    <div>
      <h1>Add User</h1>
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
        >Add User</button>
      </form>
    </div>
  );
}