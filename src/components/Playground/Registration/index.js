import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.scss'; // Import CSS file for Registration component

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Registering with:', { email, password });
        // After registration, navigate back to Auth component
        navigate('/playground');
    };

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
                onClick={handleRegister}
                className='logo' />
        </div>
    );
};

export default Registration;

