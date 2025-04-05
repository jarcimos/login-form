import React, {useState} from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Signing in...");
    

    // Mock fetch request
    const response = await new Promise((resolve) =>
        setTimeout(() => {
          if (email === "user@gmail.com" && password === "password123") {
            resolve({ success: true, token: "mockToken123" });
          } else {
            resolve({ success: false });
          }
        }, 1000)
      );

    if (response.success) {
        if(rememberMe) {
            localStorage.setItem("authenticated", "true");
        } else {
            sessionStorage.setItem('authenticated', 'true');
        }
        
        setIsError(false)
        navigate("/#/welcome");
    } else {
        setIsError(true);
        setMessage("Invalid email or password.");
    }
  };
  
  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
            <input 
                type="text" 
                placeholder='Username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input 
                type="password" 
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            <FaLock className='icon'/>
        </div>
        
        <div className="remember-forgot">
            <label>
                <input type="checkbox" />Remember me
            </label>
            <a href="#">Forgot Password</a>
        </div>

        <button type='submit'>Login</button>

        <div className="register-link">
            <p>Don't have an account? <a href='#'>Register</a> </p>
        </div>
      </form>
      <p className={`message ${isError ? "error" : "success"}`}>{message}</p>
    </div>
  )
}

export default LoginForm
