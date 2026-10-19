import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleContinue = () => {
    console.log("Form Data:", formData);
    localStorage.setItem('auth-token', 'user_logged_in');
    if (formData.username) {
      localStorage.setItem('username', formData.username);
    }
    alert(`${state} successful! Welcome to SHOPPER.`);
    window.location.replace('/');
  }

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input 
              name='username' 
              value={formData.username} 
              onChange={changeHandler} 
              type="text" 
              placeholder="Your Name" 
            />
          ) : <></>}
          <input 
            name='email' 
            value={formData.email} 
            onChange={changeHandler} 
            type="email" 
            placeholder="Email Address" 
          />
          <input 
            name='password' 
            value={formData.password} 
            onChange={changeHandler} 
            type="password" 
            placeholder="Password" 
          />
        </div>
        <button onClick={handleContinue}>Continue</button>
        {state === "Login" ? (
          <p className="loginsignup-login">
            Create an account? <span onClick={() => { setState("Sign Up") }} style={{cursor: "pointer", color: "#ff4141"}}>Click here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Already have an account? <span onClick={() => { setState("Login") }} style={{cursor: "pointer", color: "#ff4141"}}>Login here</span>
          </p>
        )}
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;