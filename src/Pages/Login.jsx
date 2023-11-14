import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleGoogleLogin = async (googleData) => {
    try {
      const response = await axios.post('/api/auth/google', {
        token: googleData.tokenId,
      });
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      console.error('Google login failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>

      <GoogleLogin
        clientId="YOUR_CLIENT_ID" // Replace with our Google client ID
        buttonText="Login with Google"
        onSuccess={handleGoogleLogin}
        onFailure={(error) => console.error('Google Login Failure', error)}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
