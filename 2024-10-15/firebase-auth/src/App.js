import { useState, useEffect } from 'react';

import auth from './firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
} from 'firebase/auth';

import './App.css';

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(`User sign in:`, user);
  } else {
    console.log('No user is signed in');
  }
});

const handleCreateUser = async () => {
  const email = 'abc@b.com';
  const password = '123456';

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const { user } = userCredential;
    console.log(`User:`, user);

    return user;
  } catch (error) {
    console.error(`${error.code}: ${error.message}`);
    // auth/email-already-in-use
    // auth/missing-email
    // auth/invalid-email
    // auth/missing-password
  }
};

const handleSignOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error(`${error.code}: ${error.message}`);
  }
};

function App() {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let timeout = setTimeout(() => {
      setHasError(false);
      setErrorMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hasError, errorMessage]);

  const handleLogin = async () => {
    const email = 'b@b.com';
    const password = '123456';

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      const { user } = userCredential;
      console.log(`User:`, user);

      return user;
    } catch (error) {
      console.error(`${error.code}: ${error.message}`);
      setHasError(true);

      if ('auth/invalid-credential') {
        setErrorMessage("Credentials are invalid. Please try again.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {hasError && <p>{errorMessage}</p>}
      <button onClick={handleCreateUser}>Create User</button>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default App;
