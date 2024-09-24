import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  function handleNameChange(event) {
    setName(event.target.value);
    setIsValidName(event.target.value.length >= 3);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setIsValidPassword(event.target.value.length >= 8);
  }

  function handleRegisterClick() {
    // Faria alguma coisa para registrar o usuário
    setName('');
    setPassword('');
    navigate('/');
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1>Register</h1>
        <div>
          <label>
            Name:
            <input
              className={isValidName ? "" : "error"}
              type='text'
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              className={isValidPassword ? "" : "error"}
              type='password'
              value={password}
              onChange={handlePasswordChange}
            />
          </label>
        </div>

        <div>
          <button
            onClick={handleRegisterClick}
            disabled={!isValidName || !isValidPassword || !name || !password}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
