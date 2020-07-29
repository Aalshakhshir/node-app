import React from 'react';
import './styles.css';
import LoadingIndicator from './common/LoadingIndicator';

const LoginForm = ({ handleInputChange, handleSubmit, loading }) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={handleInputChange} name="username" placeholder="username" />
            <input type="password" onChange={handleInputChange} name="password" placeholder="password" />
            {!loading ? <button type="submit" placeholder="LOGIN">Login</button> : <LoadingIndicator />}
        </form>
    )
}
export default LoginForm;