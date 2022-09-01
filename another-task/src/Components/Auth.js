import React from 'react';
import {useNavigate} from 'react-router-dom'

const Auth = ({ authenticate }) => {
    const navigate = useNavigate();
    const onClick = () => {
        authenticate();
        navigate("/profile")
    };
    return (
        <div>
            <h1>You can authenticate Here</h1>
            <button onClick={onClick}>Authenticate</button>
        </div>
    );
};

export default Auth;
