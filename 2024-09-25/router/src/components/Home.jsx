import Navbar from './Navbar';

import Products from './Products';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Home</h1>
        <p>Welcome to my page</p>
        <Products />
      </div>
    </div>
  );
}