import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
          <div>
            <label htmlFor='username'>Username:</label>
            <input type='text' id='username' name='username' ref={usernameRef} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input type='text' id='password' name='password' ref={passwordRef} />
            {!isValidPassword && <p>Password must be at least 8 characters long</p>}
          </div>
          <div>
            <button type='submit'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
