import { Link } from 'react-router-dom';

function NavbarInlineStyle() {
  return (
    <nav>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          listStyle: 'none',
          padding:  '0.em',
          margin: 0,
          backgroundColor: 'rgba(127, 127, 127, 0.25)',
        }}
      >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
}

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
    bla: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      listStyle: 'none',
      padding:  '0.2em',
      margin: 0,
      backgroundColor: 'rgba(127, 127, 127, 0.25)',
    }
  }
  return (
    <nav>
      <ul
        style={styles.ul}
      >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/register'>Register</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
  );
}
