import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Stack } from '@mui/material';

import Navbar from "../components/Navbar";

import { AuthContext } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { addUser } = useContext(AuthContext);

  const [isValidPassword, setIsValidPassword] = useState(true);

  const usernameRef = useRef();
  const passwordRef = useRef();

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  function handleSubmit(event) {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const isValidPassword = validatePassword(password);
    setIsValidPassword(isValidPassword);

    console.log(`Username: ${username}`);
    console.log(`Password: ${password} ${isValidPassword}`);

    if (isValidPassword) {
      addUser({ username, password });
      return navigate('/login');
    }

    passwordRef.current.style = 'border: 1px solid red';
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              type='text'
              id='username'
              name='username'
              inputRef={usernameRef}
              label="Username"
              variant="standard"
            />
            <TextField
              type='text'
              id='password'
              name='password'
              inputRef={passwordRef}
              label="Password"
              variant="standard"
              error={!isValidPassword}
            />
            {!isValidPassword && <p>Password must be at least 8 characters long</p>}
            <Button variant="contained" type='submit'>Register</Button>
          </Stack>
        </form>
      </div>
    </div>
  );
}

export default Register;
