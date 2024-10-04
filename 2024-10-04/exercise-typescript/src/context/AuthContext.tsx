import { createContext, useState, useEffect, Dispatch, SetStateAction, PropsWithChildren } from "react";

type UserType = {
  email: string;
  password: string;
}
export const AuthContext = createContext<{
  users: UserType[];
  setUsers: (users: UserType[]) => void;
  addUser: (user: UserType) => void;
  currentUser: UserType | {};
  setCurrentUser: (user: UserType | {}) => void;
  logoutUser: () => void;
}>({
  users: [],
  setUsers: () => {},
  addUser: () => {},
  currentUser: { email: '', password: '' },
  setCurrentUser: () => {},
  logoutUser: () => {},
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [currentUser, setCurrentUser] = useState<UserType | {}>({});
  
  useEffect(() => {
    console.log('Loading the context');
    const _users = localStorage.getItem('users');
    if (!_users) return setUsers([]);

    const users = JSON.parse(_users);
    setUsers(users);
  }, []);
  
  const addUser = (user: UserType) => {
    const _users = [...users, user];
    setUsers(_users);

    localStorage.setItem('users', JSON.stringify(_users));
  }

  const logoutUser = () => {
    setCurrentUser({});
  };

  return (
    <AuthContext.Provider value={{
      users,
      setUsers,
      addUser,
      currentUser,
      setCurrentUser,
      logoutUser,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
