import React, { useState } from 'react';
import axios from 'axios';

function RegForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password_confirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== password_confirmation) {
            console.error('Password confirmation does not match.');
            // Handle password mismatch error (e.g., display error message)
            return;
        }
        try {
            await axios.post('http://localhost:8000/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            });
            console.log("Registration successful.");
            // Handle successful registration (e.g., redirect to dashboard)
        } catch (error) {
            if (error.response) {
                console.error('Registration request failed with validation errors:', error.response.data);
                // Handle validation errors (e.g., display error messages to the user)
            } else {
                console.error('Registration request failed:', error.message);
                // Handle other types of errors (e.g., network errors)
            }
        }
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
