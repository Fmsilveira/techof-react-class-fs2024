import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  
  if (!currentUser.username) {
    navigate('/login');
  }

  const usernameStyle = {
    fontWeight: 'bold',
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1>Profile</h1>
        <p>Name: <span style={usernameStyle}>{currentUser.username}</span></p>
      </div>
    </div>
  );  
}