import React from 'react'
import "./Welcome.css";

const Welcome = () => (
    <div className='wrapper'>
      <h1>Welcome!</h1>
      <h3 className='success'>You have successfully logged in.</h3>
      <button 
        onClick={() => {
          localStorage.removeItem("authenticated");
          window.location.href = "/";
        }}
      >
        Log out
      </button>
    </div>

  );

export default Welcome
