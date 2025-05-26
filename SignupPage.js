import React, { useState } from 'react';

function SignupPage({ onSignup }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupClick = () => {
    if (!email || !password) {
      alert('Please fill in both fields');
      return;
    }
    onSignup(email, password);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Register to MovieZone</h2>
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
        <button onClick={handleSignupClick}>Register</button>
      </div>
    </div>
  );
}

export default SignupPage;
