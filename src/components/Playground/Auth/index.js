import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { getCookie  } from '../../../services/http';
import './index.scss';

const Auth = () => {
    const navigate = useNavigate();
    const singIn = useSignIn();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // TODO: add error handling
        // TODO: add loading state
        // TODO: move to service
        login(email, password).then(res => {
            singIn({
                auth: {
                    token: getCookie('jwt_token'),
                    type: 'Bearer',
                },
                // TODO: configure refresh
                userState: { email, userID: res.user_id}
            });
        });
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

