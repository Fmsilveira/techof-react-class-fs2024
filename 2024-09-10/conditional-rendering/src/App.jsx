import { useState } from 'react';

import './App.css';
import './LoginForm.css';

import Header from './Components/Header';

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

const validatePassword = (password) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return regex.test(password);
}

function LoginFormInput(props) {
  return (
    <div className="form-input">
      <label>{props.label}</label>
      <input
        type={props.input.type}
        placeholder={props.input.placeholder}
        value={props.value}
        onChange={props.input.onChange}
        className={props.hasError ? 'error' : ''}
      />
      {props.hasError && <p className="error-message">{props.errorMessage}</p>}
    </div>
  );
}

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsValidPassword(validatePassword(e.target.value));
  };

  return (
    <div className='form'>
      <LoginFormInput
        label="E-mail: "
        input={{
          type: 'text',
          placeholder: 'email',
          onChange: handleEmailChange
        }}
        value={email}
        hasError={email.length > 0 && !isValidEmail}
        errorMessage="E-mail inválido"
      />

      <LoginFormInput
        label="Password: "
        input={{
          type: 'password',
          placeholder: '\u2B24',
          onChange: handlePasswordChange
        }}
        value={password}
        hasError={password.length > 0 && !isValidPassword}
        errorMessage="4 to 8 character password requiring numbers and both lowercase and uppercase letters"
      />
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(false);
  const submit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  return (
    <div className="App">
      <Header>
        <p>Conditional Rendering</p>
      </Header>
      {
        loading ? <p>Loading...</p> :
          (
            <>
              <LoginForm />
              <button onClick={submit} disabled={loading}>
                Submit
              </button>
            </>
          )
      }
      {loading && <p>Loading...</p>}
      {!loading &&
        <>
          <LoginForm />
          <button onClick={submit} disabled={loading}>
            Submit
          </button>
        </>
      }

    </div>
  );
}

export default App;
