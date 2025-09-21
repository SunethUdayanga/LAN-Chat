

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here (e.g., authentication)
        // On successful login, navigate to the dashboard
        navigate('/dashboard');
    }

    return (
        <div>
            Login Page
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login