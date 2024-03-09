import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../../services/auth';
import './index.scss'; // Import CSS file for Registration component

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        register(email, password).then(res => {
            console.log(res);
            localStorage.setItem('userID', res.UserID);
        });
        navigate('/playground');
    };

    const handleLogin = () => {
        navigate('/playground');
    }


    return (
        <div className='registration-container'>
            <h1>Registration</h1>
            <form className='registration-form' onSubmit={handleRegister}>
                <input
                    required
                    className='registration-input'
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required
                    className='registration-input'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="submit" value='Register' className='registration-button' />
            </form>
            <FontAwesomeIcon icon={faRightToBracket}
                onClick={handleLogin}
                className='logo' />
        </div>
    );
};

export default Registration;

