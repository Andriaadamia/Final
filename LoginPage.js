import React, { useState } from 'react';
import TypingLoader from '../pages/TypingLoader'; 


function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const handleLoginClick = () => {
    const savedEmail = localStorage.getItem('registeredUserEmail');
    const savedPassword = localStorage.getItem('registeredUserPassword');

    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }

    if (email === savedEmail && password === savedPassword) {
      setIsLoading(true); 
      setTimeout(() => {
        onLogin(email); 
        window.location.href = '/movies.html'; 
      }, 3000); 
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };

  if (isLoading) {
    return <TypingLoader />;
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login to MovieZone</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button onClick={handleLoginClick}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
