import { Link } from 'react-router-dom';

import NavBar from './NavBar';

export default function HomePage() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <h1>Home</h1>
        <div>
          <a href="./a">Ir para pagina A</a>
        </div>
        <div>
          <Link to="/a">Ir para pagina A usando o Link</Link>
        </div>
      </div>
    </div>
  );
}
