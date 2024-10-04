import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom'

type EventType = { target: { value: string; }; }
function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { addUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleEmailChange = (event: EventType) => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event: EventType) => {
    setPassword(event.target.value);
  }

  const handleRegister = () => {
    addUser({ email, password });
    navigate('/login');
  }

  return (
    <div>
      <h1>Register</h1>
      <input 
        type="email" 
        placeholder='Email'
        onChange={handleEmailChange}
      />
      <input 
        type="password" 
        placeholder='Password'
        onChange={handlePasswordChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  )
}

export default RegisterPage;
