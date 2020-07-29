import React from 'react';
import './styles.css';
import LoadingIndicator from './common/LoadingIndicator';


const SignUpForm = ({ handleInputChange, handleSubmit, loading }) => {
    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text" onChange={handleInputChange} name="username" placeholder="username" />
            <input type="text" onChange={handleInputChange} name="firstname" placeholder="first name" />
            <input type="text" onChange={handleInputChange} name="lastname" placeholder="last name" />
            <input type="text" onChange={handleInputChange} name="email" placeholder="email" />
            <input type="password" onChange={handleInputChange} name="password" placeholder="password" />
            {!loading ? <button type="submit" placeholder="Sign Up">Sign Up</button> : <LoadingIndicator />}
        </form>
    )
}
export default SignUpForm;