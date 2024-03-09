import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth';
import './index.scss';

const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        login(email, password);
        console.log('Logging in with:', { email, password });
    };

    const handleRegister = () => {
        navigate('register');
    }

    return (
        <div className='auth-container'>
            <h1>Authentication</h1>
            <form className='auth-form' onSubmit={handleLogin}>
                <input
                    required
                    className='auth-input'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
                    className='auth-input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value='Login' className='auth-button' />
            </form>
            <FontAwesomeIcon icon={faUserPlus}
                onClick={handleRegister}
                className='logo register-icon register-button' />
        </div>
    );
};

export default Auth;

