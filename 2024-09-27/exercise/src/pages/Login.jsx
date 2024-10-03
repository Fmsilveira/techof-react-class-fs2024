import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, TextField, Button, Alert } from '@mui/material';

import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

function ErrorLoginAlert() {
  return (
    <Alert severity="error">Invalid username or password</Alert>
  );
}

function Login() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [error, setError] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  function handleLogin() {
    const [user] = users.filter(user => {
      return user.username === username
    });

    if (!user || user.password !== password) {
      setUsername('');
      setPassword('');
      setError(true);
      setShowErrorAlert(true);
      return;
    }

    setCurrentUser(user);

    navigate('/');
  }

  useEffect(() => {
    if (password === '') return;
    setIsValidPassword(validatePassword(password));
  }, [password]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setShowErrorAlert(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    }
  }, [error]);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        {showErrorAlert && <ErrorLoginAlert />}
        <h1>Login</h1>

        <div>
          <Stack spacing={2}>
            <TextField
              type='text'
              id='username'
              name='username'
              label="Username"
              value={username}
              error={error}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              type='text' // Change this to 'password'
              id='password'
              name='password'
              label="Password"
              value={password}
              error={!isValidPassword || error}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" onClick={handleLogin}>Login</Button>
          </Stack>

        </div>
      </div>
    </div>
  );
}

export default Login;
