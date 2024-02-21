import React, { useState } from 'react';
import axios from 'axios';
import useAuthContext from '../context/AuthContext';

function RegForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');
    const {register} = useAuthContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password_confirmation) {
            console.error('Password confirmation does not match.');
            // Handle password mismatch error (e.g., display error message)
            return;
        }
        register({name, email, password, password_confirmation}, {email, password});
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    Confirm Password:
                    <input type="text" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegForm;
