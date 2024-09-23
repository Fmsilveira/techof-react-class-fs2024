import { useState } from "react";
import Navbar from "./Navbar";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Login</h1>
        <div>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              defaultValue={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              defaultValue={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={() => alert(`Username: ${username}, Password: ${password}`)}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;