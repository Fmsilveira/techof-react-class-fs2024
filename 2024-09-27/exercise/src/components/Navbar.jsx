import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const styles = {
    ul: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      listStyle: 'none',
      padding:  '0.2em',
      margin: 0,
      backgroundColor: 'rgba(127, 127, 127, 0.25)',
    },
  }

  return (
    <nav>
      <ul
        style={styles.ul}
      >
        <li><Link to='/'>Home</Link></li>
        {currentUser.username && <li><Link to='/profile'>Profile</Link></li>}
        {currentUser.username && <button onClick={logoutUser}>Logout</button>}
        {!currentUser.username && <li><Link to='/register'>Register</Link></li>}
        {!currentUser.username && <li><Link to='/login'>Login</Link></li>}
      </ul>
    </nav>
  );
}
