import { Link } from 'react-router-dom';
import Facts from '../components/Facts';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Facts />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default Home;
