import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(null);
  const host = "http://localhost:3000";

  const handleRegister = async () => {
    try {
      const response = await fetch(`${host}/api/admin/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };
  const navigate = useNavigate();
  

  const handleLogin = async () => {
    try {
      const response = await fetch(`${host}/api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message); // Display a success message
        localStorage.setItem('adminData', JSON.stringify(data.user));
  navigate('/admin');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${response.status} - ${errorData.message}`); // Display an error message
      }
    } catch (error) {
      setMessage(`Network Error: ${error.message}`); // Handle network errors
    }
  };



  return (
    <div style={{display:'flex',flexDirection:'column',padding:'20px', height: 'calc(100vh - 122px)'}}>
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
        </div>
      ) : (
        <div style={{display:'flex',
        flexDirection:'column',
        width:'30vw',alignSelf:'center'}}>
          <h2 style={{textAlign:'center'}}>Login or Register</h2>
          <input
          style={{margin:'10px'}}
            type="text"
            placeholder="Username"
            value={username}
            // const copyUsername = {...username}
            // const copyUsername = {e.target.value}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
          style={{margin:'10px'}}

            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" class="btn btn-outline-warning"
          style={{margin:'10px'}}
          onClick={handleRegister}>Register</button>
          <button type='button'  class="btn btn-outline-dark"
          style={{margin:'10px'}}
          onClick={handleLogin}>Login</button>
      {message && <p style={{margin:'10px'}}>{message}</p>}

        </div>
      )}
    </div>
  );
}

export default App;
