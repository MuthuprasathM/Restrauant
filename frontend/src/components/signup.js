import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For redirect after signup

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Replace with your backend signup URL
      const response = await axios.post('http://localhost:5000/api/signup', {
        email,
        password
      });

      // Assuming the API returns success
      if (response.data.success) {
        navigate('/login'); // Redirect to login page on successful signup
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (error) {
      // Handle possible error responses
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(error.response.data.message || 'Signup failed');
      } else if (error.request) {
        // No response was received from the server
        setError('Failed to connect to the server. Please try again later.');
      } else {
        // Something else caused the error
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h1>Signup for Restaurant Management</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSignup} className="signup-form">
        <div className="signup-form-group">
          <label className="signup-label">Email:</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </div>

        <div className="signup-form-group">
          <label className="signup-label">Password:</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </div>

        <div className="signup-button-group">
          <button type="submit" className="signup-button">Signup</button>
          <button type="button" className="login-link" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
