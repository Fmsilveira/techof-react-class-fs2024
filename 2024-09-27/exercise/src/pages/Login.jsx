import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  function handleLogin() {
    const [user] = users.filter(user => {
      return user.username === username
    });

    if (!user) {
      alert('User not found');
      setUsername('');
      setPassword('');
      return;
    }

    if (user.password !== password) {
      alert('Invalid password');
      setUsername('');
      setPassword('');
      return;
    }

    setCurrentUser(user);

    navigate('/');
  }

  useEffect(() => {
    if (password === '') return;
    setIsValidPassword(validatePassword(password));
  }, [password]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Login</h1>

        <div>
          <div>
            <label htmlFor='username'>Username:</label>
            <input
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='text'
              id='password'
              name='password'
              value={password}
              style={{
                ...!isValidPassword && { border: '1px solid red' },
              }}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button onClick={handleLogin}>Login</button>
        </div>


      </div>
    </div>
  );
}

export default Login;
