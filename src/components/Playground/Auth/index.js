import React, { useState } from 'react';
import './index.scss';

const authContainerStyle = {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
};

const authFormStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const authInputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
};

const authButtonStyle = {
    padding: '10px',
    margin: '10px 0',
    fontSize: '18px',
    backgroundColor: '#ffd700',
    color: '#022c43',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const authButtonContainerStyle = {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-between',
}

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Logging in with:', { email, password });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Registering with:', { email, password });
    };

    return (
        <div className='auth' style={authContainerStyle}>
            <h1>Authentication</h1>
            <form style={authFormStyle}>
                <input
                    style={authInputStyle}
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={authInputStyle}
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div style={authButtonContainerStyle}>
                    <button style={authButtonStyle} onClick={handleLogin}>
                        Login
                    </button>
                    <button style={authButtonStyle} onClick={handleRegister}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;

