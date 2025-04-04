import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
  
    navigate("/#/");
  };

    return (
      <div className='wrapper'>
        <h1>Welcome!</h1>
        <h3 className='success'>You have successfully logged in.</h3>
        <button 
          onClick={handleLogout}
        >
          Log out
        </button>
      </div>
    )
}
;

export default Welcome
