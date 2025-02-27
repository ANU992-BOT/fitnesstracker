import React, { useState } from 'react';
import './Loginpage.css';
import { useNavigate } from 'react-router-dom';
const Loginpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
  };

    const Navi=useNavigate()
    const handleHome=()=>{
      Navi("/Home")
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Fitness Tracker</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" onClick={handleHome}>Login </button>
        </form>

        <div className="register-link">
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
