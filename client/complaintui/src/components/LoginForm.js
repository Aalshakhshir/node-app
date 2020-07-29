import React from 'react';
import './styles.css';

const LoginForm = ({ handleInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={handleInputChange} name="username" placeholder="username" />
            <input type="password" onChange={handleInputChange} name="password" placeholder="password" />
            <button type="submit" placeholder="LOGIN">Login</button>
        </form>
    )
}
export default LoginForm;