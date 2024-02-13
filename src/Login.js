import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/login', {
                email: email,
                password: password
            });
            console.log("asdasds");
            navigate('/home');
            // Handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            console.error('Login failed:', error);
            // Handle login error (e.g., display error message)
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;