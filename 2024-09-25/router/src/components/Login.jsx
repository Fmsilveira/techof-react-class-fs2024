import { useRef, useEffect } from "react";

import Navbar from "./Navbar";

function Login() {
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    console.log('email:', email, 'password:', password);
  };

  useEffect(() => {
    console.log('Login component mounted');
  });

  return (
    <div>
      <Navbar />
      <div>
        <h1>Login</h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>
              Email:
              <input type="email" ref={emailInput} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="password" ref={passwordInput} />
            </label>
          </div>

          <button type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login;