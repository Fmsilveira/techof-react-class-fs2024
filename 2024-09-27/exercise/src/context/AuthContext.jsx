import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    console.log('Loading the context');
    const _users = localStorage.getItem('users');
    const users = JSON.parse(_users) || [];
    setUsers(users);
  }, []);

  const addUser = (user) => {
    const _users = [...users, user];
    setUsers(_users);

    localStorage.setItem('users', JSON.stringify(_users));
  }

  return (
    <AuthContext.Provider value={{
      users,
      setUsers,
      addUser,
      currentUser,
      setCurrentUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
