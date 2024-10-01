import { Link } from 'react-router-dom';

export default function Navbar() {
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
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
}
