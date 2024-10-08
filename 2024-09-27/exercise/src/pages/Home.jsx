import Facts from "../components/Facts";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
        <Facts />
      </div>
    </div>
  );
}

export default Home;
