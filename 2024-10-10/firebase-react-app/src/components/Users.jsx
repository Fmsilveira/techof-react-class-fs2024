import React from 'react';

export default function Users(props) {

  return (
    <div>
      {props.showTitle && <h1>Users</h1>}
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.hasDog ? 'Has a dog' : 'No dog'}
          </li>
        ))}
      </ul>
    </div>
  );
}