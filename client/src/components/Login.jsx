import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        event.preventDefault();

        try {
            const response = await axios.post('/api/auth/login', {
                email,
                username,
                password
            });

            //Extract token from the response
            const token = response.data.token;

            // Save the token in the local storage
            if (token) {
                localStorage.setItem('token', token);
                console.log('Token saved');

                const user = response.data.user;
                console.log('User:', user);
                localStorage.setItem('user', JSON.stringify(user));
                console.log('User saved');
                setError('');
                alert('Login successful');
                navigate('/');
            } else {
                setError('Invalid credentials');
            }
        }
    };

    return (
        <div className="login-container">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div>
            <label className="form-label" htmlFor="email">Email-ID :</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your email"
               className="form-input"
              required
            />
          </div>
          <div  className="form-group">
            <label className="form-label" htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
               className="form-input"
              required
            />
          </div>
          <button className="login-button" type="submit">Login</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    )
};

export default Login;
