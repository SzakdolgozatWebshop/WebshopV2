import React, { useState } from 'react';
import useAuthContext from '../context/AuthContext';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login({email, password});
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