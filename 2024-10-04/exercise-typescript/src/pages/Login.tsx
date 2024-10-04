import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

type EventType = { target: { value: string; }; }

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (event: EventType) => {
    setEmail(event.target.value);
  }
  
  const handlePasswordChange = (event: EventType) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    const [ user ]  = users.filter(user => user.email);

    if (!user) return alert('User not found');
    
    if (user.password !== password) return alert('Invalid password');

    setCurrentUser(user);
    navigate('/');
  }

  return (
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;