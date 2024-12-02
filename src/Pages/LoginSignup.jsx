import React, { useState } from 'react';
import './CSS/Loginsignup.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please fill in all required fields!");
      return;
    }

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username: name,
        mail:email, 
        password: password,
      });

      if (response.status === 200) {
        toast.success("Login successful!");
        console.log("Response Data:", response.data);
      }
    } catch (error) {
      toast.error("Login failed! Please check your credentials.");
      console.error(error);
    }
  };

  return (
    <div className='loginsignup'>
      <ToastContainer />
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input 
            type='text' 
            placeholder='Your name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type='email' 
            placeholder='Email address' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <input 
            type='password' 
            placeholder='Password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button onClick={handleLogin}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
